(function(){
    'use strict';
    console.log('reading.js');

    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector("#madlib-text");
    const madlibsOverlay = document.querySelector("#madlibsOverlay");
    const closeButton = document.querySelector("#closeButton");

    
    madlibsOverlay.style.display = "none";

    myForm.addEventListener('submit', function (e){
        e.preventDefault();

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;
        const noun4 = document.querySelector('#noun4').value;

        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;
        const adj3 = document.querySelector('#adj3').value;
        const adj4 = document.querySelector('#adj4').value;

        const num1 = document.querySelector('#number1').value; 
        const verb1 = document.querySelector('#verb1').value;

        let userText = "";

        if (noun1 === ""){
            alert("Please provide a noun!");
            document.querySelector('#noun1').focus();
            return;
        } 
        else if (noun2 === ""){
            alert("Please provide a second noun!");
            document.querySelector('#noun2').focus();
            return;
        } 
        else if (noun3 === ""){
            alert("Please provide a third noun!");
            document.querySelector('#noun3').focus();
            return;
        } 
        else if (noun4 === ""){
            alert("Please provide a fourth noun!");
            document.querySelector('#noun4').focus();
            return;
        } 
        else if (adj1 === ""){
            alert("Please provide an adjective!");
            document.querySelector('#adj1').focus();
            return;
        } 
        else if (adj2 === ""){
            alert("Please provide a second adjective!");
            document.querySelector('#adj2').focus();
            return;
        } 
        else if (adj3 === ""){
            alert("Please provide a third adjective!");
            document.querySelector('#adj3').focus();
            return;
        } 
        else if (adj4 === ""){
            alert("Please provide a fourth adjective!");
            document.querySelector('#adj4').focus();
            return;
        } 
        else if (num1 === ""){
            alert("Please provide a number!");
            document.querySelector('#number1').focus();
            return;
        } 
        else if (verb1 === ""){
            alert("Please provide a verb ending in -ing!");
            document.querySelector('#verb1').focus();
            return;
        } 

       
        userText = `Hello! Welcome to the ${noun1} Cafe! Here at the cafe, we only serve the most ${adj1} ${noun2} within the city! To get you started, how about a ${noun3}!...oh you sure? I personally would not recommend it.`;

        userText += `<br><br> ….Are you really sure?...Um ok don't say I didn't warn you. I'll get it to you as soon as possible then. (${num1} minutes later)…here you go! Thank you so much for ${verb1}, let me know how it tastes…`;

        userText += ` <br><br>So how did it taste!...Oh it was ${adj2} huh?? Well what did I tell you?!?! It's the most ${adj3} item on the menu!! I don't even like it! Did you want to order anything else?? I personally recommend the ${noun4}..oh you were traumatized by that? And whose fault is that??...You know what, here's your check! Um…have a ${adj4} day!`;

       
        madlib.innerHTML = userText;

        
        madlibsOverlay.style.display = "block";

       
        const textFields = document.querySelectorAll('input[type=text]');
        for (let i = 0; i < textFields.length; i++){
            textFields[i].value = "";
        }
    });

    closeButton.addEventListener('click', function(event){
        event.preventDefault();
        madlibsOverlay.style.display = "none";
    });

})();