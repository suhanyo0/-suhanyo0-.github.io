 function validation()
    {
         let y= document.forms["myform"]["fname"].value;
        if(y=="")
        {
            alert("First name must be filled out.");
        }
        let l= document.forms["myform"]["lname"].value;
        if(l=="")
        {
            alert("Last name must be filled out.");
        }
        )
         let e= document.forms["myform"]["emailid"].value;
        if(e=="")
         {
            alert("Email must be filled out.");
          }
		  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		  if(e==validRegex)
		  {
		   alert("email format wrong")
		   }
         let u= document.forms["myform"]["username"].value;
         if(u=="")
         {
            alert("Username cannot be empty.");
          
         }
         let p= document.forms["myform"]["password"].value;
         if(p=="")
         {
            alert("Enter password cannot be empty");
            
         }
         let c= document.forms["myform"]["confirmpassword"].value;
         if(c!=p)
         {
            alert("password does not match");
            
         }
    }
