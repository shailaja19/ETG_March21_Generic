function validate(){
    if( document.myForm.Name.value == "" ){
    alert( "Please provide your name!" );
    document.myForm.Name.focus() ;
    }
    if(document.myForm.lname.value==""){
        alert("enter last name");
        document.myForm.lname.focus() ;
    }
    if(document.myForm.email.value==""){
        alert('enter email');
        document.myForm.email.focus() ;
    }
    if(document.myForm.date.value==""){
        alert('select date');
        document.myForm.date.focus() ;
    }
    if(document.myForm.phone.value==""){
        alert('enter user name');
        document.myForm.phone.focus() ;
    }
    if(document.myForm.loc.value==""){
        alert('enter the password');
        document.myForm.loc.focus() ;
    }
    else{
        var emailID = document.myForm.email.value;
        atpos =emailID.indexOf("@");
        dotpos =emailID.lastIndexOf(".");
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        document.myForm.EMail.focus() ; return false; 
        }
        return( true );
    }
    
    return false; 
    } 