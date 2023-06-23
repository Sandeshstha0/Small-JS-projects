let ramdomNum = Math.floor(Math.random() * 100 + 1);
let gussNumber;
let chances = 10;

while (gussNumber != ramdomNum) {
  gussNumber = prompt("enter the number");
  gussNumber = parseInt(gussNumber);
  if (gussNumber > ramdomNum) {
    console.log(
      "Try again , Actual nuber is smaller then your number" + gussNumber
    );
  } else if (gussNumber < ramdomNum) {
    console.log(
      "try again ,Actual number is greater than your number" + gussNumber
    );
  }
  chances--;
}
alert("HEy congrulation your gussed right , The number is " + ramdomNum);
alert("your score is" + chances);
