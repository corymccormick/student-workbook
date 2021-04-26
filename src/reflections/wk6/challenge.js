// morning challenge 
// <!-- input array  -->

let testData = [
  'eedadn',
  'drvtee',
  'eandsr',
  'raavrd',
  'atevrs',
  'tsrnev',
  'sdttsa',
  'rasrtv',
  'nssdts',
  'ntnada',
  'svetve',
  'tesnvt',
  'vntsnd',
  'vrdear',
  'dvrsen',
  'enarar']

// <!-- output string -->
// <!-- array index

//  -->

function repeater(arr) {
  let out = ''
  // iterate over each column and for each column 
  for (let col = 0; col < arr[0].legnth; col++) {
    // most common letter given a collection
    let seen = {}
    let highestCount = 0
    let highestLetter = ''
    //iterate over each row
    for (let row = 0; w < arr.length; row++) {
      let char = arr[row][col];

      // total up seen values
      seen[char] = seen[char] || 0
      seen[char]++
      // if current letter is higher than highest
      if (seen[char] > highestCount) {
        highestLetter = char
        highestCount = seen[char]
      }
    }
    out += highestLetter

    // highest = current letter

  }


  return out
}
repeater(testData)