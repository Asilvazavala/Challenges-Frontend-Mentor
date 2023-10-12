const dayInput = document.getElementById("dayInput");
const dayError = document.getElementById("dayError");
const dayTitle = document.getElementById("dayTitle");
const dayValue = document.getElementById("dayValue");
const monthInput = document.getElementById("monthInput");
const monthError = document.getElementById("monthError");
const monthTitle = document.getElementById("monthTitle");
const monthValue = document.getElementById("monthValue");
const yearInput = document.getElementById("yearInput");
const yearError = document.getElementById("yearError");
const yearTitle = document.getElementById("yearTitle");
const yearValue = document.getElementById("yearValue");
const btnArrow = document.getElementById("btnArrow");
let errors = {};

function validateInput(input, error, title, errorMessage, condition) {
  const inputValue = parseInt(input.value);

  if (isNaN(inputValue) || condition) {
    input.classList.add("focus:outline-LightRed", "border-LightRed");
    input.classList.remove("focus:outline-Purple", "border-Purple");
    error.classList.remove("opacity-0");
    error.textContent = errorMessage;
    title.classList.add("text-LightRed");
    title.classList.remove("text-SmokeyGrey");
  } else {
    input.classList.add("focus:outline-Purple", "border-Purple");
    input.classList.remove("focus:outline-LightRed", "border-LightRed");
    error.classList.add("opacity-0");
    title.classList.remove("text-LightRed");
    title.classList.add("text-SmokeyGrey");
    return true;
  }
}

function validateDayForMonth(month, day) {
  const validMonths = [1, 3, 5, 7, 8, 10, 12]; 
  const selectedMonth = parseInt(month);
  const selectedDay = parseInt(day);

  if (isNaN(selectedMonth) || isNaN(selectedDay)) {
    return true; 
  }

  if (selectedMonth === 2) {
    if (selectedDay > 29) {
      return false; 
    }
  } else if (!validMonths.includes(selectedMonth)) {
    if (selectedDay > 30) {
      return false; 
    }
  }

  return true; 
}

function validateLeapYear(month, day, year) {
  const selectedMonth = parseInt(month);
  const selectedDay = parseInt(day);
  const selectedYear = parseInt(year);

  if (isNaN(selectedMonth) || isNaN(selectedDay) || isNaN(selectedYear)) {
    return true; 
  }

  if (selectedDay === 29 && selectedMonth === 2 && selectedYear % 4 !== 0) {
    return false
  }

  return true; 
}

dayInput.addEventListener("input", function () {
  const dayIsValid = validateInput(
    dayInput,
    dayError,
    dayTitle,
    "Must be (1-31)",
    dayInput.value < 1 || dayInput.value > 31 || dayInput.value === ""
  );

  if (!dayIsValid) {
    errors.day = true
    return
  } else {
    errors.day = null
  }

  const dayIsValidForMonth = validateDayForMonth(monthInput.value, dayInput.value);
  const isLeapYear = validateLeapYear(monthInput.value, dayInput.value, yearInput.value);

  if (!dayIsValidForMonth) {
    errors.day = true;
    dayError.classList.remove("opacity-0");
    dayError.textContent = "Not exist in month";
    dayInput.classList.add("focus:outline-LightRed", "border-LightRed");
    dayInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.day = null;
    dayError.classList.add("opacity-0");
    dayInput.classList.add("focus:outline-Purple", "border-Purple");
    dayInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }

  if (!isLeapYear) {
    errors.year = true;
    yearError.classList.remove("opacity-0");
    yearError.textContent = "Not Leap Year";
    yearInput.classList.add("focus:outline-LightRed", "border-LightRed");
    yearInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.year = null;
    yearError.classList.add("opacity-0");
    yearInput.classList.add("focus:outline-Purple", "border-Purple");
    yearInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }
})

