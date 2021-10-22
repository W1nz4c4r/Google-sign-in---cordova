function SignIn_action(){
  console.log("[+] in add SignIn_action()");
  //declaration of variables
  var modal_bg = document.getElementById('Modal-bg');
  var close_mod = document.getElementById("close-modal");
  var google_Login_btn = document.getElementById("login-Google");

  // make modal visible and give a listener to the X in the modal
  modal_bg.classList.add("bg-active");
  close_mod.addEventListener("click", function (){
    modal_bg.classList.remove("bg-active");
  });

  google_Login_btn.addEventListener("click", function (){
    console.log("[+] in google event listener");

    dosignin();
    console.log("[+] fuera de google sign in")
    //close the modal after the click is done
    modal_bg.classList.remove("bg-active");
  });

  }

function dosignin(){
  console.log("[+] on go");
  //add the service provider to firebase
  var provider = new firebase.auth.GoogleAuthProvider();
  console.log("antes del auth")
  firebase.auth().signInWithRedirect(provider).then( ()=>{
    connsole.log("[+] Inside: Get Redirect result");
    return firebase.auth().getRedirectResult();
  }).then( (result)=>{
    console.log("[+][+] Inside: with Result");
    console.log(result.user.displayName);
  })
  .catch( err =>{
    console.log(err);
  });

}
