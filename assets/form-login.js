var config = {
  apiKey: "AIzaSyCNMmJzuBhXmZH6Vd-LXZ-zhKxLJnRCio4",
  authDomain: "fireproject-343e4.firebaseapp.com",
  projectId: "fireproject-343e4",
  storageBucket: "fireproject-343e4.appspot.com",
  messagingSenderId: "804993734650",
  appId: "1:804993734650:web:e925934ae88300847e7643"
};
firebase.initializeApp(config);


function SignIn() {


    if (firebase.auth().currentUser) {
        firebase.auth().signOut();}
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
                alert("Login Successful");
                document.getElementById("email").value="";
                document.getElementById("password").value="";
                window.location.href="form-basic.html";
            })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('quickstart-sign-in').disabled = false;
        });


    document.getElementById('quickstart-sign-in').disabled = true;
    
};

var currentUser = {};

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
         currentUser = user;

    } else {
    }
});

