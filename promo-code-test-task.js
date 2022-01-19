const num1 = 73245944; //case 1 two pairs not ascending 2000 uah
const num2 = 37257756; //case 2 two pairs ascending 2000 uah
const num3 = 14618581; // case 3 even sum greater than odd sum 100 uah
const num4 = 92929292; // case 4 nothing

function checkPromo(num) {
    let digits = [];
    let evenDigits = [];
    let oddDigits = [];

    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();

    let map = new Map;

    //case 1 and 2
    for (let i = 0; i < digits.length; i++) {
        if (digits[i]%2!==0) {
            //1st pair 1st number
            map.set("1p1n", digits[i]);
            i++;
            if (digits[i]%2!==0) {
                //1st pair 2nd number
                map.set("1p2n", digits[i]);
                i++;
                if (digits[i]%2!==0) {
                    
                }else{
                    while (digits[i]%2 === 0) {
                        i++; 
                    }
                    if (digits[i]%2!==0) {
                        map.set("2p1n", digits[i]);
                        i++;
                        if (digits[i]%2!==0) {
                            map.set("2p2n", digits[i]);
                            i++;
                        if (map.get("1p1n")<map.get("1p2n") && map.get("2p1n")<map.get("2p2n")) {
                            return 2000;
                        } else{
                            return 1000;
                        }
                        }
                    }
                }
            }
        }
    }

    //case 3
    digits.forEach(digit => {
        if (digit%2 === 0) {
            evenDigits.push(digit);
        } else{
            oddDigits.push(digit);
        }
    });
    let evenSum = evenDigits.reduce((a,b) => a + b);
    let oddSum = oddDigits.reduce((a,b)=> a + b);

    if (evenSum > oddSum) {
        return 100;
    }
    //case 4
    return 0;
}