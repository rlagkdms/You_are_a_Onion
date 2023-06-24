window.onload = ()=>{
    var good = document.getElementsByClassName("good");
    var bad = document.getElementsByClassName("bad");
    let reset = document.getElementById("reset");
    let result = document.getElementById("water");
    let img = document.getElementById("onion");
    var Imgs ={
        "-5" : "../image/썩 화 5.svg" ,
        "-4" : "../image/썩 화 4.svg" ,
        "-3" : "../image/썩 화 3.svg" ,
        "-2" : "../image/썩 화 2.svg" ,
        "-1" : "../image/썩 화 1.svg" ,
        "0"  : "../image/onion.svg",
        "1" : "../image/자 화 1.svg" ,
        "2" : "../image/자 화 2.svg" ,
        "3" : "../image/자 화 3.svg" ,
        "4" : "../image/자 화 4.svg" ,
        "5" : "../image/자 화 5.svg" 
    };
    let count = 0; 


result.addEventListener("click", (e) => input());
reset.addEventListener("click", (e) => resetImg());

function input(e){
    var good = document.getElementsByClassName("good");
    var flag = false;
    var flag2 = false;
    
    for(var x of good){
        if(x.checked){
            flag = true;
            break;
        }
    }
    
    for(var x of bad){
        if(x.checked){
            flag2 = true;
            break;
        }
    }
    if(flag == true && flag2 == false) {
        count++;
        console.log(count);

    }else if(flag == false && flag2 == true){
        count--;
        console.log(count);
    } 

    if(count <= -5) count = -5; 
    else if (count >= 5){
        count = 5; 
        
    } 
    img.src = Imgs[count];
   
    
}
function resetImg(e){
    count = 0; 
    img.src = Imgs[0];


}
  
}


