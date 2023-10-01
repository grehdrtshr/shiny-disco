//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBMKM3tIn6uQaSqGzie7__2KcQCdrRm41Q",
    authDomain: "umm-what-am-i-doing-again.firebaseapp.com",
    databaseURL: "https://umm-what-am-i-doing-again-default-rtdb.firebaseio.com",
    projectId: "umm-what-am-i-doing-again",
    storageBucket: "umm-what-am-i-doing-again.appspot.com",
    messagingSenderId: "188165925125",
    appId: "1:188165925125:web:c12d78ebfeab2e58e5ef6c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");

 function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
document.getElementById("msg").value="";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}