/* insert window game */
function insertGame(a){
let container = document.getElementById("container");
switch (a){
    case 0:
    container.innerHTML = "<div style='margin: auto;text-align: center; width: 605px'><img style='width: 100%;' src='/img/mate_classroom.png'><p style='font-size: 1em'>Las 4 operaciones fundamentales de las matemáticas son la suma, resta, multiplicación y división.\n<br>" +
        "<br><strong>SUMAS</strong>  \n<br>" +
        "<br> Se representa con el símbolo + y consiste en añadir a un solo conjunto diversas cantidades, por ejemplo \n" +
        "2+3 = 5 \n<br><img src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><br><img src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img src='/img/hamburgesa.png' style='width: 30px; height: 30px;'>" +
        "\n" +

        " \n" +
        "<br>En este caso originalmente se tiene la cantidad de 2\n" +
        " y posteriormente se le añade o suma 3 para darnos el resultado de 5\n" +
        "\n<br>" +
        "<br><strong>RESTAS</strong> \n<br>" +
        "<br> Se representa con el símbolo -  es el resultado de retirar del conjunto inicial una cantidad requerida.\n" +
        "\n" +
        "5 - 3 = 2\n</p>" +
        "<div class='flip-box'><div id='exc11' class='flip-box-inner'><div class='flip-box-front' ><img style='width: 300px; height: 100%;' src='img/parte1.png' alt='games'></div><div class='flip-box-back' id='r11' >" +
        "<h2>suma</h2>" +
        "<p id='exc1' >" + Math.floor(Math.random() * 50)+ " + " +Math.floor(Math.random() * 50) + "</p><input id='r1' onchange='check(r1, exc1)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc21' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte2.png' alt='games'></div><div id='r21' class='flip-box-back'>" +
        "<h2>suma</h2>" +
        "<p id='exc2' >" + Math.floor(Math.random() * 50)+ " + " +Math.floor(Math.random() * 50) + "</p><input id='r2' onchange='check(r2, exc2)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc31' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte3.png' alt='games'></div><div class='flip-box-back' id='r31' >" +
        "<h2>suma</h2>" +
        "<p id='exc3'>" + Math.floor(Math.random() * 50)+ " + " +Math.floor(Math.random() * 50) + "</p><input id='r3' onchange='check(r3, exc3)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc41' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte4.png' alt='games'></div><div class='flip-box-back' id='r41'>" +
        "<h2>suma</h2>" +
        "<p id='exc4' >" + Math.floor(Math.random() * 50)+ " + " +Math.floor(Math.random() * 50) + "</p><input id='r4' onchange='check(r4, exc4)' type='text' >" +
        "</div></div></div>" +
        "</div>";
    break;
    case 1:
        container.innerHTML = "<div style='margin: auto;text-align: center; width: 605px'><img style='width: 100%;' src='/img/español.png'>" +
            "<div class='flip-box'><div id='exc11' class='flip-box-inner'><div class='flip-box-front' ><img style='width: 300px; height: 100%;' src='img/parte1.png' alt='games'></div><div class='flip-box-back' id='r11' >" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc1' type='hidden' value='P'>MA_A<br><img src='/img/mapa.png' style='width: 25%;'></p><input id='r1' onchange='checkSpanish(r1, exc1)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc21' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte2.png' alt='games'></div><div id='r21' class='flip-box-back'>" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc2' type='hidden' value='L'>O_A<br><img src='img/ola.jpg' style='width: 35%;'></p><input id='r2' onchange='checkSpanish(r2, exc2)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc31' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte3.png' alt='games'></div><div class='flip-box-back' id='r31' >" +
            "<h2>ortografía</h2>" +
            "<p ><input id='exc3' type='hidden' value='S'>CA_A<br><img src='img/casa.png' style='width: 25%; height: 60px;'></p><input id='r3' onchange='checkSpanish(r3, exc3)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc41' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte4.png' alt='games'></div><div class='flip-box-back' id='r41'>" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc4' type='hidden' value='M'>CA_A<br><img src='img/cama.png' style='width: 25%; height: 60px;'></p><input id='r4' onchange='checkSpanish(r4, exc4)'  type='text' style='text-transform: uppercase' >" +
            "</div></div></div>" +
            "</div>";
        break;
    }
}




