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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function back(){
      window.location="kwitter_room.html";
}
function send(){
msg=document.getElementById('msg').value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}


