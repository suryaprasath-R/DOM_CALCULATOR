let OutputScreen = document.getElementById("result");

//getting the value

function display(num){
    OutputScreen.value += num;
}

// = function

function Calculate(){
    try{
        OutputScreen.value = eval(OutputScreen.value);
    }
    catch(err)
    {
        alert("Only numbers are allowed");
    }
}

// clear the display 
function Clear(){
    OutputScreen.value = "";
}

//del one by one with slice

function del(){
    OutputScreen.value = OutputScreen.value.slice(0,-1);
}

// toggle swtich

let input = document.querySelector(".theme-switcher input");
input.addEventListener("change", (e) => {  
    if (e.target.checked) {  
     document.body.setAttribute("data-theme", "dark");  
    } else {  
     document.body.setAttribute("data-theme", "light");  
    }  
   });