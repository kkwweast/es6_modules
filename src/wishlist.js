 import Car from "car";

 class Wishlist{
    constructor() {
        this.list = [];
        this.nextId = 0;
    }
 }
 add(make, model, year) {
    const carAdd = new Car(++this.nextId, make, model,year);
    this.list.push(carAdd);
 };
 remove(carId) {
   //find and remover a element ina array
   this.list = this.list.filter((car) => {
      //keep or discard each car?
      return car.id !== carId;

      
   });
   //find the index of the element to remove
   for (leti = 0;i < this.listlength; i++ ){
      if(this.list[i].id == carId) {
         //we found the one to remove!
         //remove it
         this.list.splice(i--, 1);
      }
   }


}
 export default Wishlist;
