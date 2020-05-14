var array4 = [1, 2, 3, 4, 5, 6, 7, 8];
var val3 = 3;
var fromIndex = 4;
function indexOf(arr1, num, num1) {
    var count = 0;
    var output;
    console.log(arr1);
    console.log(arr1.length);
    console.log(num);
    if (num1) {
        for (var i = num1; i < arr1.length; i++) {
            if (arr1[i] === num) {
                count = count + 1;
                output = i;
                break;
            }
        }
        if (count !== 0) {
            console.log(output);
        }
        else {
            console.log(-1);
        }
    }
    else {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] === num) {
                count = count + 1;
                output = i;
                break;
            }
        }
        if (count !== 0) {
            console.log(output);
        }
        else {
            console.log(-1);
        }
    }
}
indexOf(array4, val3, fromIndex);