monthInput.addEventListener("input", function () {
  const monthIsValid = validateInput(
    monthInput,
    monthError,
    monthTitle,
    "Must be (1-12)",
    monthInput.value < 1 || monthInput.value > 12 || monthInput.value === ""
  );

  if (!monthIsValid) {
    errors.month = true
  } else {
    errors.month = null
  }

  const dayIsValidForMonth = validateDayForMonth(monthInput.value, dayInput.value);
  const isLeapYear = validateLeapYear(monthInput.value, dayInput.value, yearInput.value);

  if (!dayIsValidForMonth) {
    errors.day = true;
    dayError.classList.remove("opacity-0");
    dayError.textContent = "Not exist in month";
    dayInput.classList.add("focus:outline-LightRed", "border-LightRed");
    dayInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.day = null;
    dayError.classList.add("opacity-0");
    dayInput.classList.add("focus:outline-Purple", "border-Purple");
    dayInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }

  if (!isLeapYear) {
    errors.year = true;
    yearError.classList.remove("opacity-0");
    yearError.textContent = "Not Leap Year";
    yearInput.classList.add("focus:outline-LightRed", "border-LightRed");
    yearInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.year = null;
    yearError.classList.add("opacity-0");
    yearInput.classList.add("focus:outline-Purple", "border-Purple");
    yearInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }
})

yearInput.addEventListener("input", function () {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const currentDate = new Date();  
  const inputDate = new Date(year, month - 1, day);
  const difference = getDateDifference(inputDate, currentDate); 

  const yearsElapsed = difference.years;

  const yearIsValid = validateInput(
    yearInput,
    yearError,
    yearTitle,
    "Must be a valid year",
    yearInput.value < 1 || yearInput.value === "" ||  yearsElapsed < 0
  );

  if (!yearIsValid) {
    errors.year = true
  } else {
    errors.year = null
  }

  const dayIsValidForMonth = validateDayForMonth(monthInput.value, dayInput.value);
  const isLeapYear = validateLeapYear(monthInput.value, dayInput.value, yearInput.value);

  if (!dayIsValidForMonth) {
    errors.day = true;
    dayError.classList.remove("opacity-0");
    dayError.textContent = "Not exist in month";
    dayInput.classList.add("focus:outline-LightRed", "border-LightRed");
    dayInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.day = null;
    dayError.classList.add("opacity-0");
    dayInput.classList.add("focus:outline-Purple", "border-Purple");
    dayInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }

  if (!isLeapYear) {
    errors.year = true;
    yearError.classList.remove("opacity-0");
    yearError.textContent = "Not Leap Year";
    yearInput.classList.add("focus:outline-LightRed", "border-LightRed");
    yearInput.classList.remove("focus:outline-Purple", "border-Purple");
  } else {
    errors.year = null;
    yearError.classList.add("opacity-0");
    yearInput.classList.add("focus:outline-Purple", "border-Purple");
    yearInput.classList.remove("focus:outline-LightRed", "border-LightRed");
  }
})

btnArrow.addEventListener("click", function () {
  let hasError = false;
  for (const key in errors) {
    if (errors[key] === true) {
      hasError = true;
      break; 
    }
  }

  if (hasError) return

  const yearIsEmpty = validateInput(
    yearInput,
    yearError,
    yearTitle,
    "This field is required",
    yearInput.value === "" 
  );

  if (!yearIsEmpty) {
    errors.year = true
  }

  const monthIsEmpty = validateInput(
    monthInput,
    monthError,
    monthTitle,
    "This field is required",
    monthInput.value === "" 
  );

  if (!monthIsEmpty) {
    errors.month = true
  }

  const dayIsEmpty = validateInput(
    dayInput,
    dayError,
    dayTitle,
    "This field is required",
    dayInput.value === "" 
  );

  if (!dayIsEmpty) {
    errors.day = true
  }

  for (const key in errors) {
    if (errors[key] === true) {
      hasError = true;
      break; 
    }
  }

  if (hasError) return

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const currentDate = new Date();  
  const inputDate = new Date(year, month - 1, day);
  const difference = getDateDifference(inputDate, currentDate); 

  const yearsElapsed = difference.years;
  const monthsElapsed = difference.months;
  const daysElapsed = difference.days;
  
  const yearIsValid = validateInput(
    yearInput,
    yearError,
    yearTitle,
    "Must be in the past",
    yearsElapsed < 0
  );

  if(!yearIsValid) return

  dayValue.textContent = daysElapsed;
  monthValue.textContent = monthsElapsed;
  yearValue.textContent = yearsElapsed;
})

function getDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const yearLessThan100 = parseInt(yearInput.value) < 100 
    ? 1900
    : 0

  let years = end.getFullYear() - start.getFullYear() + yearLessThan100;
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    const lastDayOfMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    days += lastDayOfMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}