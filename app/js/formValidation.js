"use strict";

// FORM SECTION 1

var fNameSection1 = document.getElementById("fname-section1");
var lNameSection1 = document.getElementById("lname-section1");
var phoneSection1 = document.getElementById("phone-section1");
var submitSection1 = document.getElementsByClassName("submit-section1")[0];
var isCheckedRadioYearly = document.getElementById("radio-input-yearly");
var isCheckedRadioMonthly = document.getElementById("radio-input-monthly");

// FORM SECTION 2

var fNameSection2 = document.getElementById("fname-section2");
var lNameSection2 = document.getElementById("lname-section2");
var phoneSection2 = document.getElementById("phone-section2");
var submitSection2 = document.getElementsByClassName("submit-section2")[0];
var isCheckedRadioPersonal = document.getElementById("radio-input-personal");
var isCheckedRadioCompany = document.getElementById("radio-input-company");

const substring = "+370";

// ADD COUNTRY CODE AUTOMATICALY Section 1

phoneSection1.addEventListener("click", () => {
  phoneSection1.value = "+370";
  if (phoneSection1.value.includes(substring)) {
    phoneSection1.removeEventListener("click", () => {});
  }
});

// ADD COUNTRY CODE AUTOMATICALY Section 2

phoneSection2.addEventListener("click", () => {
  phoneSection2.value = "+370";
  if (phoneSection2.value.includes(substring)) {
    phoneSection2.removeEventListener("click", () => {});
  }
});

// FORM VALIDATION

// CHECKS IF STRING CONTAINS NUMBER

function hasNumber(myString) {
  return /\d/.test(myString);
}

// CHECKS IF STRING CONTAINS ANY LETTERS

function containsAnyLetter(str) {
  return /[a-zA-Z]/.test(str);
}

// FORM CHECK ON SUBMIT

submitSection1.addEventListener("click", () => {
  if (
    fNameSection1.value == "" ||
    lNameSection1.value == "" ||
    phoneSection1.value == ""
  ) {
    alert(`Please fill all form fields!`);
  } else if (!isCheckedRadioYearly.checked && !isCheckedRadioMonthly.checked) {
    alert(`Please choose monthly or yearly subscription`);
  } else if (hasNumber(fNameSection1.value)) {
    alert(`Name do not contain numbers. Please fill your real name!`);
  } else if (hasNumber(lNameSection1.value)) {
    alert(`Surname do not contain numbers. Please fill your real surname!`);
  } else if (containsAnyLetter(phoneSection1.value)) {
    alert(
      `Phone number do not contain letters. Please write real phone number!`
    );
  } else if (!phoneSection1.value.includes(substring)) {
    alert(
      `Your phone number do not include required country code! Your phone number should start with +370`
    );
  } else if (phoneSection1.value.length !== 12) {
    alert(`Please write your real phone number!`);
  } else {
    alert(
      `Thank you ${fNameSection1.value} ${lNameSection1.value} for your interest in our company. Our consultat will contact you in a moment.`
    );
  }
});

submitSection2.addEventListener("click", () => {
  if (
    fNameSection2.value == "" ||
    lNameSection2.value == "" ||
    phoneSection2.value == ""
  ) {
    alert(`Please fill all form fields!`);
  } else if (
    !isCheckedRadioPersonal.checked &&
    !isCheckedRadioCompany.checked
  ) {
    alert(`Please choose monthly or yearly subscription`);
  } else if (hasNumber(fNameSection2.value)) {
    alert(`Name do not contain numbers. Please fill your real name!`);
  } else if (hasNumber(lNameSection2.value)) {
    alert(`Surname do not contain numbers. Please fill your real surname!`);
  } else if (containsAnyLetter(phoneSection2.value)) {
    alert(
      `Phone number do not contain letters. Please write real phone number!`
    );
  } else if (!phoneSection2.value.includes(substring)) {
    alert(
      `Your phone number do not include required country code! Your phone number should start with +370`
    );
  } else if (phoneSection2.value.length !== 12) {
    alert(`Please write your real phone number!`);
  } else {
    alert(
      `Thank you ${fNameSection2.value} ${lNameSection2.value} for your interest in our company. Our consultat will contact you in a moment.`
    );
  }
});
