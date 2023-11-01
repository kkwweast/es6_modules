//Exercise 4

import Car from "./car"; // Assuming the Car class is exported from the 'car' file in the same directory

class Wishlist {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }

    add(make, model, year) {
        const carAdd = new Car(++this.nextId, make, model, year);
        this.list.push(carAdd);
    }

    remove(carId) {
        // Find and remove an element in an array
        this.list = this.list.filter((car) => {
            // Keep or discard each car?
            return car.id !== carId;


        });
        //find theindex of the element to remove
        for (let i = 0; i < this.list.length; i++){  
        //he found the one to remove
        //remove it
        this.list.splice(i, 1);
        }
    }}
}

export default Wishlist;


 
