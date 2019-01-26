export default class Helper {
  // return the arabic name of the restaurant if exists 
  static extractRestaurantName(fullName) {
    let openingBracketIndex = fullName.indexOf('(');
    let closingBracketIndex = fullName.indexOf(')');
    if (openingBracketIndex === -1 || closingBracketIndex === -1) {
      return fullName;
    } else {
      return fullName.substring(openingBracketIndex+1, closingBracketIndex);
    }
  }
}