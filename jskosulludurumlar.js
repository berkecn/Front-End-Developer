var age = 50;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age <= 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

// Switch örnek:

var day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Do something on Monday");
    break;
  case "Tuesday":
    console.log("Do something on Tuesday");
    break;
  case "Wednesday":
    console.log("Do something on Wednesday");
    break;
  case "Thursday":
    console.log("Do something on Thursday");
    break;
  case "Friday":
    console.log("Do something on Friday");
    break;
  case "Saturday":
    console.log("Do something on Saturday");
    break;
  case "Sunday":
    console.log("Do something on Sunday");
    break;
  default:
    console.log("There is no such day");
}
