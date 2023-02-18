document.getElementById('new-window').addEventListener('click', function ()
{
    window.location.href = 'question.html';
})

const nameArray = [];
const area = [];




//Area of triangle calculation 

document.getElementById("triangle-btn").addEventListener("click", function ()
{

    let triangele_base= document.getElementById('triangle-base').value;
    let triangele_height = document.getElementById('triangle-height').value;

    validition(triangele_base,triangele_height)

    let triangele_area = .5 * triangele_base * triangele_height;
    let shape_name = "Triangle";
    nameArray.push(shape_name);
    if(triangele_area!=0){
    area.push(triangele_area.toFixed(2));
    }

    display();
});


//Area of Rectangle calculation 
document.getElementById("rectangle-btn").addEventListener("click", function ()
{

    let rectangle_length = document.getElementById('length').value;
    let rectangle_width = document.getElementById('width').value;

    validition(rectangle_length,rectangle_width)

    let rectangle_area =rectangle_length * rectangle_width;
    let shape_name = "Rectangle";
    nameArray.push(shape_name);
    if(rectangle_area!=0){
        area.push(rectangle_area.toFixed(2));
        }
 

    display();
});

// function for displaying value
let i = 0;
function display ()
{
    let result_table = document.getElementById("result_table");
    // let btn = document.createElement('button');

    for (i; i < area.length; i++) {
        let row = result_table.insertRow();
        let slNo = row.insertCell(0); 
        let name = row.insertCell(1);
        let areaValue  = row.insertCell(2);
        let btn  = row.insertCell(3);
        slNo.innerHTML = i+1;
        name.innerHTML = nameArray[i]
        areaValue.innerHTML = area[i]+"cm<sup>2</sup>"
    }
}


// parallelogram

document.getElementById("parallelogram-btn").addEventListener("click", function ()
{

    let parallelogram_base= document.getElementById('parallelogram-base').value;
    let parallelogram_height = document.getElementById('parallelogram-height').value;

    validition(parallelogram_base,parallelogram_height)

    let parallelogram_area = parallelogram_base * parallelogram_height;
    let shape_name = "Parallelogram";
    nameArray.push(shape_name);
    if(parallelogram_area!=0){
    area.push(parallelogram_area.toFixed(2));
    }

    display();
});


// rhombus

document.getElementById("rhombus-btn").addEventListener("click", function ()
{

    let rhombusD1= document.getElementById('rhombus-d1').value;
    let rhombusD2 = document.getElementById('rhombus-d2').value;

    validition(rhombusD1,rhombusD2)

    let rhombus_area = .5* rhombusD1 * rhombusD2;
    let shape_name = "Rhombus";
    nameArray.push(shape_name);
    if(rhombus_area!=0){
    area.push(rhombus_area.toFixed(2));
    }

    display();
});


//pentagon

document.getElementById("pentagon-btn").addEventListener("click", function ()
{

    let pentagonP= document.getElementById('pentagon-p').value;
    let pentagonB = document.getElementById('pentagon-b').value;

    validition(pentagonP,pentagonB)

    let pentagon_area = .5* pentagonP * pentagonB;
    let shape_name = "Pentagon";
    nameArray.push(shape_name);
    if(pentagon_area!=0){
    area.push(pentagon_area.toFixed(2));
    }

    display();
});

//ellipse


document.getElementById("ellipse-btn").addEventListener("click", function ()
{

    let ellipseA= document.getElementById('ellipse-a').value;
    let ellipseB = document.getElementById('ellipse-b').value;

    validition(ellipseA,ellipseB)

    const pi =3.1416

    let ellipse_area = pi* ellipseA * ellipseB;
    let shape_name = "Ellipse";
    nameArray.push(shape_name);
    if(ellipse_area!=0){
    area.push(ellipse_area.toFixed(2));
    }



display();
});



//function for validition

function validition (value1, value2) {

    if (
        value1 == "" ||
        value2 == "" ||
        value1 <= 0 ||
        value2 <= 0
      ) {
        return alert("please enter any valid number");
      }

}


// random color chang on mouseover

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



let cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = getRandomColor(); 
   
  });
  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = "#fff"; 
   
  });
});