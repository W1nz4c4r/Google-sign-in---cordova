/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    check_user();

}

function check_user(){

  console.log("on index.js");
  var singIn_btn = document.getElementById("singIn_il");
  var logout_btn = document.getElementById("Logout_il");
  var tittle = document.getElementById("tittle");

  firebase.auth().onAuthStateChanged( function(user){
   if (user){
     console.log( "[+] user is : " + user.displayName);
     tittle.innerHTML = " "  + user.displayName;
     logout_btn.style.display = "block";
     singIn_btn.style.display = "none";
   } else {
     console.log("[+] no user : " +user);

     tittle.innerHTML = "";
     logout_btn.style.display = "none";
     singIn_btn.style.display = "block";
     singIn_btn.addEventListener("click", function(){
       console.log("[+] in signIn  click ");
      SignIn_action();
     });
   }
  });

}
