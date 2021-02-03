addBtn = document.querySelector("#add");
subBtn = document.querySelector("#sub");
mulBtn = document.querySelector("#mul");
divBtn = document.querySelector("#div");
powBtn = document.querySelector("#pow");
sqrtBtn = document.querySelector("#sqrt");

num1 = document.querySelector("#num1");
num2 = document.querySelector("#num2");
nnum = document.querySelector("#nnum");

result = document.querySelector("#res");
error = document.querySelector("#error");

addBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    res = 0;
    console.log(num1.value);
    if(num1.value != "" && num2.value != ""){
        res = Number(num1.value) + Number(num2.value);
    }else if(nnum.value != ""){
        nnum.value.split(",").forEach((val)=>{
            res += Number(val);
        });
    }
    console.log("result: ",res);
    result.textContent = res;

});
subBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    if(num1.value == "" || num2.value == ""){
        error.textContent ="Error: Enter values before using arthimetic";
    }
    result.textContent = Number(num1.value) - Number(num2.value);
});
mulBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    res = 1;
    if(num1.value != "" && num2.value != ""){
        res = Number(num1.value) * Number(num2.value);
    }else if(nnum.value != ""){
        nnum.value.split(",").forEach((val)=>{
            res *= Number(val);
        });
    }
    result.textContent = res;
});
divBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    if(num1.value == "" || num2.value == ""){
        error.textContent ="Error: Enter values before using arthimetic";
    }
    if(num2.value == 0){
        error.textContent = "Error: Division by zero not allowed";
    }else{
        result.textContent = Number(num1.value) / Number(num2.value);
    }
});
powBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    if(num1.value == "" || num2.value == ""){
        error.textContent ="Error: Enter values before using arthimetic";
    }
    result.textContent = Math.pow(Number(num1.value),Number(num2.value));
    
});
sqrtBtn.addEventListener("click",(e)=>{
    error.textContent = "";
    if(num1.value == ""){
        error.textContent ="Error: Enter values before using arthimetic";
    }
    result.textContent = Math.sqrt(Number(num1.value));
});
