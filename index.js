var peopleArray = [
    { name: "Sioux Sam", birthDay: new Date(1998, 9, 12), children: 1, country: "Tunisia", program: true },
    { name: "Joelie Rupert", birthDay: new Date(1971, 11, 10), children: 5, country: "China", program: true },
    { name: "Marthena Ruller", birthDay: new Date(1971, 11, 10), children: 5, country: "Cameroon", program: false },
    { name: "Deirdre Kisar", birthDay: new Date(1990, 4, 31), children: 0, country: "Paraguay", program: false },
    { name: "Amby Twidell", birthDay: new Date(2000, 26, 8), children: 0, country: "Vietnam", program: true }
];
//is the first person older than the last person?
if (peopleArray[0].birthDay > peopleArray[4].birthDay) {
    console.log("The first person is older than the last person");
}
else {
    console.log("The first person is not older than the last person");
}
//Does the 2nd person have the same amount of kids as the 3rd?
var hasSameKids = peopleArray[1].children === peopleArray[2].children;
//Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.
var result;
if (peopleArray[0].program = true && peopleArray[3].program) {
    result = "YAY";
}
else {
    result = "LMGTFY";
}
;
////Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is
//Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”).
//none of the above, output “Hello”. Tip: a switch statement might be a good fit for this task.
var say;
switch (peopleArray[1].country) {
    case "Iceland":
        say = "Hæ";
        break;
    case "Spain":
        say = "Hola";
        break;
    case "Korea":
        say = "여보세요";
        break;
    default:
        say = "Hello";
        break;
}
//Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
peopleArray[1].name.length > 5 ?
    console.log("This name is longer than 5 characters") :
    console.log("This name is shorter than 5 characters");
/**
 *
 * if (something) {
 *  then this
 * } else {
 *  this
 * }
 *
 * something ? then this : this
 *
 */
console.log(hasSameKids);
console.log(result);
console.log(say);
