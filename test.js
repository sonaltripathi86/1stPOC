console.log("Line 1");
console.log("Line 2");
f1();
console.log("Line 4");

function f1() {
    for(var i=0;;i++){
        if(i>10000000000) {
            console.log("from function");
            break;
        }
    }
}