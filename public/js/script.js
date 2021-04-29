//constant variables - data that naver changes
const BASE_URL = 'https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json?limit=18';
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
    $.ajax(BASE_URL)
    .then(function (data){
        console.log(typeof(data));
        cars = JSON.parse(data).slice(0,21);
        render(cars);
    }, function (error) {
        console.log(error);
    });
}
function render(cars) {
    const html = cars.map(function(car){
        return `
        <article data-car-name="${car.Name}" class="sort">
                <h2>Car Name: ${car.Name}</h2>
                <p>Year: ${car.Year}</p>
                <p>Origin: ${car.Origin}</p>
                <p>Cylinder: ${car.Cylinders}</p>
                <p>Miles/Gallon: ${car.Miles_per_Gallon}</p>
            </article>
        `;
    });
    $cars.append(html);
}