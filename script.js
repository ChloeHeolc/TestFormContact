"use strict"

let button=document.querySelector('#bt-submit');

function formulaire(){

    let errNom=document.querySelector('#err-nom');
    let errEmail=document.querySelector('#err-email');
    let errMessagge=document.querySelector('#err-message');

    errNom.style.color="erreur"
    errEmail.style.color="erreur"
    errMessagge.style.color="erreur"
    
    let validation=true;

    let nom = document.querySelector('#nom').value;
        console.log(nom);
        console.log(nom.length);
            if(nom.length<1){
                console.log('erreur!1');
                validation=false;
                errNom.textContent="Veuillez rentrer un nom";
            }else{
                errNom.textContent=" ";
            }
        console.log(nom);


    let email = document.querySelector('#email').value;
        console.log(email);
        console.log(email.length);
            if(email.length<1){
                console.log('erreur!1');
                validation=false;
                errEmail.textContent="Veuillez rentrer un email correct";
            }else{
                errEmail.textContent=" ";
            }
        console.log(nom);

    let message = document.querySelector('#message').value;
        console.log(message);
        console.log(message.length);
            if(message.length<1){
                console.log('erreur!1');
                validation=false;
                errMessagge.textContent="Veuillez écrire un message";
            }else{
                errMessagge.textContent=" ";
            }
        console.log(message);

}
button.addEventListener('click', formulaire);