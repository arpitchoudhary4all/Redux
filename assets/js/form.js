// Initialize Firebase
var config = {
    apiKey: "AIzaSyABybJq_-PPnIIGNkCHScYb_uU0OukM6Hs",
    authDomain: "contactform-910e7.firebaseapp.com",
    databaseURL: "https://contactform-910e7.firebaseio.com",
    projectId: "contactform-910e7",
    storageBucket: "contactform-910e7.appspot.com",
    messagingSenderId: "834090061680"
  };
firebase.initializeApp(config);

//Reference message collection
var messageRef=firebase.database().ref('message');

//Listen for form submit
document.getElementById('contactform').addEventListener('submit',submitform);

//Submit form execution
function submitform(e){
    e.preventDefault();
    //get values
    var name=getInput('name');
    var email=getInput('email');
    var phone=getInput('phone');
    var message=getInput('message');
    
    //Send mail
    var request = new XMLHttpRequest();
    var form = document.getElementById('contactform');
    var data = new FormData(form)
    request.open('POST', 'https://formspree.io/choudharyarpit99@gmail.com', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
    
    //Save message to database
    saveMessage(name,email,phone,message);
}

//Function to get values from form
function getInput(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,email,phone,message){
    var newmessageRef=messageRef.push();
    newmessageRef.set({
       name:name,
       email:email,
       phone:phone,
       message:message
    });
    alert("Thanks For Ur valuable Suggestion")
}