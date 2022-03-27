var password = document.getElementById("password"), 
confirmpassword = document.getElementById("confirmpassword");

function validatePassword(){
if(password.value !=  confirmpassword.value) {
  confirmpassword.setCustomValidity("Passwords Don't Match");

} else {
  confirmpassword.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirmpassword.onkeyup = validatePassword;


function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log('ID: ' + profile.getId());
console.log('Image URL: ' + profile.getImageUrl());
console.log('Email: ' + profile.getEmail()); 
}


