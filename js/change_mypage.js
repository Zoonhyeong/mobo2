const nickname = document.querySelector("#user-name")
const email = document.querySelector("#user-email")
const intro = document.querySelector("#user-intro")

window.onload = function() {
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "get",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
        data = await result.json();
        console.log(data);
        
        nickname.value = data.nickname
        email.value  = data.email
        intro.value  = data.profile
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

function put_data(){
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: window.localStorage.getItem('password'),
                nickname: nickname.value,
                email: email.value,
                profile: intro.value,
                phone: "",
            }),
        })
    .then((result) => {console.log(result);
        result.json();
        location='mypage.html'
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