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
    }
}

export default Wishlist;


 
