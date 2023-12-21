let required = property => {
  return v => !!v || `${property} is required`;
};

let number = () => {
  return v => /^[0-9_. ]*$/.test(v) || "Please enter numbers only";
};

let email = () => {
  return v =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    ) || "Must be a valid email";
};

let minValue = (property, minValue) => {
  return v =>
    (v && parseFloat(v) > minValue) ||
    `${property} must be greater than ${minValue}`;
};

let maxValue = (property, maxValue) => {
  return v =>
    (v && parseFloat(v) <= maxValue) ||
    `${property} must be less than ${maxValue}`;
};

let minLength = (property, minLength) => {
  return v =>
    (v && v.length >= minLength) ||
    `${property} must be greater than ${minLength} characters`;
};

let maxLength = (property, maxLength) => {
  return v =>
    (v && v.length <= maxLength) ||
    `${property} must be less than ${maxLength} characters`;
};
let phone = () => {
    return v => (v && v.length ==10) || "Contact Number should be 10 digits";
};
let phone1 = () => {
  return v =>
    v == 0 ||
    (v && !isNaN(parseFloat(v)) && v.length >= 10 && v.length <= 15) ||
    "Contact Number should be 10 & 15 digits";
};

let pinNumber = () => {
  return v => (v && v.length == 6) || "Value Must be 6 Digit";
};
let panNumber = () => {
  return v => (v && v.length == 10) || "Value Must be 10 Digit";
};
let addhaarNumber = () => {
  return v => (v && v.length == 12) || "Value Must be 12 Digit";
};
let gstNumber = () => {
  return v => (v && v.length == 15) || "Enter a valid GST";
};
let specialMOfferValue = (property, maxValue) => {
  return v =>
    (v && parseFloat(v) <= maxValue) ||
    `${property} must be less than or equal to ${maxValue}`;
};
export default {
  required,
  number,
  email,
  minValue,
  maxValue,
  phone,
  pinNumber,
  minLength,
  maxLength,
  panNumber,
  addhaarNumber,
  gstNumber,
  specialMOfferValue
};
