export const validation = () => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (name === "admin" && password === "admin") {
        alert("Login Successfull");
        window.location = "index.html";
        return false;
    }
    else {
        alert("Login Failed");
    }
}