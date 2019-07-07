let b = document.getElementById("caroGame");
let broad = [];
let data = "";
for (let i=0; i<5 ; i++){
    broad[i] = new Array(0,0,0,0,0);
}
for (let i=0;i<5 ; i++){
    data += "<br/>";
    for (let j=0; j<5 ; j++){
        data += broad[i][j] + "&nbsp;&nbsp; ";
    }
}

b.innerHTML = data;
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    broad[positionX][positionY] ="x";
    for (let i=0; i<5 ; i++){
        data += "<br/>";
        for (let j=0; j<5; j++){
            data += broad[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp; ";
        }
    }

    b.innerHTML = "<hr/>" + data;
}