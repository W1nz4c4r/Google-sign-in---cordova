function dosignin() {
  console.log("in dosignin()");

  //declaration of variables
  var modal_bg = document.getElementById('Modal-bg');
  var close_mod = document.getElementById("close-modal");
  var google_Login_btn = document.getElementById("login-Google");

  // make modal visible and give a listener to the X in the modal
  modal_bg.classList.add("bg-active");
  close_mod.addEventListener("click", function (){
    modal_bg.classList.remove("bg-active");
  });

  // givin listener to google buton login and giving some actions
  google_Login_btn.addEventListener("click", function (){
    console.log("in google event listener");

    google_signIn();
    console.log("[+] fuera de google sign in")
    //close the modal after the click is done
    modal_bg.classList.remove("bg-active");
  })

}
