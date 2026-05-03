/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Kia ora te ao!'
    }
  )
}
function Goodbye() {
  console.log("Running Goodbye()")
  firebase.database().ref('/').set(
    {
      message: 'Goodbye!'
    }
  )
}
function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', display);
  console.log("Leaving simpleRead")
}
function display(snapshot) {
  console.log("Running display(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}
function readListener() {
  console.log("Reading Listener");
  firebase.database().ref('/message').on('value', display);
  console.log("Leaving readListener")
}
firebase.database().ref('/').set(
  {
    game1: {
      users: {
        Dhruv : 9999,
        Jack: 100000,
        toby: 9,
        yug: 987654321,
      }
    }
  }
)
function fb_readHighScores(){
  console.log("Reading High Scores");
  firebase.database().ref('/highscores/game1').once('value')
}