const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const numbers = /[0-9]/;
const space = /\s/;
const anySymbol = /\S\D\W/;
export const phoneNumber = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

const testForLowerCase = str => lowerCase.test(str);
const testForUpperCase = str => upperCase.test(str);
const testForAnySymbol = str => numbers.test(str) || space.test(str) || anySymbol.test(str);
const testForPhoneNumber = str => phoneNumber.test(str);


export {
  testForAnySymbol,
  testForLowerCase,
  testForUpperCase,
  testForPhoneNumber,
};
