//create new user
function createNewUser(newUser) {
  //ask for name and surname
  let name = prompt("Give me your name dude! ");
  let surname = prompt("and your surname");
  let birtDay;
  //return object
  return {
    firstname: name,
    lastname: surname,
    dateOfBirth: birtDay,
    getLogin: function() {
      //return as abb
      return (
        this.firstname.charAt(0).toLowerCase() + this.lastname.toLowerCase()
      );
    },
    //changing firstname
    setFirstName: function() {
      let newName = prompt("You are editing your name, don't be shy");
      this.firstname = newName;
      return this.firstname;
    },
    //changing lastname
    setLastName: function() {
      let newLastName = prompt(
        "You are editing your last name, did you married?) "
      );
      this.lastname = newLastName;
      return this.surname;
    },
    //setting date of birth
    setDateOfBirth: function() {
      let dateOfBirth = prompt(
        "Your date which you had came to this all a bed of roses. IN THIS FORMAT [dd.mm.yyyy]"
      );
      this.dateOfBirth = dateOfBirth;
      return dateOfBirth;
    },
    //getting age of user
    getAge: function() {
      let year = new Date().getFullYear();
      let birthYear = this.dateOfBirth.slice(6, 10);
      let age = +year - +birthYear;
      return age;
    }
  };
}
//create user info as object
let newUser = new createNewUser();
//calling login method
console.log(newUser.getLogin());
//calling a method for setting date of birth
console.log(newUser.setDateOfBirth());
