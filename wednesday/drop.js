var array3 = [1, 2, 3, 4, 5, 6];
var val2 = 2;
function drop(arr1, num1) {
    var output = [];
    console.log(arr1.length, num1);
    for (var i = num1; i < arr1.length; i++) {
        console.log(i);
        console.log(arr1[i]);
        output.push(arr1[i]);
    }
    console.log(output);
}
drop(array3, val2);
