"use strict";

// Section 1

const radioButtonMonthly = document.getElementById("radio-input-monthly");
const radioButtonYearly = document.getElementById("radio-input-yearly");
var radioButtonMonthlyText =
  document.getElementsByClassName("radioInputMonthly")[0];
var radioButtonYearlyText =
  document.getElementsByClassName("radioInputYearly")[0];

radioButtonMonthly.addEventListener("click", () => {
  if (radioButtonMonthly.checked) {
    radioButtonMonthlyText.style.fontWeight = "600";
    radioButtonYearlyText.style.fontWeight = "400";
  }
});

radioButtonYearly.addEventListener("click", () => {
  if (radioButtonYearly.checked) {
    radioButtonYearlyText.style.fontWeight = "600";
    radioButtonMonthlyText.style.fontWeight = "400";
  }
});

// Section 2

const radioButtonPersonal = document.getElementById("radio-input-personal");
const radioButtonCompany = document.getElementById("radio-input-company");
var personalText = document.getElementsByClassName("radio-input-personal")[0];
var companyText = document.getElementsByClassName("radio-input-company")[0];

radioButtonPersonal.addEventListener("click", () => {
  if (radioButtonPersonal.checked) {
    personalText.style.fontWeight = "600";
    companyText.style.fontWeight = "400";
  }
});

radioButtonCompany.addEventListener("click", () => {
  if (radioButtonCompany.checked) {
    companyText.style.fontWeight = "600";
    personalText.style.fontWeight = "400";
  }
});
