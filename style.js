document.getElementById('button').addEventListener("click", addpass);

var i = 1;
function addpass(e) {
    e.preventDefault();

    var weblink = document.getElementById('link').value;
    var email = document.getElementById('emails').value;
    var pass = document.getElementById('password').value;
    var user = document.getElementById('Username').value;

    if (weblink === "" || email === "" || pass === "" || user === "") {
        alert("Please fill all text fields");
        return;
    }

    const trw = document.createElement('tr');
    trw.setAttribute("id", i);

    const sr = document.createElement('td');
    sr.innerText = i;

    const tdweb = document.createElement('td');
    tdweb.innerText = weblink;

    const tdemail = document.createElement('td');
    tdemail.innerText = email;

    const tduser = document.createElement('td');
    tduser.innerText = user;

    const tdpass = document.createElement('td');
    tdpass.classList.add('hidetext');
    tdpass.innerText = pass;

    const show = document.createElement('button');
    show.classList.add("btn", "fa", "fa-eye-slash");
    show.addEventListener("click", showpass);

    const trash = document.createElement('button');
    trash.classList.add("btn", "fa", "fa-trash");
    trash.addEventListener("click", deleted);

    document.getElementById("tab").appendChild(trw);
    trw.append(sr, tdweb, tdemail, tduser, tdpass, show, trash);

    document.getElementById('link').value = '';
    document.getElementById('emails').value = '';
    document.getElementById('password').value = '';
    document.getElementById('Username').value = '';

    i++;

    function showpass() {
        tdpass.classList.replace('hidetext', 'show');
        show.classList.replace("fa-eye-slash", "fa-eye");
    }

    function deleted() {
        trw.remove();
    }
}
