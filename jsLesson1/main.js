var student = {
  name: 'Jhon',
  country: 'Belgium',
  age: 12
}

/*** to kbab-case */
/**
 * @param {string} string - the string we want to change in kebab string 
 */
var toKbabCase = function(string) {
  // split the string in array from space
  var array = string.split(' ')
  // init empty array
  var finalArr = []

  for (var i = 0; i < array.length; i++) {
    // change every string in array into lower case
    finalArr[i] = array[i].toLowerCase()
  }
  return finalArr.join('-')
}
// console.log(toKbabCase('coucou la famille')) -> "coucou-la-famille"
// console.log(toKbabCase('couCou la FamiLLe')) -> "coucou-la-famille"

// function shuffle(arra1) {
//   var ctr = arra1.length, temp, index;

//   // While there are elements in the array
//   while (ctr > 0) {
//     // Pick a random index
//     index = Math.floor(Math.random() * ctr);
//     // Decrease ctr by 1
//     ctr--;
//     // And swap the last element with it
//     temp = arra1[ctr];
//     arra1[ctr] = arra1[index];
//     arra1[index] = temp;
//   }
//   return arra1;
// }
// var myArray = ['Boris', 'Alex', 'Julien', 'Gaëlle', 'Kedji']
// // var truc = shuffle (myArray)
// // console.log(truc[0]);

// for (var i = 0; i < student.length; i++) {
//   console.log(student[i])
// }

// var chooseStudent = function () {
//   var rand = ['Boris', 'Alex', 'Julien', 'Gaëlle', 'Kedji']
// }

// var everything = function(string, test) {
//   var result = ''
//   for (var i = 0; i < string.length; i++) {
//     if (test) {
//       result = result + string[i].toUpperCase()
//     } else {
//       result = result + string[i]
//     }
//     test = !test // working only worth Boolean
//   }
//   return result
// }


// var u = function(string) {
//   return string.toUpperCase()
// }



// var array = [23, 24, 25, 26, 90]
// var result = '' 

// for (var i = 0; i < array.length; i++) {
//   var minus = i !== 0 ? ' - ' : ''
//   // var minus = ''
//   // if (i !== 0) {
//   //   minus = ' - '
//   // } else {
//   //   minus = ''
//   // }
//   result = result + minus + array[i]
//   console.log(result)
// }

// var wherIsFrom = function(human) {
//   console.log(human)
//   if (human === undefined) {
//     return 'désolé coco mais il n\'existe pas'
//   }
//   return human.name + ' come from ' + human.country
// }


// var h = function() {
//   return 'hello'
// }

// var multiply = function() {
//   return nbr * 100
// }

// var countString = function(string) {
//   return string.length
// }
// console.log(countString('coucou les copains c\'est moi'))

// var canHaveAReduction = function(age) {
//   if (age >= 18 && age <= 20) {
//     console.log('reduction !!!!')
//   } else  {
//     console.log('nope')
//   }
// }

// console.log(canHaveAReduction(12))


// two side condition
// if (student.age >= 18 && student.age <= 20) {
//   console.log('reduction !!!!')
// } else  {
//   console.log('nope')
// }

// first condition
// if (student.age >= 18) {
//   console.log('yes')
// } else if (student.age >= 17) {
//   console.log('you can drive with a parent')
// } else {
//   console.log('nope')
// }