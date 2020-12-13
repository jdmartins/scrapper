import { btoa } from 'btoa';

/**
 * Pass in a value in mb and get bytes
 */
export function mbToBytes(sizeMb: number): number {
    return sizeMb * 10e5
}

function uintToString(uintArray) {
    var encodedString = String.fromCharCode.apply(null, uintArray),
        decodedString = decodeURIComponent(escape(atob(encodedString)));
    return decodedString;
}