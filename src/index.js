console.log("Hello World");

const inputForm = document.querySelector("#submitForm");
const carMakeInput = document.querySelector("#car-MakeInput");
const carModelInput = document.querySelector ("#car-ModelInput");
const carYearInput = document.querySelector ("#yearInput");
const carMakePara = document.querySelector
("#car-make");
const carModelPara = document.querySelector("#car-Model");
const carYearPara = document.querySelector("#car-Year");
const removeBtn = document.querySelector(".removeBtn");
const wishListUL = document.querySelector("wishlistContainer > ul");
//invoking the constructor on our class to create
const wishList = new WishList ();
inputForm.addEventListener("submit", addcar );

removeBtn.addEventListener("click",  removeCar);

function showCarDetails(car) {
    carMakePara.textContent = car.make;
    carModelPara.textContent = car.model;
    carYearPara.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId,car.id);
}
//populate the list of cars on the page
//reset the list,and then make the cars again
function updateDomList() {
  wishListUL.innerHTML = "";


  wishList.list.forEach((element, index, array) => {
    //1. Create the elements
      const li = document.createElement("li");
      li.textContent = `${element.make} ${element.model}`;
    //modify the elements
      li.addEventListener("click", () => {
      showCarDetails(element);
    })}
    
    //3. append the elelements
   
    wishListUL.append(li)
  };
 //Handling some event that will  add a car to the list and update
  Function: addCar(event) {   
    //prevent the browser from performing its a default thing
    event.preventDefault();
    wishList.add(carMakeInput.Value, carModelInput.Value, carYearInput.Value)
      updateDomList();
  };
  function removeCar() {
    const CarId = Number(removeBtn.getAttribute("data-carId"));
  } wishList.remove(carId);
  updateDomList();
  carMakePara.textContent = "";
  carModelPara.textContent = "";
  carYearPara.textContent = ""
  removeBtn.disabled = true;


