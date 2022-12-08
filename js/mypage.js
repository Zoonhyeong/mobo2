const nickname = document.querySelector("#user-name")
const email = document.querySelector("#user-email")
const intro = document.querySelector("#user-intro")

window.onload = function() {
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
        data = await result.json();
        console.log(data);
        
        nickname.innerHTML = data.nickname + "님"
        email.innerHTML  = data.email
        intro.innerHTML  = data.profile
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function lastPage(){
    history.back();
}

function nextPage(){
    location.href="subscribe_create.html"
}

function editPage(){
    location.href="change_mypage.html"
}
