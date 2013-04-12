
function validatemobile(mobileno)
{
 
		    var y = mobileno;
			
		   
		   if(isNaN(y)||y.indexOf(" ")!=-1)
		   {
		      alert("Enter numeric value");
		      return false; 
		   }
		   if (y.length>10||y.length<8)  //Not Compulsory,if avail 10
		   {
		        alert("Enter 8 0r 10 digits");
		        return false;
		   }
		   
		   return true;
}



function namelength(fname)
{		
		var x=fname;
		
			
		if (x==null || x=="")
		{
			alert("Name must be filled out");
			return false;
		}
		
		if(x.length<3||x.length>30)  //min: 3 , max: 30
		{
			alert("Name should be 3-30 characters");
			return false;
		}
		return true;
}


function validatepassword(username,pswrdInput){

	alert("Password Validation");
	var x=pswrdInput;
	if (x==null || x=="")
	{
	alert("Password must be filled out");
	return false;
	}
	if(username==pswrdInput)
		{
		alert("password can't be same as username");
		return false;
		}
	if(x.length<8||x.length>16)
	{
	alert("Password length should be 8-16 characters");
	return false;
	}

	var userRegexStr = /[^A-Za-z\d]/;
	var isvalid = userRegexStr.test(x); 
	
	if (isvalid) {
	alert('Special Characters not allowed');
	return false;
	}
	
	
	return true;
}

function validatesamepassword(password,retype) {
	if (password!=retype) {
		alert("Password don't match");
	}
	
}


function validateemail(emailInputBox)
{    
		var emailStr = emailInputBox;  
		if (emailStr==null || emailStr=="")
		{
		alert("Email must be filled out");
		return false;
		}
		var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var isvalid = emailRegexStr.test(emailStr); 
		
		if (!isvalid) {
		alert('Invalid email address!');
		return false;
		}
		return true;
}

function validateusername(userInput)

{    
		var userStr = userInput;  
		if (userStr==null || userStr=="")
		{
		alert("username must be filled out");
		return false;
		}
		if(userStr.length<6 || userStr.length>16)
			{
			alert("username should be 6-16 characters");
			return false;
			}
		
		var userRegexStr = /[^._A-Za-z\d]/  ;  //Length : 6-16
		var isvalid = userRegexStr.test(userStr); 
		
		if (isvalid) {
		alert('Only character number and ._ allowed');
		return false;
		}
		return true;
}
function validatecaptcha(captcha)
{
var valcap=captcha;
if(valcap==null||valcap=="")
	{
	alert("enter the captcha");
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
