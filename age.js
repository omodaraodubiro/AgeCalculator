let btn = document.querySelector(".con__btn");
let input = document.querySelector(".con__input");
let output = document.querySelector(".heading--2");

btn.addEventListener("click", calculate);

function calculate() {
  let inputData, inputArray, year, month, day;

  inputData = input.value;

  if (inputData !== "") {

    inputArray = inputData.split("-");
    [year, month, day] = inputArray;
    year = Number(year);
    month = Number(month);
    day = Number(day);

    let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1; 
    currentDate = current.getDate();

    if (day === currentDate && month === currentMonth) {
      let birthday = currentYear - year;
      output.innerHTML = `Congratulation! Today Is your birthday you are ${birthday} Years Old. `;
    } else {

      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      }
      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }
      year = currentYear - year;

      output.innerHTML = `${year} Years ${month} Month ${day} Days.`;
    }

  } else {
    alert("Please Input your Birthday");
  }
}