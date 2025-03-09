function calculateNetSalary() {
  const basicSalary = parseFloat(prompt("Enter your basic salary (Ksh):"));
  const benefits = parseFloat(prompt("Enter your benefits (Ksh):"));
//THe below checks whether the input is valid as well as a positive input
  if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    alert("Invalid input. Please enter valid positive numbers.");
    return;
  }

  const grossSalary = basicSalary + benefits;

  const payee = calculatePAYE(grossSalary);
  const nhif = calculateNHIF(grossSalary);
  const nssf = calculateNSSF(basicSalary);
  const housingLevy = grossSalary * 0.015;//Included the new housing levy model

  const netSalary = grossSalary - (payee + nhif + nssf + housingLevy);
//I mostly use alert because it is easier to check the program is working live on my browser 
  alert(`
    Gross Salary: Ksh ${grossSalary.toFixed(2)}
    PAYE (Tax): Ksh ${payee.toFixed(2)}
    NHIF Deduction: Ksh ${nhif.toFixed(2)}
    NSSF Deduction: Ksh ${nssf.toFixed(2)}
    Housing Levy: Ksh ${housingLevy.toFixed(2)}
    Net Salary: Ksh ${netSalary.toFixed(2)}
  `);
}
//PAYE is where most of the tax is deducted from
function calculatePAYE(grossSalary) {
  if (grossSalary <= 24000) return grossSalary * 0.1;
  if (grossSalary <= 32333) return grossSalary * 0.25;
  if (grossSalary <= 500000) return grossSalary * 0.3;
  if (grossSalary <= 800000) return grossSalary * 0.325;
  return grossSalary * 0.35;
}
//NHIF
function calculateNHIF(grossSalary) {
  return grossSalary * 0.0275;
}
//NSSF function calculator
//Be careful with this it combines ternary operators as well
function calculateNSSF(basicSalary) {
  const tierI = Math.min(basicSalary, 8000) * 0.06;
  const tierII = basicSalary > 8000 ? (Math.min(basicSalary, 72000) - 8000) * 0.06 : 0;
  return tierI + tierII;
}

//Initialize and calling of the function
calculateNetSalary();

