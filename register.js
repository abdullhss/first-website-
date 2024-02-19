
function Register() { 
    const first_name = firstname.value;
    const last_name = lastname.value;
    const user_name = username.value;
    const e_mail = email.value;
    const pass_word = password.value;
    const confirm_password = confirmpassword.value;
    const gen_der = gender.value

    
    if (!first_name || !last_name || !e_mail || !pass_word || !user_name) {
        return alert("you need to fill up all the forms.");
    }
   
    let user_data = {
        firstName: first_name,
        lastName: last_name,
        email: e_mail,
        password: pass_word,
        confirmpassword: confirm_password,
        username: user_name,
    }

    let clientsArr = JSON.parse(localStorage.getItem('users')) || [];
   
    clientsArr.push(user_data);

    if (pass_word != confirm_password) {
        alert("password not same");
    } else {
        localStorage.setItem("users", JSON.stringify(clientsArr));
        return alert("Account Created!");
    }

    let user_data_str = JSON.stringify(user_data);

   


    

}



    