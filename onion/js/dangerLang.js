window.onload = () => {
    var btns = document.getElementsByClassName("btn");
    for (x of btns) {
      x.addEventListener("click", (e) => clickButton(e));
    };
   
    function clickButton(e) {
        let box = e.target.nextElementSibling;
        console.log(box);
  
        (box.style.display === 'block')? box.style.display = 'none': box.style.display = 'block'; 
     
    }

  
  }
  