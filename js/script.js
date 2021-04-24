//constant variables - data that naver changes
const BASE_URL = 'https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json';

//state variable - data that changes
let cars;

//cached element references - parts of the dom we need to touch
const $cars = $('#cars');

//event listeners -capture and respond to event i.e. user clicks on somethings

$cars.on('click', '.sort', handleShowModal);
//function - code that represents actions taken/carried out

init();
function init() {
    getData();
}

function handleShowModal(){
    const carName= parseInt(this.dataset.carName);
    console.log(this.dataset);
    const selectedCar = cars.find(function(car){
        return car.name === carName;
    });
    console.log(selectedCar);


// add the content to the modal

$('#name').text(selectedCar.name);

$('#year').text(selectedCar.year);

$('#origin').text(selectedCar.origin);

$('.modal').modal();
}

function getData() {
    $.ajax(BASE_URL + "?limit=18")
    .then(function (data){
        // console.log(data);
        cars = data;
        render();
    }, function (error) {
        console.log(error);
    });
}

function render() {
    const html = cars.map(function(car){
    
        return `
        <article data-car-name="${car.name}" class="sort">
                <h1>${car.name}</h1>
                <p>${car.year}</p>
            </article>
        `;
    });
    $cars.append(html);
}