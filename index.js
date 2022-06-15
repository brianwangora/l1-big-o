// print utility
const print = (value) => console.log(value)

// user scores
const scores = [99 ,80, 77, 86, 50, 33, 76, 90, 54, 66]

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
scores.sort()
const findValueLog = (value, top, bottom) => {
    let index = (-1)

    let halfOps = (top + bottom) / 2
    const half = parseInt(halfOps)

    const valBeforeHalf = scores[half - 1]
    if (value > valBeforeHalf) {
        //top half
        findValueLog(value, half - 1, 0)    
    }else{
        //bottom half
        if (value === scores[half]) {
            return half
        }
        findValueLog(value, scores.length - 1, half)
    }

    return index
    // return the index of the value if present, return -1 if absent
}

print(`90 is at index: ${findValueLog(90, scores.length - 1, 0 )}`)
print(`88 is at index: ${findValueLog(88, scores.length - 1, 0)}`)