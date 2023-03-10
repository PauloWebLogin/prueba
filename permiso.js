// ¿Quién puede firmar un contrato de trabajo?
// Los mayores de edad (18 años).
// Los menores de 18 años legalmente emancipados.
// Mayores de 16 y menores de 18 si tienen autorización de los padres.

const people = [
    { name: 'Ana', age: 17, isEmancipated: false, isAuthorizated: false },
    { name: 'Berto', age: 15, isEmancipated: true, isAuthorizated: false },
    { name: 'Clara', age: 20, isEmancipated: true, isAuthorizated: false },
    { name: 'Daniel', age: 16, isEmancipated: false, isAuthorizated: true },
    { name: 'Elena', age: 17, isEmancipated: false, isAuthorizated: true },
    { name: 'Felix', age: 18, isEmancipated: false, isAuthorizated: false },
  ];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18 || (people[i].age <18 && people[i].isEmancipated === true) || (people[i].age >16 && people[i].age <18 && people[i].isAuthorizated === true )) {
      console.log(people[i].name + " " + people[i].age + " " + people[i].isEmancipated + " " + people[i].isAuthorizated);
    }
  }
