

document.getElementById('button').addEventListener("click", addpass);

function addpass(e) {
    var weblink = document.getElementById('link').value
    var email = document.getElementById('emails').value
    var pass = document.getElementById('password').value

    // var weblinktxt = document.getElementById('webtxt').innerText = weblink
    // var emailtxt = document.getElementById('emailtxt').innerText = email
    // var passtxt = document.getElementById('pass').innerText = pass

    const trw = document.createElement('tr');
    trw.setAttribute("id", "man");

    const tdweb = document.createElement('td');
    tdweb.setAttribute("id", "td1");
    tdweb.innerText = weblink;

    const tdemail = document.createElement('td');
    tdemail.setAttribute("id", "td2");
    tdemail.innerText = email;

    const tdpass = document.createElement('td');
    tdpass.setAttribute("id", "td3");
    tdpass.classList.add('hidetext');
    tdpass.innerText = pass;

    const act = document.createElement('td');
    act.setAttribute("id", "td4");


    // const edit = document.createElement('i');
    // edit.classList.add("fa", "fa-edit");


    const trash = document.createElement('i');
    trash.classList.add("fa", "fa-trash");

    document.getElementById("tab").appendChild(trw);
    document.getElementById("tab").appendChild(tdweb);
    document.getElementById("tab").appendChild(tdemail);
    document.getElementById("tab").appendChild(tdpass);
    document.getElementById("tab").appendChild(act);
    // document.getElementById("tab").appendChild(edit);
    document.getElementById("tab").appendChild(trash);


    var weblink = document.getElementById('link').value = ''
    var email = document.getElementById('emails').value = ''
    var pass = document.getElementById('password').value = ''
    e.preventDefault();


}
// const act = document.createElement('tr');








// document.getElementById("tab").appendChild(act2);
// document.getElementById("tab").appendChild(edit);
// document.getElementById("tab").appendChild(trash);