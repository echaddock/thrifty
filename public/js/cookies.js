
function setCookie(cname,cvalue)
{
  document.cookie = cname + "=" + cvalue + ";";
  console.log(cname);
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function checkCookie()
{
  var user=getCookie("justLoggedIn");
  if (user!="0")
  {
     systemMessageInit();
     systemMessage.sendMessage(0, 'You have successfully signed in!');
     document.cookie = "justLoggedIn=0;";
  }
}

/*
$(document).ready(function(){
  
      systemMessageInit(); //initialize 
      
  
      $('#not1').on('click', function(){
        systemMessage.sendMessage(0,'You have successfully signed in!');
      });
 
      
}).jQuery;




/*systemMessage javascript */



/*initialize the script*/
var systemMessageInit = function(){
      systemMessage = new systemMessage;
}
  
/*build the messsage elements and append to body*/
var systemMessage = function(){
  var template = "<div id='systemMessageContainer'><div id='systemMessage'></div></div>";
  var el = document.createElement("div");
  el.innerHTML = template;
  var bodyitem = document.body.firstChild;
  insertAfter(bodyitem, el);
}

/*
*
* function sendMessage
*
* @param type      takes the numbers 0,1,2 where 0 is basic notification 1 is warning message and 2 is error message 
* @param message   the message of the notification box
*
*/
systemMessage.prototype.sendMessage = function(type, message){
  var message = message;
  var type;
  
  switch(type)
  {
  default:
    type = '';
  }
  
  var container = document.getElementById("systemMessageContainer");
  var messagebox = document.getElementById("systemMessage")
  messagebox.innerHTML = message;
  container.className = "revealed " + type;
  document.getElementsByClassName('w-nav')[0].style.display="none";
  
  setTimeout(function(){ container.className = type; 
      document.getElementsByClassName('w-nav')[0].style.display="block"; },4000);    
}
  
  /*helper function for inserting the elements into the body */
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

   function logout() {
     setCookie("username", "");
   }
