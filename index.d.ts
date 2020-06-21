declare function genderDetection({
    name: Name = '',
    surname: Surname = '',
    patronymic: Patronymic = ''
  }: {name?: srtring, surname?: string, patronymic?: string}): 'male' | 'female' | 'undefined';

export = genderDetection;