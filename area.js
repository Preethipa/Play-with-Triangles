const areas = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const outputArea = document.querySelector("#output");

function calculateAreaOfTriangle(base, height){
    const areaOfTriangle = (base * height);
    //console.log(areaOfTriangle);
    return areaOfTriangle;
}

function calculateArea(){
    const areaOfTriangle = calculateAreaOfTriangle(Number(areas[0].value),Number(areas[1].value))
    //calculateAreaOfTriangle(2,3);
    //console.log(areaOfTriangle);
    const areaOfTheTriangle = 1/2*( areaOfTriangle);
    outputArea.innerText = "Area of the triangle is " + areaOfTheTriangle+"cm²";
}



areaBtn.addEventListener('click', calculateArea)
