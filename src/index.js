// Exercise 5
import WishList from "./wishlist"

const inputForm = document.querySelector("#submitForm");
const carMakeInput = document.querySelector("#car-MakeInput");
const carModelInput = document.querySelector("#car-ModelInput");
const carYearInput = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-Model");
const carYearPara = document.querySelector("#car-Year");
const removeBtn = document.querySelector(".removeBtn");
const wishListUL = document.querySelector(".wishlistContainer > ul");


const wishList = new WishList();

inputForm.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

//Exercise 6
function showCarDetails(car) {
  carMakePara.textContent = car.make;
  carModelPara.textContent = car.model;
  carYearPara.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}
//Exercise 7

function updateDomList() {
  wishListUL.innerHTML = "";

  wishList.list.forEach((element, index, array) => {
    //  Create the elements
    const li = document.createElement("li");
    li.textContent = `${element.make} ${element.model}`;
    //  Modify the elements
    li.addEventListener("click", () => {
      showCarDetails(element);
    });
    
    //  Append the elements
    wishListUL.appendChild(li);
  });
}

//Exercise 8

function addCar(event) {
  event.preventDefault();
  var carMakeInput = document.getElementById("makeInput");
        var modelInput = document.getElementById("modelInput");
        var yearInput = document.getElementById("yearInput");

        WishList.add(carMakeInput.value, modelInput.value, yearInput.value); // Call wishlist.add with the values from the inputs
        WishList.updateDOMList(); // Call updateDOMList to update the wishlist on the DOM
    }

  event.preventDefault() ;{  
  wishList.add(carMakeInput.value, carModelInput.value, carYearInput.value);
  updateDomList();
}
//Exercise 9

function removeCar() {
  const carId = Number(removeBtn.getAttribute("data-carId"));
  wishList.remove(carId);
  updateDomList();
  carMakePara.textContent = "";
  carModelPara.textContent = "";
  carYearPara.textContent = "";
  removeBtn.disabled = true;
}



