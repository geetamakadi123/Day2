var form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    var data=[{
        user:form.username.value,
        email:form.useremail.value,
        pass:form.userpassword.value
    }]
    localStorage.setItem("userData",JSON.stringify(data))
})