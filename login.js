// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const bg = document.getElementById('bg');
const num = 400;

for (let i = 0; i<num; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    bg.append(box)
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let i = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {
            if(index < i) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

    if (i >= 9) clearInterval(interval);
    
    i += 1/5;

    }, 50);
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBGhgjHNKQhiBmQA2hXlhckfrOYXcdakl8",
//   authDomain: "foresty-7bb83.firebaseapp.com",
//   projectId: "foresty-7bb83",
//   storageBucket: "foresty-7bb83.appspot.com",
//   messagingSenderId: "220063895814",
//   appId: "1:220063895814:web:c026263c32a47ab8518e87"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

document.getElementById("register").addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log("Account Created");
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    // });

    console.log(name, email, password);

    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    // document.getElementById("password").value = "";

});

document.getElementById("login").addEventListener("click", function (e) {
    e.preventDefault();

    var lemail = document.getElementById("lemail").value;
    var lpassword = document.getElementById("lpassword").value;

    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     const user = userCredential.user;
    //     window.open('www.google.com');
    //     console.log("Successful");

    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    // });

    console.log(lemail, lpassword);
    var htmlFilePath = 'main.html';
    window.location.href = htmlFilePath;

    // document.getElementById("lemail").value = "";
    // document.getElementById("lpassword").value = "";

});
