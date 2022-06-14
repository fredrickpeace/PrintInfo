
var config = {
    apiKey: "AIzaSyCNMmJzuBhXmZH6Vd-LXZ-zhKxLJnRCio4",
    authDomain: "fireproject-343e4.firebaseapp.com",
    projectId: "fireproject-343e4",
    storageBucket: "fireproject-343e4.appspot.com",
    messagingSenderId: "804993734650",
    appId: "1:804993734650:web:e925934ae88300847e7643"
};
firebase.initializeApp(config);

function SignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rpassword = document.getElementById("rpassword").value;

    if (firebase.auth().currentUser) {
        firebase.auth().signOut();
    }

    if (password!=rpassword) {
        alert('Password Retype is not match.');
        return;
    }
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (user) {
            alert("SignUp Successful");
            alert("Login Successful");
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            document.getElementById("rpassword").value = "";
            window.location.href = "form-basic.html";
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
    });

}