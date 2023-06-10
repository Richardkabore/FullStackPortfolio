class restaurant{

constructor (name, rating, numEmployees, menu){
    this.name = name;
    this.rating =  rating;
    this.numEmployees= numEmployees;
    this.menu = menu;

}
  get name(){          
    return this.name;
  }

hireWaitress(){

    return this.numEmployees ++;  

}
 fireEmployee(){

    this.numEmployees--;
 }




}