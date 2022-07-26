module.exports = function toReadable (number) {
  
let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let double = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

if (number.toFixed(0).length == 1) {
 return ones[number];
}

if (number.toFixed(0).length == 2) {
    if (number<20) {
        return double[number%10];
    } else {
        if (number%10 == 0) {
            return tens[number/10-1];
        } else {
            return (tens[Math.floor(number/10)-1]+' '+ones[number%10]);
        }
    }
}

if (number.toFixed(0).length == 3) {

    let arr = number.toString().split('').map(Number);

    if (arr[1] == 0 && arr [2] == 0) {
        return (ones[arr[0]]+' hundred');
    }
    if (arr[2] == 0) {
        return (ones[arr[0]]+' hundred '+tens[arr[1]-1]);
    }
    if (arr[1] == 0) {
        return (ones[arr[0]]+' hundred '+ones[arr[2]]);
    } else {
        if (arr[1]==1) {
        return (ones[arr[0]]+' hundred '+double[arr[2]]);
    } else {
        return (ones[arr[0]]+' hundred '+tens[arr[1]-1]+' '+ones[arr[2]]);
    }
    }
}
}
