/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
const reloadIcon = document.querySelector('.fa');
const allH3 = document.querySelectorAll('h3');



reloadIcon.addEventListener('click', reloadPage);

function reloadPage() {
    location.reload();
}


// Display the BOM Information on the innerHTML of the elements

(function(){
    types = ["location, "]
    allH3.forEach(function(ele){
        let divCollection = ele.nextElementSibling
        divCollection.childNodes.forEach(function(ele){
            let anchors = ele.childNodes;
            anchors.forEach(function(ele){
                let property = ele.nodeValue;
                if(property){
                    property = property.slice(0,1).toLowerCase() + property.slice(1);
                    ele.nextSibling.textContent =  location[property] || navigator[property] || screen[property] || history[property];
                    console.log(Window[property]);
                }
            })
        });
    })
}());
