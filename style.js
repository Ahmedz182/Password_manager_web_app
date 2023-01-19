

document.getElementById('button').addEventListener("click", addpass);
document.getElementById('show').addEventListener("click", showpass);
function showpass() {
    if (tdpass.className == ('hidetext')) {
        tdpass.classList.remove('hidetext');
    } else {
        tdpass.classList.add('hidetext');
    }

}
function addpass(e) {
    var weblink = document.getElementById('link').value
    var email = document.getElementById('emails').value
    var pass = document.getElementById('password').value
    var user = document.getElementById('Username').value

    const trw = document.createElement('tr');
    trw.setAttribute("id", "man");

    const tdweb = document.createElement('td');
    tdweb.setAttribute("id", "td1");
    tdweb.innerText = weblink;

    const tdemail = document.createElement('td');
    tdemail.setAttribute("id", "td2");
    tdemail.innerText = email;

    const tduser = document.createElement('td');
    tduser.setAttribute("id", "td5");
    tduser.innerText = user;

    const tdpass = document.createElement('td');
    tdpass.setAttribute("id", "td3");
    tdpass.classList.add('hidetext');
    tdpass.innerText = pass;
    const edit = document.createElement('i');
    edit.classList.add("fa", "fa-eye-slash");
    edit.setAttribute("id", "show");

    const act = document.createElement('td');
    act.setAttribute("id", "td4");



    const trash = document.createElement('i');
    trash.classList.add("fa", "fa-trash");

    document.getElementById("tab").appendChild(trw);
    document.getElementById("tab").appendChild(tdweb);
    document.getElementById("tab").appendChild(tdemail);
    document.getElementById("tab").appendChild(tduser);
    document.getElementById("tab").appendChild(tdpass);
    document.getElementById("tab").appendChild(edit);
    document.getElementById("tab").appendChild(trash);


    var weblink = document.getElementById('link').value = ''
    var email = document.getElementById('emails').value = ''
    var pass = document.getElementById('password').value = ''

    var user = document.getElementById('Username').value = ''

    e.preventDefault();


}
