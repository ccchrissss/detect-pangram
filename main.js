function isPangram(string){
  
  let alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let set1 = new Set()
  let arr = string.split('')

  arr.forEach( e => {
    if ( alphabetLowerCase.includes ( e.toLowerCase() ) ) { set1.add( e.toLowerCase() ) }
  })

  // for (let i = 0; i < arr.length; i++) {
    
  //   if ( alphabetLowerCase.includes(arr[i].toLowerCase()) ) { set1.add(arr[i].toLowerCase()) }
    
  // }

  let finalArr = Array.from(set1)

  // console.log(finalArr)

  return finalArr.length == 26 ? true : false

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// use set

// params: string   // a sentence
// return: boolean
// e.g. isPangram('The quick brown fox jumps over the lazy dog')
// results in true

// declare a variable alphabetLowerCase and assign it to a string of 'abcdefghijklmnopqrstuvwxyz'.split('')
// declare a variable set1 and assign it to a new Set()
// convert the string to an array
// loop through the array with the forEach method, adding each element.toLowerCase to the new set if alphabetLowerCase includes that letter
// end loop
// declare a variable called finalArr and assign it to an array made from set1
// return a ternary expression that evaluates to true if finalArr's length equals 26
// 
