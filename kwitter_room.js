var firebaseConfig = {
      apiKey: "AIzaSyCaJ_U_CAZcn4zmwHbjmxxUrZVJx_bX_-M",
      authDomain: "kwitter-dac0d.firebaseapp.com",
      databaseURL: "https://kwitter-dac0d-default-rtdb.firebaseio.com",
      projectId: "kwitter-dac0d",
      storageBucket: "kwitter-dac0d.appspot.com",
      messagingSenderId: "775726681056",
      appId: "1:775726681056:web:51fb5c19e95d2a914af985",
      measurementId: "G-3F8M20Q68H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

function addroom() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            show: "Kapil Sharma Show",
            class: "95"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row
                  //End code
            });
      });
}

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}