document.body.addEventListener('keyup',()=>{
    const pw = document.getElementById("user-pw")
    const pw_check = document.getElementById("user-pw-check")
    const red_bar = document.getElementById("checking-red-bar")
    
    if(pw.value === pw_check.value){
        red_bar.style.display = 'none'
    } else{
        red_bar.style.display = 'block'
    }
})