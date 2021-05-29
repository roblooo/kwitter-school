//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        var name = message_data['name'];
                        message = message_data['message']
                        like = message_data['like']
                        row = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>" + message + "</h4><button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        document.getElementById("output").innerHTML+=row
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}