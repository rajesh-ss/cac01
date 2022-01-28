


let email=document.getElementById("getEm");
let nam=document.getElementById("getNam");
let addr = document.getElementById("getAddr");
let er = document.getElementsByClassName("has-error");





email.onkeydown = ()=>{

   const regex1=/^([a-z0-9\.-]+)@(christuniversity+)\.(in{1,8})$/;
   const regex2= /^([a-z0-9\.-]+)@(Christuniversity+)\.(in{1,8})(.[a-z]{1,8})$/;

   if(regex1.test(email.value)||regex2.test(email.value))
   {
     er[1].innerText="Your Email is Valid";
     er[1].style.color="lime";  
   }
   else{
       er[1].innerText="Invalid Email Id";
       er[1].style.color="red";
   }}

nam.onkeydown = ()=>{

    const regname = /^\D*$/;
    let arr = nam.value.search(regname);
    console.log(arr);
    if(arr == 0 && nam.value!=''){
        er[0].innerText = "valid name";
        er[0].style.color = "lime";
    }
    else{
        er[0].innerText = "invalid name";
        er[0].style.color = "red";
    }
   }

