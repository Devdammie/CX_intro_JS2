//1
function studentScore (score){
    if (score >= 180){
        console.log("Passed");

    }
    else{
        console.log("Failed");
    }
}
studentScore(180)

//2
function candidateAge (age){
    if (age >= 18){
        console.log("You are eligible to vote");

    }
    else{
        console.log("Not eligible");

    }
}
candidateAge(20)

//3
function evaluateStudent(name, score) {
    if (score >= 90) {
      console.log("Excellent");
    } else if (score >= 75) {
      console.log("Good");
    } else if (score >= 50) {
      console.log("Average"); 
    } else {
      console.log("Fail");
    }
  }
  console.log(evaluateStudent("ade",88))
//4
function checkAccess(hasID, isAbove18) {
    if (hasID && isAbove18) {
      return "Access granted";
    } else {
      return "Access denied";
    }
  }
 console.log(checkAccess(true, true));
//5
const studentsMark = [99,89,21,32,3,23,8,23,43,89,29,43,50,43,49,52,39]
for(let i = 0; i < studentsMark.length; i++ ){
    if (studentsMark > 50 ){
        console.log("Passed");
    }
    else{
        console.log("Failed");
    }
}


//6
const passMark = (math, english) => (math >= 50 && english >= 50 ? "Yes" : "No");
console.log(passMark);
//7

function canSignUp(email, phone) {
    if (email || phone) {
      return "Signup successful";
    } else {
      return "Email or phone required";
    }
  }
  console.log(canSignUp("", ""));
  //8
 function validateLogin(username, password) {
    if (username === "" || password === "") {
      return "Invalid input";
    } else {
      return "Login successful";
    }
  }
  console.log(validateLogin("Dammie", "")); 
//9
function workStatus(hours) {
    return hours >= 40 ? "Full-time" : "Part-time";
  }
  console.log(workStatus(38));
  
  //10
  const highestNumber = (a, b) => (a > b ? a : b);
  console.log(highestNumber(10, 25));
