function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
       
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
        
      }  else{
        alert("success!")
      }
    } 