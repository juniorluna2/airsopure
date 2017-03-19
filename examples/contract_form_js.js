function ContactUs_Form1_Validator_desktop(theForm){



  if (theForm.Name.value == "")

  {

	alert("Please enter your name in the \"Name\" field.");

	theForm.Name.focus();

	return (false);

  }



  if (theForm.Name.value.length < 3)

  {

	alert("Please enter at least 3 characters in the \"Name\" field.");

	theForm.Name.focus();

	return (false);

  }

    

  if (theForm.Phone.value == "")

  {

	alert("Please enter a value for the \"Phone\" field.");

	theForm.Phone.focus();

	return (false);

  }

    

  
  
   if (theForm.Phone.value.length > 12)

  {

	alert("Please enter at most 10 characters in the \"Phone\" field.");

	theForm.Phone.focus();

	return (false);

  }
  
  
   var phoneno =/^\d{3}\-?\d{3}\-?\d{4}$/;
  if(theForm.Phone.value.match(phoneno))  
        {  
      theForm.Email.focus();
        }  
      else  
        {  
        alert("Please enter phone number in this format XXX-XXX-XXXX or XXXXXXXXXX");  
        return false;  
        }  

    var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (theForm.Email.value.search(emailRegEx) == -1)
		 {
          alert("Please enter a valid email address.");
		  return (false);

         }  
   
  /*if (theForm.Email.value == "")

  {

	alert("Please enter a value for the \"Email\" field.");

	theForm.Email.focus();

	return (false);

  }*/



  if (theForm.Email.value.length < 7)

  {

	alert("Please enter at least 7 characters in the \"Email\" field.");

	theForm.Email.focus();

	return (false);

  }
  
 



  if (theForm.Captcha.value == "")

  {

	alert("Please enter a value for the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  if (theForm.Captcha.value.length < 3)

  {

	alert("Please enter at least 3 characters in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  if (theForm.Captcha.value.length > 3)

  {

	alert("Please enter at most 3 characters in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  var chkVal = theForm.Captcha.value;

  var prsVal = chkVal;

  if (chkVal != "" && !(prsVal == "284"))

  {

	alert("Please enter a value equal to \"284\" in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }
  
  if (theForm.Type_of_Estimate.value == "-1")

  {

	alert("Please Select Service Needed");
    return (false);

  }

  return (true);

}


function ContactUs_Form1_Validator(theForm){



  if (theForm.Name.value == "")

  {

	alert("Please enter your name in the \"Name\" field.");

	theForm.Name.focus();

	return (false);

  }



  if (theForm.Name.value.length < 3)

  {

	alert("Please enter at least 3 characters in the \"Name\" field.");

	theForm.Name.focus();

	return (false);

  }



  if (theForm.Phone.value == "")

  {

	alert("Please enter a value for the \"Phone\" field.");

	theForm.Phone.focus();

	return (false);

  }
 
  
 


    
   
  if (theForm.Phone.value.length > 12)

  {

	alert("Please enter at most 10 characters in the \"Phone\" field.");

	theForm.Phone.focus();

	return (false);

  }
  
 
  var phoneno =/^\d{3}\-?\d{3}\-?\d{4}$/;
  if(theForm.Phone.value.match(phoneno))  
        {  
      theForm.Email.focus();
        }  
      else  
        {  
        alert("Please enter phone number in this format XXX-XXX-XXXX or XXXXXXXXXX");  
        return false;  
        }  

var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
     if (theForm.Email.value.search(emailRegEx) == -1)
		 {
          alert("Please enter a valid email address.");
		  return (false);

         }  

  /*if (theForm.Email.value == "")

  {

	alert("Please enter a value for the \"Email\" field.");

	theForm.Email.focus();

	return (false);

  }*/



  if (theForm.Email.value.length < 7)

  {

	alert("Please enter at least 7 characters in the \"Email\" field.");

	theForm.Email.focus();

	return (false);

  }
  
  

if (theForm.Captcha.value == "")

  {

	alert("Please enter a value for the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  if (theForm.Captcha.value.length < 3)

  {

	alert("Please enter at least 3 characters in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  if (theForm.Captcha.value.length > 3)

  {

	alert("Please enter at most 3 characters in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }



  var chkVal = theForm.Captcha.value;

  var prsVal = chkVal;

  if (chkVal != "" && !(prsVal == "284"))

  {

	alert("Please enter a value equal to \"284\" in the \"Captcha\" field.");

	theForm.Captcha.focus();

	return (false);

  }
  
  if (theForm.Type_of_Estimate.value == "-1")

  {

	alert("Please Select Service Needed");
    return (false);

  }

  return (true);

}


              