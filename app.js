$("#usercheck").hide();
let usernameerror = true;
let check = /[0-9\d#$@!%&*?]/;
$("#name").keyup(function(){
    validateusername();
});
function validateusername(){
    let usernamevalue = $("#name").val();
    if (usernamevalue.length == ""){
        $("#usercheck").show();
        $("#usercheck").html("please enter name")
        usernameerror = false;
        return false;        
    }else if (usernamevalue.length < 3  ){
        $("#usercheck").show();
        $("#usercheck").html("name of length should be mimum 3 letters ")
        usernameerror = false;
        return false;
    }
    else if (check.test(usernamevalue) == true){
        console.log(check.test(usernamevalue));
        $("#usercheck").show();
        $("#usercheck").html("name  do not use special characters and numbers")
        usernameerror = false;
        return false;
    }
    else{
        $("#usercheck").hide();
        usernameerror = true;
        return true;
    }
}
// email validation
$("#mailcheck").hide();
let emailerror = false;
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
function mailvalidate(email){
    return regex.test(email);
}
$("#email").keyup(function(){
    const emailid = $("#email").val();
    if(emailid.length == "")
    {
        $("#mailcheck").show();
        $("#mailcheck").html("please enter email");
       
        emailerror = false;
        return false;
    }
    if (mailvalidate(emailid)){
        $("#mailcheck").hide();
        emailerror = true;
        return true;
    }
    else{
        $("#mailcheck").show();
        $("#mailcheck").html("provide a valid email");
        emailerror = false;
        return false
    }
});
//address check
$("#add").hide();
let addrsserror = true;
$("#address").keyup(function(){
    addressvalidate();
});
function addressvalidate(){
    let address = $("#address").val();
    if ( address.length == ""){
        $("#add").show();
        $("#add").html("enter your address ")
        addrsserror = false;
        return false;
    }
    if ( address.length < 10 ){
        $("#add").show();
        $("#add").html("enter minimum 10 letters ")
        addrsserror = false;
        return false;
    }
    else{
        $("#add").hide();
        addrsserror = true;
        return true;
    }
}

// date and age
$("#dateob").hide();
$("#calcage").hide();
let ageerror = true;
$("#dob").change(function(){
    datechecker();
});
function datechecker(){
    let dob = $("#dob").val();
    if (dob.length == ""){
        $("#dateob").show();
        $("#dateob").html("please provide date of birth");
        $("#age").val(0);
        $("#calcage").show();
    }
    if(dob.length > 1){
        $("#dateob").hide();
        let today = new Date();
        let dob = new Date($("#dob").val());
        var age = today.getFullYear() - dob.getFullYear();
    }
    if (age < 18 )
        {
            console.log(age);
            $("#calcage").show();
            $("#calcage").html("user age should 18 above ");
            $("#age").val(0);
            ageerror = false;
            return false
        }
    if (age > 110 )
    {
        console.log(age);
            $("#calcage").show();
            $("#calcage").html("user age should below 110 ");
            $("#age").val(0);
            ageerror = false;
            return false
    }
    else{
            $("#calcage").hide();
            $("#age").val(age);
            ageerror = true;
            return true;
        }
       

   
}
// validate password  
$("#passcheck").hide();
let userpassworderror = false;
let setpswd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function validatepassword(password){
    return setpswd.test(password);
}

$("#password").keyup(function(){

    let password = $("#password").val();
    let cnfmpassword = $("#cpassword").val();
    if (password.length == "")
    {
        $("#passcheck").show();
        $("#passcheck").html("enter password ");
        userpassworderror = false;
        return false;
    }
    if (validatepassword(password) == false){

        $("#passcheck").show();
        $("#passcheck").html("eneter at least one character,uppercase,lowercase,number and minimum 8 charcters");
        userpassworderror = false;
        return false;
    }
    if ( password != cnfmpassword){
        if (cnfmpassword.length == 0){
            $("#passcheck").hide();
            userpassworderror = true;
            return true;  
        }
        else{
            $("#passcheck").show();
            $("#passcheck").html("check both passwords ");
            userpassworderror = false;
            return false;
        }
       
    }
    else{
        $("#passcheck").hide();
        userpassworderror = true;
        return true;
    }
});

$("#cpasscheck").hide();
let cpasserror = false;
$("#cpassword").keyup(function(){
    let password = $("#password").val();
    let cnfmpassword = $("#cpassword").val();
   
    if (password != cnfmpassword){
        $("#cpasscheck").show();
        cpasserror = false;
        return false
    }
    else{
        $("#cpasscheck").hide();
        cpasserror = true;
        return true;
    }
});
// eye
    $('#eye').click(function(){
          if($(this).hasClass('fa-eye-slash'))
          {
            console.log(this);
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type','text');
          }
          else{
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');  
            $('#password').attr('type','password');
          }
      });
      $('#eye2').click(function(){
        if($(this).hasClass('fa-eye-slash')){
          $(this).removeClass('fa-eye-slash');
          $(this).addClass('fa-eye');
          $('#cpassword').attr('type','text');
        }else{
          $(this).removeClass('fa-eye');
          $(this).addClass('fa-eye-slash');  
          $('#cpassword').attr('type','password');
        }
    });

 

// submit button
$("#submitbtn").click(function(event){
    event.preventDefault();
    validateusername();
    mailvalidate();
    datechecker();
    validatepassword();
    addressvalidate();

    console.log(usernameerror,emailerror,ageerror,userpassworderror,cpasserror);
    if ( usernameerror == true && emailerror == true && ageerror == true && userpassworderror == true && cpasserror == true && addrsserror == true)
    {
        window.location.href = "https://www.cybrosys.com/";
    }
    else{
        swal("Invalid Entry", "check your entered data", "error", {
            button : "OK",

          });
    }

});