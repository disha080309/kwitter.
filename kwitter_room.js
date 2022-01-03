const firebaseConfig = {
      apiKey: "AIzaSyAEMM7oLz4LLiykRdQ78060_x1JWgvdlwk",
      authDomain: "kwitter-c8281.firebaseapp.com",
      databaseURL: "https://kwitter-c8281-default-rtdb.firebaseio.com",
      projectId: "kwitter-c8281",
      storageBucket: "kwitter-c8281.appspot.com",
      messagingSenderId: "599358912138",
      appId: "1:599358912138:web:65f7662f85112ddcd61f73",
      measurementId: "G-E80T6J8G40"
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