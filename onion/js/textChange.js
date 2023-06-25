
let newDiv;

function send(){
    var textBox = document.getElementById('text');
    var text2 = textBox.value;
    var text3 = text2.replaceAll("씨발", "감자");
    text3 = text3.replaceAll("시발", "감자");
    text3 = text3.replaceAll("개새끼", "옥수수");
    text3 = text3.replaceAll("병신", "버섯");
    text3 = text3.replaceAll("새끼", "오이");
    text3 = text3.replaceAll("지랄", "당근");
    text3 = text3.replaceAll("년", "콩");
    text3 = text3.replaceAll("놈", "쑥");
    text3 = text3.replaceAll("썅", "칡");
    text3 = text3.replaceAll("꺼져", "배추");
    text3 = text3.replaceAll("개소리", "고구마");
    text3 = text3.replaceAll("닥쳐", "가지");
    text3 = text3.replaceAll("또라이", "치커리");
    text3 = text3.replaceAll("등신", "인삼");
    text3 = text3.replaceAll("멍청이", "양배추");
    text3 = text3.replaceAll("미친", "피망");
    text3 = text3.replaceAll("존나", "양파"); 
    text3 = text3.replaceAll("찐따", "상추");
    text3 = text3.replaceAll("염병", "생강");
    text3 = text3.replaceAll("개", "파");
    text3 = text3.replaceAll("좆같", "박같");
    text3 = text3.replaceAll("죽어", "부추");
    text3 = text3.replaceAll("자살", "더덕");
    text3 = text3.replaceAll("디져", "부추");

    if(text3 != ""){
        newDiv = document.createElement('div');
        var downDiv = document.createElement('div');
        downDiv.style.width="295px";
        downDiv.style.marginLeft="35px";
        newDiv.style.marginTop="20px";
        newDiv.style.backgroundImage="url('../image/speechBubble.png')";
        var newText = document.createTextNode(text3);
        downDiv.appendChild(newText);
        newDiv.appendChild(downDiv);
        top_bar.appendChild(newDiv);
    }else{
        alert("문장을 입력해주세요!");
    }
    blank();

    var scroll = document.getElementById('top_bar');
    scroll.scrollTop = scroll.scrollHeight;
}

function removeAll() {
    top_bar.replaceChildren();
}

function remove(){
    top_bar.lastElementChild.remove();
}

function enter(){
    send();
}

function blank(){
    document.getElementById('text').value = null;
}