document.getElementById('button').addEventListener("click", addpass);

var i = 1;
function addpass(e) {
    var weblink = document.getElementById('link').value
    var email = document.getElementById('emails').value
    var pass = document.getElementById('password').value
    var user = document.getElementById('Username').value

    if (weblink == "" || email == "" || pass == "" || user == "") {
        alert("Please fill all text fields");
    } else {

        const trw = document.createElement('tr');
        trw.setAttribute("id", i);

        const sr = document.createElement('td');
        sr.setAttribute("id", i);
        sr.innerText = i;

        const tdweb = document.createElement('td');
        tdweb.setAttribute("id", i);
        tdweb.innerText = weblink;

        const tdemail = document.createElement('td');
        tdemail.setAttribute("id", i);
        tdemail.innerText = email;

        const tduser = document.createElement('td');
        tduser.setAttribute("id", i);
        tduser.innerText = user;

        const tdpass = document.createElement('td');
        tdpass.setAttribute("id", i);
        tdpass.classList.add('hidetext');
        tdpass.innerText = pass;

        const show = document.createElement('button');
        show.classList.add("btn", "fa", "fa-eye-slash");
        show.setAttribute("id", "show");

        const trash = document.createElement('button');
        trash.classList.add("btn", "fa", "fa-trash");
        trash.setAttribute("id", "del");


        document.getElementById("tab").appendChild(trw);
        trw.appendChild(sr);
        trw.appendChild(tdweb);
        trw.appendChild(tdemail);
        trw.appendChild(tduser);
        trw.appendChild(tdpass);
        trw.appendChild(show);
        trw.appendChild(trash);


        var weblink = document.getElementById('link').value = ''
        var email = document.getElementById('emails').value = ''
        var pass = document.getElementById('password').value = ''
        var user = document.getElementById('Username').value = ''

        document.getElementById('show').addEventListener("click", showpass);


        document.getElementById('del').addEventListener("click", deleted);

        function showpass() {
            tdpass.classList.replace('hidetext', 'show');
            show.classList.replace("fa-eye-slash", "fa-eye");
        }

        function deleted() {

            sr.remove();
            tdweb.remove();
            tdemail.remove();
            tdpass.remove();
            tduser.remove();
            tdpass.remove();
            show.remove();
            trash.remove();


        }
        i++;
    }
    e.preventDefault();


}