function checkName(name)
{
  if(name.length>3 && name.length<10)
    {
      
        return true;
    }
    else
    alert("NO");
     return false;
} 

function checkPassword(name)
{
  var result=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(name);
  alert(result);
  if(result && name.length>5)
  return true;
  return false;
}    
function checkConfirmPassword(password ,confirm_password)
{ 
   
    if(password==confirm_password)
    {
        return true;
    }
    else
    return false;
    
}    
function checkAge(age)
{
 
    if(age>18)
    return true;
    else
    return false;
    
}    
function checkPhone(phone)
{
  console.log("checkPhone");
    if(phone.length ==9 && phone.charAt(0)==7 && phone.charAt(1)==7 && phone.charAt(2))
    {
        return true;
    }
    else
     return false;

}    
function checkEmail(name)
{   console.log("checkEmail");
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(name).search (filter) != -1;
}  
function checkMessage(message)
{    console.log("checkMessage");
    if(message.length>20)
     return true;
     else
     return false;
}
function checkUrl(value) {
var r= /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
alert(r);
return r;
}

function validation( )
{
    
    var name=document.getElementById("name");
    
    var email=document.getElementById("email");
    
    var password=document.getElementById("password");
   
    var confirm_password=document.getElementById("confirm-password");
   
    var age=document.getElementById("age");
   
    var phone=document.getElementById("phone");
   
    var url=document.getElementById("url");
   
   
    var message=document.getElementById("message");
   
    name.removeAttribute("class","valid-class invalid-class");
   
    email.removeAttribute("class","valid-class invalid-class");
   
    password.removeAttribute("class","valid-class invalid-class");
   
    confirm_password.removeAttribute("class","valid-class invalid-class");
   
   
    phone.removeAttribute("class","valid-class invalid-class");
   
    url.removeAttribute("class","valid-class invalid-class");
   
    message.removeAttribute("class","valid-class invalid-class");
  
  if(checkName(name.value))
     {
        name.className += " valid-class ";
     }
     else
     {
      name.className += " invalid-class ";
     }

     if(checkConfirmPassword(password.value,confirm_password.value))
     {
      confirm_password.className += " valid-class ";
     }
     else
     {
      confirm_password.className += " invalid-class ";
     }
     
     if(checkAge(age.value))
     {
      age.className += " valid-class ";
     }
     else
     {
      age.className += " invalid-class ";
     }
    
     if( checkPhone(phone.value))
     {
      phone.className += " valid-class ";
     }
     else
     {
      phone.className += " invalid-class ";
     }

     if(checkEmail(email.value))
     {
      email.className += " valid-class ";
     }
     else
     {
      email.className += " invalid-class ";
     }
     if(checkMessage(message.value))
     {
      message.className += " valid-class ";
     }
     else
     {
      message.className += " invalid-class ";
     }

     if(checkPassword(password.value))
     {
      password.className += " valid-class ";
     }
     else
     {
      password.className += " invalid-class ";
     }
     
     if(checkUrl(url.value))
     {
      url.className += " valid-class ";
     }
     else
     {
      url.className += " invalid-class ";
     }
}