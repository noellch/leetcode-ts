/* 
https://leetcode.com/problems/encode-and-decode-tinyurl/description/
*/

/* ------------------------------------------------------------------------------- */

const base = 'https://tinyurl.com/';
const decodeMap: Map<string, string> = new Map();
const encodeMap: Map<string, string> = new Map();

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    if (!encodeMap.has(longUrl)) {
        const shortenUrl = base + encodeMap.size + 1;
        encodeMap.set(longUrl, shortenUrl);
        decodeMap.set(shortenUrl, longUrl);
    }

    return encodeMap.get(longUrl) as string;
}

/*
T.C.: O(1)
*/

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return decodeMap.get(shortUrl) as string;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

/*
T.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
