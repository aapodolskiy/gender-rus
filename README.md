# techical information

Module is written on `ts` and uses `es6` syntax.

# import

The whole module is just a function `detectGender` and a type `Gender`.
```ts
import detectGender, { Gender } from 'gender-rus';
```

# usage

```ts
const determinedGender: Gender = detectGender('Иванов', 'Иван', 'Иванович');
// determinedGender = 'male';
```

Arguments for `determinedGender` are: name, surname and patronymic.<br/>
Return value can be `'male'`, `'female'` or `'undefined'` (and that enum is exactly the type `Gender`).

# under the hood

Algorithm for determining gender is straightforward.<br/>
First, we determine gender of each part of full name.<br/>
If all parts cannot be determined, we return `'undefined'`. <br/>
If some parts are `'female'` and some parts are `'male'`, we return `'undefined'` too. <br/>
If all parts are `'male'` or `'undefined'` -- we return `'male'`, corresponding for `'female'`.

---

More information will be here later.