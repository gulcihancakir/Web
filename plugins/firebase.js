
import firebase from 'firebase/app'
import "firebase/database"
import 'firebase/auth'

require('firebase/auth')

var firebaseConfig = {

    apiKey: "AIzaSyD76I9OZFcEpKl1jRrU3vUTCeR9ZjNUVMg",
    authDomain: "project-81b22.firebaseapp.com",
    databaseURL: "https://project-81b22-default-rtdb.firebaseio.com",
    projectId: "project-81b22",
    storageBucket: "project-81b22.appspot.com",
    messagingSenderId: "44399405095",
    appId: "1:44399405095:web:b851b575731cb6ccf00602"
}
if (firebase.apps.length==0){

var defaultProject = firebase.initializeApp(firebaseConfig)

}
var defaultProject = firebase.apps[0]

console.log("helloo")

// const database = defaultProject.database()



export default firebase





//   firebase.initializeApp(firebaseConfig);
//   const database=firebase.database()
//   database.ref('messages').on('value',function(){

//   })


