//create new user
function createNewUser(newUser) {
  //ask for name and surname
  let name = prompt("Give me your name dude! ");
  let surname = prompt("and your surname");
  let birth;
  //return object
  return {
    firstname: name,
    lastname: surname,
    dateOfBirth: birth,
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
      var month = new Date().getMonth();
      //set it as a normal format (not january as 0);
      month += 1;
      console.log(month + " month");
      var day = new Date().getDate();
      console.log(day);
      //get year from string
      var birthYear = this.dateOfBirth.slice(6, 10);
      //get month from string
      var birthMonth = this.dateOfBirth.slice(3, 5);
      console.log(birthMonth + " birhtmonth");
      //check first character 0 or not
      var firstcharOfMonth = birthMonth.charAt(0);
      //if it's zero, cut and get it after zero
      if (firstcharOfMonth == 0) {
        birthMonth = birthMonth.substring(1);
      }
      //get birthday from string
      var birthday = this.dateOfBirth.slice(0, 2);
      //check first character 0 or not
      var firstcharOfDay = birthday.charAt(0);
      //if it's zero, cut and get it after zero
      if (firstcharOfDay == 0) {
        birthday = birthday.substring(1);
      }
      //calculate age with difference between years
      var age = +year - +birthYear;
      //calculate age again, but consider months and days
      console.log(birthday);
      if (+birthMonth > +month) {
        age -= 1;
      } else if (+birthMonth <= +month && +birthday >= day) {
        age -= 1;
      }
      return age;
    },
    //setting password for user
    setPassword: function() {
      let userPassword;
      let year = this.dateOfBirth.slice(6, 10);
      userPassword =
        this.firstname.charAt(0).toUpperCase() +
        this.lastname.toLowerCase() +
        year;
      return userPassword;
    }
  };
}
//create user info as object
var newUser = new createNewUser();
//calling login method
console.log(newUser.getLogin());
//calling a method for setting date of birth
console.log(newUser.setDateOfBirth());
