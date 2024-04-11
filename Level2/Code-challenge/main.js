//Requirements: write a function that will takes a string and it outputs a string with all 
//upper case into lowercase  and lowercase to uppercase
//and string is reversed

//""

function reverse (str){
    const arr = []
    for(let i = 0; i < str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            const letter = str[i].toLowerCase()
            arr.push(letter)
        }
        if (str[i] === str[i].toLowerCase()){
            const letter = str[i].toUpperCase()
            arr.push(letter)
        }
    }

    const reverseArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        const letter = arr[i]
        reverseArr.push(letter)
    }

    return reverseArr.join("")
        
}




[
    ["abcd", "DCBA"],
    ["abCD", "dcBA"],
    ["AbCd", "DcBa"],
    ["", ""]
].forEach(([arg, expected]) => {
    const received = reverse(arg);
    if(received !== expected) throw Error(`Expected ${expected}, received ${received}`);
    console.log("Passed!")
})