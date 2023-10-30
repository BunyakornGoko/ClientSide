const mail ={
    sender: 'SIT,KMUTT',
    recipient:{
        firstname:'Bunyakorn',
        lastname:'Pornsombatpaibool'
    },
    title:'Welcome to KMUTT',
    sentDetail: {
        sendate:new Date(Date.now()),
        host:{
            name:'sit@kmutt'
        }
    }
}

let{recipient:{firstname,lastname}} = mail
let{sentDetail:{host:{name}}} = mail

console.log(firstname , lastname)
console.log(name)