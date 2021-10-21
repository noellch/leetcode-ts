/* Q: International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have. */

//? 會給定一個英文字串組成的 array。將各個字串的字母轉換成摩斯密碼再組合。返回字串轉換後，共有幾總不同的摩斯密碼組合。
//? 題目有給摩斯密碼的對照 array

var uniqueMorseRepresentations = function (words) {
    const morseArr = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..']

    const set = new Set(
        words.map((word) => {
            let m = ''
            for (let i of word) {
                m += morseArr[i.charCodeAt(0) - 97]
            }
            return m
        })
    )

    return set.size
}

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']))

// * 不是太難的一題。要看有幾種不重複方的式第一個想到的就是用 Set。
// * 要提高效能可以將 morseArr 改為 map。ex: {a: '.-', b: '-...'... }。這樣就不需要每個字母都用 charCodeAt 去轉換再對照。
