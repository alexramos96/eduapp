/* insert window game */
function insertGame(a){
let container = document.getElementById("container");
switch (a){
    case 0:
    container.innerHTML = "<div style='margin: auto;text-align: center; width: 605px'><img alt='' style='width: 100%;' src='/img/mate_classroom.png'><p style='font-size: 1em'>Las 4 operaciones fundamentales de las matemáticas son la suma, resta, multiplicación y división.\n<br>" +
        "<br><strong>SUMAS</strong>  \n<br>" +
        "<br> Se representa con el símbolo + y consiste en añadir a un solo conjunto diversas cantidades, por ejemplo \n" +
        "2+3 = 5 \n<br><img alt='' src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img alt='' src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><br><img alt='' src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img alt='' src='/img/hamburgesa.png' style='width: 30px; height: 30px;'><img alt='' src='/img/hamburgesa.png' style='width: 30px; height: 30px;'>" +
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
        "<p id='exc1' >" + Math.floor(Math.random() * 11)+ " + " +Math.floor(Math.random() * 11) + "</p><input id='r1' onchange='check(r1, exc1)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc21' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte2.png' alt='games'></div><div id='r21' class='flip-box-back'>" +
        "<h2>suma</h2>" +
        "<p id='exc2' >" + Math.floor(Math.random() * 11)+ " + " +Math.floor(Math.random() * 11) + "</p><input id='r2' onchange='check(r2, exc2)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc31' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte3.png' alt='games'></div><div class='flip-box-back' id='r31' >" +
        "<h2>suma</h2>" +
        "<p id='exc3'>" + Math.floor(Math.random() * 11)+ " + " +Math.floor(Math.random() * 11) + "</p><input id='r3' onchange='check(r3, exc3)' type='text' >" +
        "</div></div></div>" +
        "<div class='flip-box'><div id='exc41' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte4.png' alt='games'></div><div class='flip-box-back' id='r41'>" +
        "<h2>suma</h2>" +
        "<p id='exc4' >" + Math.floor(Math.random() * 11)+ " + " +Math.floor(Math.random() * 11) + "</p><input id='r4' onchange='check(r4, exc4)' type='text' >" +
        "</div></div></div>" +
        "</div>";
    break;
    case 1:
        container.innerHTML = "<div style='margin: auto;text-align: center; width: 605px'><img alt='' style='width: 100%;' src='/img/español.png'>" +
            "<div class='flip-box'><div id='exc11' class='flip-box-inner'><div class='flip-box-front' ><img style='width: 300px; height: 100%;' src='img/parte1.png' alt='games'></div><div class='flip-box-back' id='r11' >" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc1' type='hidden' value='P'>MA_A<br><img alt='' src='/img/mapa.png' style='width: 25%;'></p><input id='r1' onchange='checkSpanish(r1, exc1)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc21' class='flip-box-inner'><div class='flip-box-front'><img alt='' style='width: 300px; height: 100%;' src='img/parte2.png' alt='games'></div><div id='r21' class='flip-box-back'>" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc2' type='hidden' value='L'>O_A<br><img alt='' src='img/ola.jpg' style='width: 35%;'></p><input id='r2' onchange='checkSpanish(r2, exc2)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc31' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte3.png' alt='games'></div><div class='flip-box-back' id='r31' >" +
            "<h2>ortografía</h2>" +
            "<p ><input id='exc3' type='hidden' value='S'>CA_A<br><img alt='' src='img/casa.png' style='width: 25%; height: 60px;'></p><input id='r3' onchange='checkSpanish(r3, exc3)' type='text' style='text-transform: uppercase'>" +
            "</div></div></div>" +
            "<div class='flip-box'><div id='exc41' class='flip-box-inner'><div class='flip-box-front'><img  style='width: 300px; height: 100%;' src='img/parte4.png' alt='games'></div><div class='flip-box-back' id='r41'>" +
            "<h2>ortografía</h2>" +
            "<p  ><input id='exc4' type='hidden' value='M'>CA_A<br><img alt='' src='img/cama.png' style='width: 25%; height: 60px;'></p><input id='r4' onchange='checkSpanish(r4, exc4)'  type='text' style='text-transform: uppercase' >" +
            "</div></div></div>" +
            "</div>";
        break;
    }
}




/* check question checker */
function check(id, q) {
    let  correct, question, value1, value2, answer;
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
    let answer,  correct;
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
let slideIndex = 0;


function showSlides() {
    if(document.getElementsByClassName("mySlides").length > 0){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}