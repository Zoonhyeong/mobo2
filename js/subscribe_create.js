window.onload = function() {

    const category_value = 0;
    const select_folder = document.querySelector("#select-box2")

    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data2 = [];
        var option = new Array();

        (async () => {
            data2 = await result.json()
            for(let i = 0; i < data2.length; i++){
                console.log(data2.group_name)
                option[i] = data2[i].group_name
            }
            for(let i=0; i < data2.length; i++){
                select_folder.innerHTML += `<option value="` + option[i] + `">` + option[i] + `</option>`
            }
            console.log(data2);
        })();

        // for(let i = 0; i < data.length; i++){
        //     console.log(option[i])
        //     console.log(select_folder.value)
        //     if(option[i] == select_folder.value){
        //         console.log(i)
        //     }
        // }
    })
    .then((data2)=> {
        console.log(data2);
    })
    .catch((error)=>{
        console.log(error);
    });

    
}


function sub_create(){
    const itemname = document.getElementById("select-box")
    const category = document.getElementById("select-box2")
    const price = document.getElementById("pay-price")
    const date = document.getElementById("start-date")
    const unit_week = document.getElementById("radio-week")
    const unit_month = document.getElementById("radio-month")
    const unit_month_first = document.getElementById("month-unit")
    const unit_month_date = document.getElementById("month-date")
    const unit_week_first = document.getElementById("week-unit")

    fetch("http://127.0.0.1:8000/api/members/"+window.localStorage.getItem('name')+"/subscribes-groups",{
        method: "GET",
    })
    .then((result) => {console.log(result);
        let data3 = [];
        var result_group;

        (async () => {
            data3 = await result.json()
            
            console.log(data3);
            for(let i=0; i<data3.length; i++){
                if(category.value == data3[i].group_name){
                    fetch("http://127.0.0.1:8000/api/members/" + window.localStorage.getItem('name') + "/subscribe",{
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        name: itemname.value,
                        start_date: date.value,
                        purchase_month: unit_month_first.value,
                        purchase_date: unit_month_date.value,
                        purchase_price: price.value,
                        member: data3[i].member,
                        group: data3[i].id
                        }),
                    })
                    .then((result) => {console.log(result);
                        result.json();
                        location='list.html'
                        if(result.status==400){
                            alert("error msg")
                        }
                    })
                    .then((data3)=> {
                        console.log(data3);
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
                }
            }
        })();
    })
    .then((data3)=> {
        console.log(data3);
    })
    .catch((error)=>{
        console.log(error);
    });

}
