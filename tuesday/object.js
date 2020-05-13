let inputval = "#exmple || @name && user_email";
inputval=inputval.split(" ");
console.log(inputval);
const output=[];
const outputval= inputval.map((str) => {
    let obj={};
    let[first, second] = str.split(/[#@]/);
    console.log(first, second);
    switch(str[0]){
        case "#":
            obj.type= "intent";
            obj.value= second;
            break;

        case "|":
            obj.type= 'operator';
            obj.value= 'OR';
            break;

        case "@":
            obj.type= 'entity';
            obj.value= second;
            break;

        case "&":
            obj.type= 'operator';
            obj.value= 'AND';
            break;

        default:
            obj.type= 'variable';
            obj.value= first;
            //console.log(first);
            break;
    }
    return obj;
});

console.log(...output, outputval);