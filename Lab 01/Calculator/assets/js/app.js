function addition(listA){
    let result = 0;
    listA.forEach(function(ele){
        result += ele;
    });
    return result;
}

function multiplication(listA){
    let result = 1;
    listA.forEach(function(ele){
        result *= ele;
    });
    return result;
}

(function(){
    function subtraction(a, b){
        return a - b;
    }

    function division(a, b){
        return a/b;
    }

    function max(listA){
        return Math.max(...listA);
    }

    function min(listA){
        return Math.min(...listA);
    }

    function average(listA){
        let sum = 0;
        listA.forEach(function(e){
            sum += e;
        });
        return sum/listA.length;
    }

    function square(a){
        return a*a;
    }


    console.log("**************************************************************");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Max");
    console.log("6. Minimum");
    console.log("7. Average");
    console.log("8. Square");
    console.log("**************************************************************");

    let choice = parseInt(prompt("Enter your choice: "));
    if(choice == 1){
        let times = parseInt(prompt("How many numbers do you want to add?"));
        let listA = [];
        for(let i = 0; i<times; i++){
            listA.push(Number(prompt("Enter the number: ")));
        }
        console.log("\n\n\nResult is: " + addition(listA));
    }else if(choice == 2) {
        let num1 = Number(prompt("Enter the first number?"));
        let num2 = Number(prompt("Enter the second nnumber?"));

        console.log("\n\n\nResult is: " + subtraction(num1,num2));
    }else if(choice == 3) {
        let times = parseInt(prompt("How many numbers do you want to multiply?"));
        let listA = [];
        for(let i = 0; i<times; i++){
            listA.push(Number(prompt("Enter the number: ")));
        }
        console.log("\n\n\nResult is: " + multiplication(listA));
    }else if(choice == 4) {
        let num1 = Number(prompt("Enter the first number?"));
        let num2 = Number(prompt("Enter the second nnumber?"));
        if(num2 == 0) {
            console.log("\n\n\n Division by zero not allowed");
        }else{
            console.log("\n\n\nResult is: " + division(num1,num2));
        }
        
    }else if(choice == 5) {
        let times = parseInt(prompt("How many numbers do you want to compare?"));
        let listA = [];
        for(let i = 0; i<times; i++){
            listA.push(Number(prompt("Enter the number: ")));
        }
        console.log("\n\n\nResult is: " + max(listA));
    }else if(choice == 6) {
        let times = parseInt(prompt("How many numbers do you want to compare?"));
        let listA = [];
        for(let i = 0; i<times; i++){
            listA.push(Number(prompt("Enter the number: ")));
        }
        console.log("\n\n\nResult is: " + min(listA));
    }else if(choice == 7) {
        let times = parseInt(prompt("How many numbers do you want to average?"));
        let listA = [];
        for(let i = 0; i<times; i++){
            listA.push(Number(prompt("Enter the number: ")));
        }
        console.log("\n\n\nResult is: " + average(listA));
    }else if(choice == 8){
        let num1 = Number(prompt("Enter the number?"));
        console.log("\n\n\nResult is: " + square(num1));
    }
}());
