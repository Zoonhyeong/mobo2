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
    
    const scroll_box = document.querySelector("#scroll-box")
    let box_html_str = "";
    const box_html_str_div = "</div>";
    let box_html_str2 = "";
    let result_str = "";

    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let icon_img
        let data_folder = [];
        var folder_name = new Array();
        (async () => {
            data_folder = await result.json()
            for(var i=0; i<arrList.length; i++){
                arrList[i] = await result.json();
            }
            fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/subscribe",{
                    method: "GET",
            })
            .then((result) => {console.log(result);
                let data_subscribe = [];
                (async () => {
                    data_subscribe = await result.json();
                    for(let j = 0; j < data_folder.length; j++){
                        console.log(data_folder.group_name)
                        folder_name[j] = data_folder[j].group_name
                        box_html_str = `<div class="dropdown" id="dropdown-box">
                                            <div style="cursor: pointer;" class="list-sub-box box1 folder" onclick="drop_sub_list`+(j+1)+`()" style="margin-bottom: 15px;">
                                                <i class="fa-regular fa-folder"></i>
                                                <p class="sub-folder-name">` + data_folder[j].group_name +`</p>
                                                <i class="fa-solid fa-bars"></i>
                                            </div>
                                            <div style="display: none;" id="drop-content`+(j+1)+`" class="folder-detail">`
                                            
                        result_str += box_html_str
                        for(let y = 0; y < data_subscribe.length; y++){
                            if(data_folder[j].id == data_subscribe[y].group){
                                console.log(data_folder[j].id)
                                console.log(data_subscribe[y].group)
                                if(data_subscribe[y].name == "유튜브 프리미엄"){
                                    icon_img = "../img/youtube.png"
                                } else if(data_subscribe[y].name == "netflix" || data_subscribe[y].name == "넷플릭스"){
                                    icon_img="../img/netflix.png"
                                } else if(data_subscribe[y].name == "melon" || data_subscribe[y].name == "멜론"){
                                    icon_img="../img/melon.png"
                                } else{
                                    icon_img="../img/icon.png"
                                }
                                box_html_str2 = `<div class="list-sub-detail">
                                                    <img src=`+icon_img+` alt="logo1">
                                                    <div style="cursor: pointer;" class="sub-content" onclick="go_subscribe('${data_subscribe[y].id}')">
                                                        <p class="sub-name">`+ data_subscribe[y].name +`</p>
                                                        <p class="sub-detail">매월 <span class="pay-day">`+ data_subscribe[y].purchase_date +`</span>일 결제</p>
                                                        <p class="sub-detail">월 <span class="pay-price">`+ data_subscribe[y].purchase_price +`</span>원</p>
                                                    </div>
                                                    <i class="fa-solid fa-bars"></i>
                                                </div>`
                                                console.log(result_str)
                                result_str += box_html_str2
                            }
                            else{
                                console.log(1)
                            }
                        }
                        result_str += `</div></div>`
                    }

                    console.log(result_str)
                    scroll_box.insertAdjacentHTML('afterbegin', result_str)

                })();
                console.log(result_str)
            })
            .then((data)=> {
                console.log(data);
            })
            .catch((error)=>{
                console.log(error);
            });

            scroll_box.insertAdjacentHTML('beforeend', `
            <div class="logo-image">
                <img src="../img/icon.png" alt="로고이미지">
            </div>
            `)

            
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

//폴더마다 스크립트 작동
function drop_sub_list1(){
    let click = document.getElementById("drop-content1");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content1").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content1").stop().slideToggle(-1000).slideUp(700);
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
function drop_sub_list3(){
    let click = document.getElementById("drop-content3");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content3").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content3").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list4(){
    let click = document.getElementById("drop-content4");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content4").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content4").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list5(){
    let click = document.getElementById("drop-content5");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content5").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content5").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list6(){
    let click = document.getElementById("drop-content6");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content6").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content6").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list7(){
    let click = document.getElementById("drop-content7");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content7").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content7").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list8(){
    let click = document.getElementById("drop-content8");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content8").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content8").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list9(){
    let click = document.getElementById("drop-content9");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content9").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content9").stop().slideToggle(-1000).slideUp(700);
    }
}
function drop_sub_list10(){
    let click = document.getElementById("drop-content10");
    if(click.style.display === "none"){
        click.style.display = "block";
        $("#drop-content10").stop().slideToggle(-1000).slideDown(700);
    }else{
        click.style.display = "none";
        $("#drop-content10").stop().slideToggle(-1000).slideUp(700);
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

function go_subscribe(id){
    window.localStorage.setItem('id', id)
    location.href='subscribe.html'
}