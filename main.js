
function clickSubmit(){
  if(checkFirstName()&&checkLastName()&&checkEmail()&&checkBirth()&&checkPhone()&&checkPasswords()==true){
    return true;
  }
  return false;
}
function checkFirstName(){
  var fName_reg =/^[A-Za-z]{2,10}$/
  if(fName_reg.test(firstName.value)){
    return true;
  }
  fName_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>";
  fName_label.style.color = "red";
  return false;
}

function checkLastName(){
  var lName_reg =/^[A-Za-z]{2,10}$/
  if(lName_reg.test(lastName.value)){
    return true;
  }
  lName_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>";
  lName_label.style.color = "red";
  return false;

}
function checkEmail(){
  var mail_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(mail_reg.test(mail.value)){
    return true;
  }
  mail_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>";
  mail.style.color = "red";
  return false;
}
function checkBirth(){
  var nowDate = new Date().getFullYear();
  var birthInput = parseInt(birthDate.value.substr(0,4))
  if(nowDate-birthInput>18){
    return true;
  }
  alert("you must be 18 or over");
  return false;
}
function checkPhone(){
  var phone_reg = /^[0-9]{10}$/;
  if(phone_reg.test(phoneNumber.value)){
    return true;
  }
  phone_label.innerHTML +="<span> phone number must containe 10 numbers </span>";
  phone_label.style.color = "red";
  return false;

}
function checkPasswords(){
  var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,10})/
  if(password1.value==password2.value){
    if(strongRegex.test(password2)){
      return true;
    }
    phone_label.innerHTML +="<span> password is not strong enough </span>";
    phone_label.style.color = "red";
    return false;
  }
  phone_label.innerHTML +="<span> passwords are not macth </span>";
  phone_label.style.color = "red";
  return false;
}