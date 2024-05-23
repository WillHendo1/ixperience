const onSubmit = () => {
    const registerForm = document.getElementById("registerForm");

    if (registerForm.checkValidity()) {
        const firstName = documet.getElementById("firstName");
        const lastName = documet.getElementById("lastName");
        const bio = documet.getElementById("bio");
        const email = documet.getElementById("email");
        const password = documet.getElementById("password");
        console.log(firstName,lastName,bio,email,password);
    } else {
        console.log("Form not valid")
    };
    registerForm.classList.add("was-validated");
};

console.log