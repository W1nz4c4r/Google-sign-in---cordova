document.addEventListener("DOMContentLoaded", function () {
    //This is the DOM ready wrapper, this is basically the entry point for the JS once the dom content is loaded.

    document.getElementById('singIn-btn').onclick = dosignin;

    //check if user is logged in
      check_user();
  });

//declaration of functions
function check_user(){
  //declaration of variables
  var singIn_btn = document.getElementById("singIn_il");
  var logout_btn = document.getElementById("Logout_il");

  firebase.auth().onAuthStateChanged( user =>{

    if (user){
      logout_btn.style.display = "block";
      singIn_btn.style.display = "none";
      console.log("[+]auth: user signed in as: " + user.displayName);
    } else{
      logout_btn.style.display = "none";
      singIn_btn.style.display = "block";
      console.log("auth: no user!");
    }
  });
}
