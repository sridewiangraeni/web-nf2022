function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "dewi" && pass == "dewi") {
        location.replace("success.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}
