import {
  isEmail,
  isEmpty,
  isURL,
} from 'validator';
import {
  IS_EMAIL_EXIST,
} from 'graphqlQ';
import {
  testForAnySymbol,
  testForLowerCase,
  testForUpperCase,
} from './regexp';
import { LANG_DICTIONARY, ENUMS } from '../consts';

const { DUNS_EIN_SSN_LENGTH } = ENUMS;

const {
  FIELD_REQUIERED,
  ENTER_VALID_EMAIL,
  ENTER_VALID_PHONE,
  ENTER_VALID_URL,
  FIELD_MUST_BE_LEGNTH,
  PASSWORD_MISMATCH,
  PASSWORD_VALIDATION_TITLE,
  PASSSWORD_LOWERCASE,
  PASSSWORD_UPPERCASE,
  NEW_PASSWORD_FILTER_LONG,
  NEW_PASSWORD_FILTER_ADDITIONAL_RULE,
  EMAIL_EXIST,
  NAME_VALIDATION_MESSAGE,
  REGISTRATION_PASSWORD_VALIDATION,
} = LANG_DICTIONARY;

const isNotEmpty = (val) => {
  const testPassed = !isEmpty(val.replace(/\s/gi, ''));

  return testPassed ? '' : FIELD_REQUIERED;
};

const isEmailCheck = (val) => {
  const testPassed = isEmail(val);

  return testPassed ? '' : ENTER_VALID_EMAIL;
};

const isMobilePhoneCheck = (val) => {
  // eslint-disable-next-line no-useless-escape
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const testPassed = phoneRegex.test(val);

  return testPassed ? '' : ENTER_VALID_PHONE;
};

const isURLCheck = (val) => {
  const testPassed = isURL(val);

  return testPassed ? '' : ENTER_VALID_URL;
};

const isChecked = val => (val ? '' : FIELD_REQUIERED);

const isSmallerThen = (val, number) => (val.length < number ? FIELD_MUST_BE_LEGNTH(number) : '');

const isSimmilarPassword = (password, confirm) => (password === confirm ? '' : PASSWORD_MISMATCH);

const validatePassword = (val) => {
  const test1 = val.length < 8;
  const test2 = testForLowerCase(val);
  const test3 = testForUpperCase(val);
  const test4 = testForAnySymbol(val);
  if (test1) {
    return `${PASSWORD_VALIDATION_TITLE} ${NEW_PASSWORD_FILTER_LONG}`;
  }
  if (!test2) {
    return `${PASSWORD_VALIDATION_TITLE} ${PASSSWORD_LOWERCASE}`;
  }
  if (!test3) {
    return `${PASSWORD_VALIDATION_TITLE} ${PASSSWORD_UPPERCASE}`;
  }
  if (!test4) {
    return `${PASSWORD_VALIDATION_TITLE} ${NEW_PASSWORD_FILTER_ADDITIONAL_RULE}`;
  }

  return '';
};

const registrationPasswordValidation = (val) => {
  const test1 = val.length < 8;
  const test2 = testForLowerCase(val);
  const test3 = testForUpperCase(val);
  const test4 = testForAnySymbol(val);
  if (test1 || !test2 || !test3 || !test4) {
    return REGISTRATION_PASSWORD_VALIDATION;
  }

  return '';
};

const validateUserEmail = async (val, client) => {
  const emailError = isEmailCheck(val);
  if (emailError.length) {
    return emailError;
  }

  const result = await checkForEmailExist(val, client);

  return result;
};

const checkForEmailExist = async (val, client) => {
  try {
    const { data } = await client.query({
      query: IS_EMAIL_EXIST,
      variables: {
        email: val,
      },
      fetchPolicy: 'no-cache',
    });
    const { isEmailExist } = data;
    const result = isEmailExist ? EMAIL_EXIST : '';

    return result;
  } catch (e) {
    console.log(e);

    return e.message;
  }
};

const checkForFullAddres = (val) => {
  const isErrorField = Object.entries(val).find(item => !item[1]);

  if (isErrorField) {
    if (isErrorField[0] === 'addressString') {
      return FIELD_REQUIERED;
    }

    return `${FIELD_REQUIERED}: ${isErrorField[0]}`;
  }

  return '';
};

const isName = (val) => {
  const decompositionName = val.split(' ');

  if (!decompositionName[0]) {
    return FIELD_REQUIERED;
  }

  if (!decompositionName[1]) {
    return `${NAME_VALIDATION_MESSAGE}.`;
  }

  return '';
};

const checkConfirmationPassword = (val, newPassword) => (val === newPassword ? '' : 'Password mismatch.');

const registrationValidationSchema = (val, client) => ({
  companyName: () => isNotEmpty(val),
  companyEmail: () => validateUserEmail(val, client),
  role: () => isNotEmpty(val),
  phoneNumber: () => isMobilePhoneCheck(val),
  fullName: () => isName(val),
  companyType: () => isNotEmpty(val),
  companyAddress: () => isNotEmpty(val),
  websiteUrl: () => isURLCheck(val),
  typeOfBusiness: () => isNotEmpty(val),
  businessOwnerName: () => isName(val),
  businessOwnerPhone: () => isMobilePhoneCheck(val),
  businessOwnerEmail: () => isEmailCheck(val),
  ownerRole: () => isNotEmpty(val),
  buyerAgree: () => isChecked(val),
  controlStatementAgree: () => isChecked(val),
  antiMoneyLaunderinLaswsAgree: () => isChecked(val),
  duns: () => isSmallerThen(val, DUNS_EIN_SSN_LENGTH),
  einOrSsn: () => isSmallerThen(val, DUNS_EIN_SSN_LENGTH),
  password: () => registrationPasswordValidation(val),
  billingZip: () => isNotEmpty(val),
  fullCompanyAddress: () => checkForFullAddres(val),
});

const isShowErrorPopup = (message) => {
  const errorMessages = [
    'Invalid login credentials',
    "Cannot read property 'getFirstName' of undefined",
    'повторяющееся значение ключа нарушает ограничение уникальности "ach_nickname_key"',
    "Cannot read property 'toPublic' of null",
  ];

  const isNormalError = errorMessages.find(item => item === message);

  return !isNormalError;
};

export {
  isEmailCheck,
  isNotEmpty,
  isMobilePhoneCheck,
  isURLCheck,
  isChecked,
  isSmallerThen,
  validatePassword,
  isSimmilarPassword,
  registrationValidationSchema,
  checkConfirmationPassword,
  isShowErrorPopup,
};
