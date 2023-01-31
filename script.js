//Login Area
    //For form validation, make sure only valid characters are in user/password, no special characters/spaces.  Escape stuff?
    window.onload = () => {
        //Login Flag
        if (localStorage.getItem("loginFlag")==null){
            localStorage.setItem("loginFlag","false");
        } else if (localStorage.getItem("loginFlag")=="true"){
            document.getElementById("loginDropdownButton").innerHTML = "Log Out";
        }
     };
    

    //Login Page
    function Submit(){
            
        var idName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;

        if (idName == "username" && password == "password"){
            localStorage.setItem("loginFlag","true");
            console.log("true value");
            window.location.assign("index.html");
            window.alert("You are now logged in.");
        }
        else{
            window.alert("Incorrect username or password.");
            console.log("incorrect login");
            logOut();
        }
    }

    function logOut(){
        localStorage.setItem("loginFlag","false");
        window.location.replace("index.html");
    }