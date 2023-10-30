let a = 1
function x(m){
    let b = 2 
    function y(n){
        let c = 3
        console.log(`a: ${a} , m: ${m} , b: ${b} , n: ${n} , c: ${c}`);
        function z(o){
            let d = 4
            console.log(`a: ${a} , m: ${m} , b: ${b} , n: ${n} , c: ${c} , o: ${o} , d: ${d}`);
        }
    }
    console.log(`a: ${a} , m: ${m} , b: ${b}`);
}
console.log(`a: ${a}`);
x(100)