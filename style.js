document.getElementById('button').addEventListener("click", addpass);

function addpass(e) {
    var weblink = document.getElementById('link').value
    var email = document.getElementById('emails').value
    var pass = document.getElementById('password').value
    var user = document.getElementById('Username').value

    if (weblink == "" || email == "" || pass == "" || user == "") {
        alert("Please fill all text fields");
    } else {

        const trw = document.createElement('tr');
        trw.setAttribute("id", "man");

        const tdweb = document.createElement('td');
        tdweb.setAttribute("id", "td1");
        tdweb.innerText = weblink;

        const tdemail = document.createElement('td');
        tdemail.setAttribute("id", "td2");
        tdemail.innerText = email;

        const tduser = document.createElement('td');
        tduser.setAttribute("id", "td3");
        tduser.innerText = user;

        const tdpass = document.createElement('td');
        tdpass.setAttribute("id", "td4");
        tdpass.classList.add('hidetext');
        tdpass.innerText = pass;

        const show = document.createElement('button');
        show.classList.add("btn", "fa", "fa-eye-slash");
        show.setAttribute("id", "shows");

        const trash = document.createElement('button');
        trash.classList.add("btn", "fa", "fa-trash");
        trash.setAttribute("id", "del");


        document.getElementById("tab").appendChild(trw);
        document.getElementById("tab").appendChild(tdweb);
        document.getElementById("tab").appendChild(tdemail);
        document.getElementById("tab").appendChild(tduser);
        document.getElementById("tab").appendChild(tdpass);
        document.getElementById("tab").appendChild(show);
        document.getElementById("tab").appendChild(trash);


        var weblink = document.getElementById('link').value = ''
        var email = document.getElementById('emails').value = ''
        var pass = document.getElementById('password').value = ''
        var user = document.getElementById('Username').value = ''

        document.getElementById('shows').addEventListener("click", showpass);
        document.getElementById('del').addEventListener("click", deleted);
        function showpass() {

            if (tdpass.classList.contains = 'hidetext') {
                tdpass.classList.replace('hidetext', 'show');
                show.classList.replace("fa-eye-slash", "fa-eye");
            }

            else if (tdpass.classList.contains = 'show') {
                tdpass.classList.replace('show', 'hidetext');
                show.classList.replace("fa-eye", "fa-eye-slash");
            }

        }
        function deleted() {
            tdweb.remove();
            tdemail.remove();
            tdpass.remove();
            tduser.remove();
            tdpass.remove();
            show.remove();
            trash.remove();


        }
    }
    e.preventDefault();


}