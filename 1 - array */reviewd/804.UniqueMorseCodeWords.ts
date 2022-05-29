/* Q: International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have. */

function uniqueMorseRepresentations(words: string[]): number {
    const morseArr = [
        '.-',
        '-...',
        '-.-.',
        '-..',
        '.',
        '..-.',
        '--.',
        '....',
        '..',
        '.---',
        '-.-',
        '.-..',
        '--',
        '-.',
        '---',
        '.--.',
        '--.-',
        '.-.',
        '...',
        '-',
        '..-',
        '...-',
        '.--',
        '-..-',
        '-.--',
        '--..',
    ]

    const result = words.map((word) => {
        let morseCode = ''

        for (const letter of word) {
            morseCode += morseArr[letter.charCodeAt(0) - 97]
        }

        return morseCode
    })

    return new Set(result).size
}

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']))

/**
 * 要提高效能可以將 morseArr 改為 map。ex: {a: '.-', b: '-...'... }。這樣就不需要每個字母都用 charCodeAt 去轉換再對照。
 */

/**
 * T.C.: O(n^m) (worst case。n 為 words 的長度。m 為最長 word 的字母數。）
 * S.C.: O(n)（worst case。n 為 words 的長度。因為 Set 的 size 可能最差與 words 的長度 相同。）
 */
