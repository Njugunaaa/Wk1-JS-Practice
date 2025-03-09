function studentGrades(){
  const marks= parseInt(prompt("Input student marks: "))
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
    //I mostly use alert because it is easier to check the program is working live on my browser
    return;
  }
  let grade;
  //The below checks using if ...else if statements to ranks various grades
  if (marks>79){
    grade="A"
  }else if(marks>=60 && marks<=79){
    grade="B"
  }else if(marks>=50 && marks<=59){
    grade="C"
  }else if(marks>=40 && marks<=49){
    grade ="D"
  }else {
    grade = "E"
  }
  alert(`The student's grade is: ${grade}`);
}
//Initialize and calling of the function
studentGrades();
