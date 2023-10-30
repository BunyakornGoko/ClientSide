const mail ={
    sender: 'SIT,KMUTT',
    recipient:'Bunyakorn Porn',
    title:'Welcome to KMUTT',
    sentDate: new Date(Date.now())
}

let {recipient} = mail
let {sentDate , title:header} = mail
console.log(recipient);
console.log(sentDate);
console.log(header);