const firebaseConfig = {
      apiKey: "AIzaSyAsoxF0YexRx9jctZCOKCFxN9B7oaK08_Y",
      authDomain: "kwitter-89c1d.firebaseapp.com",
      databaseURL: "https://kwitter-89c1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-89c1d",
      storageBucket: "kwitter-89c1d.appspot.com",
      messagingSenderId: "407554900924",
      appId: "1:407554900924:web:13fc5536719eaa69d821b9"
    };
    
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name")

    function getData() {
     firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
    document.getElementById("output").innerHTML += row; }); }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function addroom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroom"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";
}
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}