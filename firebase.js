// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQqhCRpG51_RMJ_71VKgrhjP5MoWg1ak0",
  authDomain: "boanovapizza.firebaseapp.com",
  databaseURL: "https://boanovapizza.firebaseio.com",
  projectId: "boanovapizza",
  storageBucket: "boanovapizza.appspot.com",
  messagingSenderId: "252793961747",
  appId: "1:252793961747:web:58199bbae16825a40daee6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

// Get a reference to the database service

var sabor = document.getElementById("boa_pizza");
var dados = "";
var db = (firebaseRef = firebase
  .database()
  .ref()
  .child("sabores"));
db.on("child_added", function(snapshot) {
  var adcionado = snapshot.val();
  dados = adcionado;
  console.log(JSON.stringify(adcionado));
  document.getElementById("boa_pizza").innerHTML = JSON.stringify(adcionado);
});
