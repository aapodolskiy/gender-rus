declare function genderDetection({
  name: Name,
  surname: Surname,
  patronymic: Patronymic,
}: {
  name?: string;
  surname?: string;
  patronymic?: string;
}): 'male' | 'female' | 'undefined';

export = genderDetection;
