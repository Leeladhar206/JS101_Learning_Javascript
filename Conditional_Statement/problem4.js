let username = "Tony stark";
let password = "im_ironman";

let credential_username = "Tony stark";
let credential_password = "imironman";

if(credential_username === username){
  if(credential_password === password){
    console.log("User can Login");
  }
  else{
    console.log("Incorrect password");
  }
}
else{
   console.log("Incorrect username") 
  }