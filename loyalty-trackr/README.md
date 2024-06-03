# Introduction
This is the documentation for this code base. It offers guidance to help any developer understand the decisions that have gone into the code.

## Firebase.js
This file does the following:

- Initializes firebase for the backend
- firebaseConfig stores all the project information for this project as given by fire base.
- The exported variable firebaseApp is an instance of the initialization, and is to be used in other parts of the code base where firebase features are needed.
  - The initialization takes a paramerter of firebaseConfig

## Signup.js
This file contains a React component. Following documentation from https://firebase.google.com/docs/auth/web/start?authuser=0 this component implements the email and password login protocol. here's how it works:

- Import firebaseApp, instantiate, getAuth, and import createUserWithEmailAndPassword.
- Has two state variables for email and password. These state variables are updated in the MUI text area. The MUI text area is nested inside the MUI FormGroup.
- We also have the handleSubmit function which calls the createUserWithEmailAndPassword module. We pass auth, as well as the value of email and password as arguements to send to firebase.
- Then we create user credentials in firebase. All this is triggered by the button in the MUI FormGroup.
