
function test(){
	alert("Hi") ;
}

function setPresentSlide(temp){

document.getElementById('currentSlide').src=temp;
}


function setbg(color)
{
document.getElementById("styled").style.background=color;
}


function char_left()
{
	
	var max_length=500;
	
	var current_length=$('#comment_textarea').val().length;
	var char_remain=max_length-current_length;
	
	$('#character_left_msg').html(char_remain+' Characters remaining');
	
}

function validatemobile(mobileno)
{
 
		    var y = mobileno;
			
		   
		   if(isNaN(y)||y.indexOf(" ")!=-1)
		   {
		   document.getElementById('errmobile').innerHTML="Enter numeric value";
		      
		      return false; 
		   }
		   if (y.length>10||y.length<8)  //Not Compulsory,if avail 10
		   {
		   document.getElementById('errmobile').innerHTML="Enter 8 0r 10 digits";
		       
		        return false;
		   }
		   
		   return true;
}



function namelength(fname)
{		
		var x=fname;
		
			
		if (x==null || x=="")
		{
		document.getElementById('errname').innerHTML="Name must be filled out";
			
			return false;
		}
		
		if(x.length<3||x.length>30)  //min: 3 , max: 30
		{
		document.getElementById('errname').innerHTML="Name should be 3-30 characters";
			
			return false;
		}
		return true;
}


function validatepassword(username,pswrdInput){

	
	var x=pswrdInput;
	if (x==null || x=="")
	{
	document.getElementById('errpwd1').innerHTML='Password must be filled out';
	return false;
	}
	if(username==pswrdInput)
		{
		document.getElementById('errpwd1').innerHTML="password can't be same as username";
		return false;
		}
	if(x.length<8||x.length>16)
	{
	document.getElementById('errpwd2').innerHTML="Password length should be 8-16 characters";
	return false;
	}

	var userRegexStr = /[^A-Za-z\d]/;
	var isvalid = userRegexStr.test(x); 
	
	if (isvalid) {
	document.getElementById('errpwd1').innerHTML='Special Characters not allowed';
	return false;
	}
	
	
	return true;
}

function validatesamepassword(password,retype) {
	if (password!=retype) {
	document.getElementById('errpwd2').innerHTML="Password don't match";
	}
	
}


function validateemail(emailInputBox)
{    
		var emailStr = emailInputBox;  
		if (emailStr==null || emailStr=="")
		{
		document.getElementById('erremail').innerHTML='Email must be filled out';
		return false;
		}
		var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var isvalid = emailRegexStr.test(emailStr); 
		
		if (!isvalid) {
		document.getElementById('erremail').innerHTML='Invalid email address!';
		return false;
		}
		return true;
}

function validateusername(userInput)

{    
		var userStr = userInput;  
		if (userStr==null || userStr=="")
		{
		document.getElementById('errusername').innerHTML = 'username must be filled out';
		return false;
		}
		if(userStr.length<6 || userStr.length>16)
			{
			document.getElementById('errusername').innerHTML = 'username should be 6-16 characters';
			return false;
			}
		
		var userRegexStr = /[^._A-Za-z\d]/  ;  //Length : 6-16
		var isvalid = userRegexStr.test(userStr); 
		
		if (isvalid) {
		document.getElementById('errusername').innerHTML = 'Only character number and ._ allowed';
		return false;
		}
		return true;
}
function validatecaptcha(captcha)
{
var valcap=captcha;
if(valcap==null||valcap=="")
	{
	document.getElementById('errcaptcha').innerHTML="enter the captcha";
	//alert("enter the captcha");
	return false;
	}
return true;
}

function pathlength(patlngth)
{
	var path=pathlngth;
	if(path.length>255)
		{
		alert("path length should be less than 255");
		return false;
		}
	return true;
	}
function newpswrd(password,npswrd)
{
	var newpassword=npswrd;
	if(newpassword==password)
		{
		alert("old and new password can't be same");
		return false;
		}
	return true;
	}
function errormsg()
{
document.getElementById('namelen1').innerHTML="Name must be filled out";
document.getElementById('pswrd1').innerHTML='Password must be filled out';
	document.getElementById('captcha1').innerHTML="enter the captcha";
	document.getElementById('username1').innerHTML = 'username must be filled out';
	document.getElementById('email1').innerHTML='Email must be filled out';
}







var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}
}

