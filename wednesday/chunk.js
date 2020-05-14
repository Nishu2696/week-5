var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var array = [1, 2, 3, 4, 5];
var val = 4;
function chunk(arr1, num) {
    var out = [];
    console.log(out);
    var arr2 = arr1;
    console.log(arr2.length);
    var num1 = num;
    var result = [];
    console.log(result);
    for (var i = 0; i < arr2.length; i++) {
        if ((i % num1) === 0) {
            out = [__spreadArrays(result)];
            result = [];
        }
        result = __spreadArrays(arr2[i]);
        //console.log(result);
    }
    out = [__spreadArrays(result)];
    //out.shift();
    console.log(out);
}
;
chunk(array, val);
