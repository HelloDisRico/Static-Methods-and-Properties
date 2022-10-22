/* class Governor {
    static createLaws(){
      console.log('Governors make laws')
    }
  
    static createJobs(){
      console.log('Governors make Jobs')
    }
  
    static veto(){
      console.log('Rule out Laws')
    }
  }
  
  Governor.veto()
  Governor.createJobs()
  Governor.createLaws()
*/
  class Person {
    constructor(name, age, occupation, birthYear){
        this.name = name
        this.age = age
        this.occupation = occupation
        this.birthYear = birthYear;
    }; static greeting(){
      console.log("Hello there! How are you" + name);
    } static job(){
      console.log("My occupation is" + occupation);
}     static year(){ 
  console.log("My birth year is" + birthYear);
}
  }
let person1 = new Person('Kevin',20,'banana',2002)
class postalWorker extends Person {
  constructor(name, age, occupation,birthYear, mail, route,){
  super(name, age, occupation, birthYear)
   this.mail = mail;
   this.route = route;} 
   static mailing(){
    if(this.mail > 0){
      console.log("You got mail!");
    } else if( this.mail = 0){
      console.log("No mail")
    }
  } static routeNumber(){
    console.log("My route number is" + route)
  }
}
let postalWorker1 = new postalWorker("Dave",23,"MailMan",1999,20,"Route 22")

postalWorker.mailing()

class Chef extends Person {
  constructor(name)
}