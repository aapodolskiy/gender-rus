declare function genderDetection({
    name: Name = '',
    surname = '',
    patronymic = ''
  }: {name?: srtring = '', surname?: string = '', patronymic?: string = ''}): 'male' | 'female' | 'undefined';

export = genderDetection;