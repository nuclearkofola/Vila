enum Role {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

const user = {
  name: 'David Pecko',
  age: 34,
  role: Role.ADMIN,
};

console.log(user.role); // Vypíše: 'admin'

function test(myValue: string) {
  return myValue;
}

function generateError(errorText: string, errorNumber: number): never {
  throw { message: errorText, errorCode: errorNumber };
}

generateError('Závažná chyba', 688);
