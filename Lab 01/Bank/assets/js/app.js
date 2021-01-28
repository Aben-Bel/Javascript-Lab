(function(){
    let accounnt = {
        amount:0,
        withdraw:function(amt){
            if(amt >= 500 && amt < 10000){
                if(this.amount > amt){
                    this.amount -= amt;
                    return "Your account after withdrawal is: " + this.amount;
                }else{
                    return "Your account doesn't have that much money. Please recharge first.";
                }
            }else{
                return "This amount is not allowed to withdrawl. maximum amount to withdraw is 10000 and lowest amount is 500";
            }
        },
        deposit:function(amt){
            this.amount += amt;
            return "Your currennt amount after deposit is: " + this.amount;
        },
        balance:function(){
            return "Your current balance is: " + this.amount;
        },
        transfer:function(amt){
            if(this.amount >= amt){
                this.amount -= amt;
                return "Your account after transfer is: " + this.amount;
            }else{
                return "Your account doesn't have that much money. Please recharge first.";
            }
        }
    }

    while(true){
        console.log("**************************************************************");
        console.log("1. Withdrawl");
        console.log("2. Deposit");
        console.log("3. Transfer");
        console.log("4. Balance");
        console.log("5. quit");
        console.log("**************************************************************");

        let choice = parseInt(prompt("Enter your choice: "));

        if(choice == 1){
            console.log(accounnt.withdraw(Number(prompt("Enter the amounnt of money you want to withdrawl"))));
        }else if(choice == 2) {
            console.log(accounnt.deposit(Number(prompt("Enter the amounnt of money you want to deposit"))));
        }else if(choice == 3) {
            console.log(accounnt.transfer(Number(prompt("Enter the amounnt of money you want to transfer"))));
        }else if(choice == 4) {
            console.log(accounnt.balance());
        }else{
            break;
        }
    }
    
}());