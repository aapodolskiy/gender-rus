# Gender-rus

Determine the gender, based on Russian name, surname, or patronymic. <br/>

## usage

```js
import detectGender from 'gender-rus';

detectGender({surname: 'Иванов', name: 'Иван', patronymic: 'Иванович'});
// => 'male';

detectGender({name: 'МАРИЯ', patronymic: 'ВЛАДИМИРОВНА'});
// => 'female';

detectGender({name: 'Женя', surname: 'Бойко'});
// => 'undefined';
```

The only argument for `determinedGender` is an object with three optional properties: name, surname, and patronymic. Letter case does not matter. <br/>
Return value can be `'male'`, `'female'` or `'undefined'`.

## under the hood

The algorithm for determining gender is pretty straightforward. <br/>
First, we determine the gender of name, surname, and patronymic separately. <br/>

If all parts cannot be determined, result is `'undefined'`:
```ts
detectGender({name: 'бубу', surname: 'хаха', patronymic: 'ггг'});
// => 'undefined';


detectGender({name: 'Саша', surname: 'Фейнман'});
//            ^             ^
//            undefined     undefined
//
// => 'undefined';
```

If some are `'female'` and some parts are `'male'`, result is `'undefined'` too:
```ts
detectGender({name: 'Гадя', patronymic: 'Петрович', surname: 'Хренова'});
//            ^             ^                       ^
//            undefined     male                    female
//
// => 'undefined';

detectGender({name: 'влад', patronymic: 'васильевна'});
//            ^             ^
//            male          female
//
// => 'undefined';
```

If all parts are `'male'` or `'undefined'`, result is `'male'`:
```ts
detectGender({surname: 'ЗАБОЛОЦКИЙ'});
//            ^
//            male
//
// => 'male';

detectGender({name: 'Х', patronymic: 'Петрович'});
//            ^          ^
//            undefined  male
//
// => 'male';
```

Similarly for `'female'`:
```ts
detectGender({name: 'А.', patronymic: 'И.', surname: 'Ульянова'});
//            ^           ^                 ^
//            undefined   undefined         female
//
// => 'female';
```
