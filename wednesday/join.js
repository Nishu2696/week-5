var array5 = [1, 2, 3, 4, 5];
var str = "~";
function join(arr1, str1) {
    var result = "";
    var output = [];
    for (var i = 0; i < arr1.length - 1; i++) {
        arr1[i] = arr1[i].toString();
        result += arr1[i] + "~";
        //console.log(result);
    }
    result += arr1[arr1.length - 1] + "";
    output.push(result);
    console.log(output);
}
join(array5, str);