/* check question checker */
function check(id, q) {
    let error, correct, question, value1, value2, answer;
    answer = id.value;
    question = q.textContent.split(" ");
    value1 = question[0];
    value2 = question[2];
    value1 = Number(value1);
    value2 = Number(value2);
    correct = value1 + value2;

    if (answer != correct) {
        alert("Respuesta incorrecta");
    }else{
    document.getElementById(q.id + 1).style = "transform: rotateY(180deg)";

        document.getElementById(id.id + 1).style = "visibility: hidden";

    }


}

function checkSpanish(q, a){
    let answer, question, correct;
    correct = a.value;
    answer = q.value;
    answer = answer.toUpperCase();
console.log(correct);
    console.log(answer);
    if (answer != correct) {
        alert("Respuesta incorrecta");
    }else{
        document.getElementById(a.id + 1).style = "transform: rotateY(180deg)";

        document.getElementById(q.id + 1).style = "visibility: hidden";

    }
}

/* slider home */
// Function for Moving-slider
window.onload = function(){
    initSlider(
        display='.mSlider_disp',
        showing=3,
        int=1.5,
        speed=0.6);
}

function initSlider(display,showing,int,speed){

    let mSlDisp = document.querySelector(display),
        mSlList = mSlDisp.querySelector('.mSlider_list'),
        mSlArrOrig = mSlList.querySelectorAll('.mSlider-item'),
        mSlCountOrig = mSlArrOrig.length,
        mSlArr = mSlArrOrig,
        mSlCount = mSlCountOrig,
        dispW = mSlArr[0].offsetWidth,
        dispH = mSlArr[0].offsetHeidht,
        prevBtn = document.querySelector('.mSlider-arrow-prev'),
        nextBtn = document.querySelector('.mSlider-arrow-next');

    for(let i=0;i<mSlCount;i++){
        let number = mSlArr[i].getAttribute('data-number');
        if(number<=(mSlCount)/2){
            mSlList.append(mSlArr[i].cloneNode(true));
        } else if(number>(mSlCount)/2){
            mSlArr[0].before(mSlArr[i].cloneNode(true));
        }
    }
    mSlArr = mSlList.querySelectorAll('.mSlider-item');
    mSlCount = mSlArr.length;

    document.querySelector(display).parentNode.style.maxWidth = dispW*showing+'px';
    mSlDisp.style.width=dispW*showing+'px';//устанавливаем ширину и высоту для дисплея
    mSlDisp.style.height=dispH+'px';
    mSlList.style.width=(mSlCount*dispW)+'px';//и слоя с изображениями
    mSlList.style.height=dispH+'px';
    let startPos = -(Math.floor(mSlCountOrig/2+1)*dispW),
        curPos = startPos;
    mSlList.style.left = startPos+'px';

    let isShowing = 0;
    playSS(int*1000);

    nextBtn.onclick = function(){
        if(isShowing===0){
            pauseSS();
            nextSlide();
            playSS(int*1000);
        }
    };

    prevBtn.onclick = function(){
        if(isShowing===0){
            pauseSS();
            prevSlide();
            playSS(int*1000);
        }
    };

    function playSS(int){
        isShowing = 1;
        setTimeout(function(){
            isShowing = 0;
        }, speed*1000)
        sInt = setInterval(function(){
            nextSlide();
        },int);
    };

    function pauseSS(){
        clearInterval(sInt);
    };

    function nextSlide(){
        mSlList.style.left = (startPos-dispW) + 'px';
        setTimeout(function(){
            mSlList.style.left = startPos + 'px';
            mSlList.style.transitionDuration = 0 +'s';
            mSlArr[mSlCount - 1].after(mSlArr[0]);
            mSlArr = mSlList.querySelectorAll('.mSlider-item');

        }, speed*1000)
        mSlList.style.transitionDuration = speed +'s';
    }

    function prevSlide(){
        mSlList.style.left = startPos + dispW + 'px';
        setTimeout(function(){
            mSlList.style.left = startPos + 'px';
            mSlList.style.transitionDuration = 0 +'s';
            mSlArr[0].before(mSlArr[mSlCount-1]);
            mSlArr = mSlList.querySelectorAll('.mSlider-item');
        },speed*1000);
        mSlList.style.transitionDuration = speed +'s';
    }
}
