window.onload = function() {

    var member_id;
    
    const nickname = document.querySelector("#nickname")
    const price = document.querySelector("#total-price")
    const profile = document.querySelector("#profile-image")

    var arrList = new Array();
    
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data4 = [];

        (async () => {
        data4 = await result.json();
        console.log(data4.id);

        nickname.innerHTML = data4.nickname
        // profile.innerHTML = data.profile_image

        var member_id = data4.id
        console.log(member_id)


        })();
    })
    .then((data4)=> {
        console.log(data4);
    })
    .catch((error)=>{
        console.log(error);
    });
    
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);

        (async () => {
            for(var i=0; i<arrList.length; i++){
                arrList[i] = await result.json();
            }
        // data = await result.json();
        })();
    })
    .then((arrList)=> {
        console.log(arrList);
    })
    .catch((error)=>{
        console.log(error);
    });


    fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/summary",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data_price = [];

        (async () => {
            data_price = await result.json();
            console.log(data_price);
            price.innerHTML = data_price.purchase_price__sum
        })();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });
    

}


function drop_sub_list1(){
    let click = document.getElementById("drop-content");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content").stop().slideToggle(-1000).slideUp(700);
    }
}

function drop_sub_list2(){
    let click = document.getElementById("drop-content2");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content2").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content2").stop().slideToggle(-1000).slideUp(700);
    }
}

function lastPage(){
    history.back();
}

function nextPage(){
    location.href="subscribe_create.html"
}

function subDetail(){
    location.href="subscribe.html"
}

function listPage(){
    location.href="list.html"
}

function go_mypage(){
    location.href="mypage.html"
}

function create_folder(){
    const foldername = document.getElementById("folder-create");
    const plus_folder_position = document.querySelector('.scroll-area');
    const newfolder = 
    `<div class="dropdown">
        <div class="list-sub-box box2" onclick="drop_sub_list2()">
            <i class="fa-regular fa-folder"></i>
            <p class="sub-folder-name">music</p>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
    `
    
    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name'),{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data = [];

        (async () => {
            data = await result.json()
            console.log(data);

            
        fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                group_name: foldername.value,
                color: "#F8B759",
                member: data.id,
            }),
        })
        .then((result) => {console.log(result);
            result.json();
            if(result.status==201){
                console.log(result);
                plus_folder_position.insertAdjacentHTML('afterend', newfolder);
            } else if(result.status==400){
                alert("폴더명을 입력해주세요")
            }
        })
        .then((data)=> {
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        });

        })();

        // for(let i = 0; i < data.length; i++){
        //     console.log(option[i])
        //     console.log(select_folder.value)
        //     if(option[i] == select_folder.value){
        //         console.log(i)
        //     }
        // }
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    });


}

