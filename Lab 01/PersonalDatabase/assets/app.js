
// var firstName; 
// var lastName; 
// var age; 
// var job;

// firstName = prompt("Enter Your First Name");
// lastName = prompt("Enter Your Last Name");
// job = prompt("What is Your Profession ?")
// age = prompt("Enter Your Age");

// console.log("Here is your Profile ")
// console.log("Full Name: " + firstName + " "+lastName);
// console.log("Profession : " + job);
// console.log("Age : " + age + " " + "years old");

// let tempAge;

// let isEligibleToVote;

// tempAge = parseInt(age);

// if (tempAge >= 18) {
//     isEligibleToVote = true;
// } 
// else {
//     isEligibleToVote = false;
// }

// console.log("Is Eligible to Vote : " + isEligibleToVote);


// let familyMember = new Array();

// let numberOfFamily;

// numberOfFamily = prompt("Number of Family  ? ");

// for (let i = 0; i < parseInt(numberOfFamily); i++) {
//     familyMember[i] = prompt("Your Family  Members " + (i + 1));
// }

// console.log("Family Members ");

// familyMember.forEach(function(member) {
//    console.log("Family Member  " + (index + 1) + " : " + member);
// });

// var birthYear;        


// let tempAge = ageCalc(birthYear);
// birthYear = prompt("Enter Your Birth Year");

// console.log("Age : " + tempAge + " " + "years old");


// function ageCalc(birthYear)
// {
//     return new Date().getFullYear() - birthYear;

// }


(function() {
    let person = {
        firstName: "",
        lastName: "",
        profession: "",
        age: "",
        isEligible: false,
        familyMembers: [],
        weight: 0,
        height: 0,
        ageCalc: function(birth) {
            return (new Date).getFullYear() - birth
        },
        calcBmi: function(weight, height) {
            let bmi = (weight/(height*height)).toFixed(2);
            if(bmi < 18.5) {
                return "Your BMI is " + bmi + " and you are unnderweight";
            }else if(bmi < 24.9){
                return "Your BMI is " + bmi + " and you are a healthy or normal weight";
            }else if(bmi < 29.9){
                return "Your BMI is " + bmi + " and you are overweight";
            }else{
                return "Your BMI is " + bmi + " and you are obese";
            }
        }
    }

    person.firstName = prompt("Please enter your first name?");
    person.lastName = prompt("Please enter your last name?");
    person.profession = prompt("What is your profession?");
    person.age = prompt("Please enter your birth year?");
    person.weight = prompt("Please enter your weight?");
    person.height = prompt("Please enter your height?");
    
    let numberOfFamily = prompt("Number of family?");

    for(let i = 0; i < parseInt(numberOfFamily); i++){
        person.familyMembers[i] = prompt("Please enter your family members " + (i+1));
    }



    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + person.firstName + " " + person.lastName);
    console.log("Profession : " + person.profession);
    console.log("Age : " + person.ageCalc(parseInt(person.age)) + " " + "years old");
    console.log("Is Eligible to Vote : " + person.isEligible);
    console.log("Family Members: ");

    person.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    console.log(person.calcBmi(Number(person.weight), Number(person.height)));
    console.log("**************************************************************")




}());