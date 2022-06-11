
function clickSubmit(){
  if(checkFirstName()&&checkLastName()&&checkEmail()==true){
    return true;
  }
  return false;
}
function checkFirstName(){
  var fName_reg =/^[A-Za-z]{2,10}$/
  if(fName_reg.test(firstName.value)){
    return true;
  }
  fName_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>"
  fName_label.style.color = "red"
  return false;
}

function checkLastName(){
  var lName_reg =/^[A-Za-z]{2,10}$/
  if(lName_reg.test(lastName.value)){
    return true;
  }
  lName_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>"
  lName_label.style.color = "red"
  return false;

}
function checkEmail(){
  var mail_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(mail_reg.test(mail.value)){
    return true;
  }
  mail_label.innerHTML +="<span> first latter <b>must</b> be uppercase </span>"
  mail.style.color = "red"
  return false;
}