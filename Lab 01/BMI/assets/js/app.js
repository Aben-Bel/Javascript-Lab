function bmi(weight, height) {
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

let height = Number(prompt("Enter your height?"));
let weight = Number(prompt("Enter your weight?"));

console.log(bmi(weight,height));