// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99 ,4567 , 80, 8, 77, 86, 76, 7, 50, 33, 76, 90, 54, 66, 76, 9, 333, 21]

// TODO: IDENTIFY THE TIME COMPLEXITY OF THE FOLLOWING ARRAY METHODS
// 1: PUSH
scores.push(25)
//constant time

// 2: POP
scores.pop()
//constant time

// 3: UNSHIFT
scores.unshift(88)
//linear time complexity

// 4: forEach
scores.forEach((element) => {print(element)})
//linear time complexity


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LINEAR TIME COMPLEXITY
const findValueLinear = (value) => {
    let index = -1
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        if (score === value) {
            index = i
            return index
        
           
        }
        
    }
    return index
     // return the index of the value if present, return -1 if absent
}
//print(`190 is at index: ${findValueLinear(190)}`)
//print(`76 is at index: ${findValueLinear(76)}`)


// TODO: CREATE A SIMPLE SEARCH ALGORITHM THAT USES LOGARITHMIC TIME COMPLEXITY (HAS BUG, TO BE FIXED)
//value = 20, 90
    // [100,20,23,55,76,90]
    // [10,20,23] [55, 76, 90]
    // find middle [3]
    // check if middle is larger than value(20)
    // middle in lower half [1]
    // check if middle is larger than value(20)
    // [10] [20,23]
    // if value = middle => found, the value does not exist in array
    // BINARY SEARCH ALGORITHM


scores.sort((a, b) => a - b)
print(scores)
const findValueLog = (value) => {

    let start = 0
    let end = scores.length - 1

    while (start <= end) {
        
        let middle = parseInt( (start + end) / 2)
        // or let middle = Math.floor( (start + end) / 2)

        if (scores[middle] === value) {
            //return index if value equates
            return middle
        } else if (scores[middle] >= value) {
            end = middle - 1
        } else{
            start = middle + 1
        }
    }

    return -1
    // return the index of the value if present, return -1 if absent
}

// recursive approach
const searchLogRecursive = (value, start, end) => {

    if(start > end) return -1

    let middle = Math.trunc((start + end) / 2)

    if(scores[middle] === value) return middle

    if(scores[middle] > value) {
        searchLogRecursive(value, start, middle - 1)
    }else{
        searchLogRecursive(value, middle + 1, end)
    } 
    return -1   
}

print(`90 is at index: ${findValueLog(90)}`)
print(`88 is at index: ${findValueLog(88)}`)

print(`808 is at index: ${searchLogRecursive(808, 0, scores.length - 1)}`)
print(`90 is at index: ${searchLogRecursive(90, 0, scores.length - 1)}`)
print(`76 is at index: ${searchLogRecursive(76, 0, scores.length - 1)}`)
