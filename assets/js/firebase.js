const firebaseConfig = {
  apiKey: "AIzaSyCQqhCRpG51_RMJ_71VKgrhjP5MoWg1ak0",
  authDomain: "boanovapizza.firebaseapp.com",
  databaseURL: "https://boanovapizza.firebaseio.com",
  projectId: "boanovapizza",
  storageBucket: "boanovapizza.appspot.com",
  messagingSenderId: "252793961747",
  appId: "1:252793961747:web:58199bbae16825a40daee6"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
// var database = firebase.database();
var sabores = document.getElementById("sabores");
var dados = "";

var db = (firebaseRef = firebase
  .database()
  .ref()
  .clild("sabores"));
db.on("child_added", function(snapshot) {
  var adcionado = snapshot.val();
  dados = "<table>" + "<tr><td>" + adcionado + "</td></tr>" + dados;
  sabores.innerHTML = dados;
});
