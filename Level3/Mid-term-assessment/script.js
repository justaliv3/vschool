function solution(arr){
        const sortedNonNegativeNumbers = arr.filter(x => x !== -1).sort((a, b) => a - b);
        return arr.map(x => x === -1 ? x : sortedNonNegativeNumbers.shift());
      }


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
    return count;
  }

  const input = "Hello World"

console.log(countVowels(input))