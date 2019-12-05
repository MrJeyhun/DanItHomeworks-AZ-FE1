/**
 *
 * @constructor
 * @param size        size of the hamburger
 * @param stuffing    selected stuffing
 * @throws {HamburgerException}  In case of incorrect usage
 */
class Hamburger {
  constructor(size, stuffing) {
    try {
      const exampleSize = "Hamburger.SIZE_SMALL";
      const exampleStuffing = "Hamburger.STUFFING_SALAD";
      if (
        exampleSize.slice(10, 14) == "SIZE" &&
        exampleStuffing.slice(10, 18) == "STUFFING" &&
        size != undefined &&
        stuffing != undefined
      ) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppingList = [];
        this.price = 0;
        this.calories = 0;
      } else {
        throw new HamburgerException("Incorrect size or stuffing");
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Add topping to hamburger. Several toppings can be added, only if they are diferent. You can't add same topping two times.
   *
   * @param topping     type of topping
   * @throws {HamburgerException}  in case of incorrect usage
   */

  addTopping(topping) {
    try {
      if (!this.toppingList.includes(topping)) {
        this.toppingList.push(topping);
      } else {
        throw new HamburgerException("Can not add same topping more than once");
      }
    } catch (e) {
      console.log(e);
    }
  }
  removeTopping(topping) {
    try {
      if (this.toppingList.includes(topping)) {
        var index = this.toppingList.indexOf(topping);
        this.toppingList.splice(index, 1);
      } else {
        throw new HamburgerException("There's no such topping");
      }
    } catch (error) {
      console.log(error);
    }
  }
  /*Find out the size of the Hamburger*/
  getSize() {
    return this.size;
  }

  /**
   * Get list of toppings
   *
   * @return {Array} an Array with the list of constants like Hamburger.TOPPING_* inside
   */

  getToppings() {
    return this.toppingList;
  }
  /*Find out the stuffing of the Hamburger*/

  getStuffing() {
    return this.stuffing;
  }
  /**
   * Find out the price of the hamburger
   * @return {Number} the number of price in AZN
   */

  calculatePrice() {
    this.toppingList.map(topping => {
      this.price += topping.price;
    });
    this.price = this.size.price + this.stuffing.price;
    return this.price;
  }
  /**
   * Find out callories amount of the hamburger
   * @return {Number} Number of calories
   */
  calculateCalories() {
    this.toppingList.map(topping => {
      this.calories += topping.calories;
    });
    this.calories = this.size.calories + this.stuffing.calories;
    return this.calories;
  }
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_SPICE = { price: 15, calories: 0 };

/**
 * Provides information about an error while working with a hamburger.
 * Details are stored in the message property.
 * @constructor
 */
function HamburgerException(errorMessage) {
  this.errorMessage = errorMessage;
}

// small hamburger with cheese
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// mayo topping
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// asking the number of calories
console.log("Calories: %f", hamburger.calculateCalories());
// asking the price
console.log("Price: %f", hamburger.calculatePrice());
// I've changed my mind, and I've decided to add more topping
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// Did hte price changed?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// How large is this hamburger
console.log(
  "Is hamburger large: %s",
  hamburger.getSize() === Hamburger.SIZE_LARGE
); // -> false
// Remove the topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Have %d toppings", hamburger.getToppings().length); // 1

// have not passed on the necessary parameters
var h2 = new Hamburger(); // => HamburgerException: no size given

// pass incorrect values, an topping instead of a size
var h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);
// => HamburgerException: invalid size 'TOPPING_SAUCE'

// add to many toppings
var h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// HamburgerException: duplicate topping 'TOPPING_MAYO'
