function ops(n1='F',n2='false',n3='unknown'){ //set defualt at arugument , if user don't enter a value will show defualt
    return {n1,n2,n3}
}
console.log(ops());
console.log(ops('A'));
console.log(ops('A',true));
console.log(ops('A',true,'Bunyakorn'));
console.log('-----------------------------------');
console.log(ops(undefined,undefined,undefined));
console.log('-----------------------------------');
console.log(ops(null,null,null));


