//create new user
function createNewUser(newUser) {
  //ask for name and surname
  let name = prompt("Give me your name dude! ");
  let surname = prompt("and your surname");
  //return object with given info
  return {
    firstname: name,
    lastname: surname,
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
    }
  };
}

let newUser = new createNewUser();
console.log(newUser.getLogin());
