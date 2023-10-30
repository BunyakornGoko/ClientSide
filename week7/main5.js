const keywords = ['destructuring','spread','rest','prototypes','function']
const mails = [
    {id:123456 , 
    sender:{
        firstname:'Bunyakorn',
        lastname:'Pornsom'
    },
    subject:'Welcome to sit kmutt'
    },

    {id:123000 , 
        sender:{
            firstname:'Pattha',
            lastname:'Kumoat'
        },
        subject:'Welcome to sit kmutt'
    }

]
keywords.forEach((keyword)=> console.log(keyword))
mails.forEach((mail)=> console.log(mail))

//1.firstchar
let firstchar = ''
keywords.forEach((keyword)=> (firstchar+=keyword.charAt(0)))
console.log(firstchar)

keywords.push('optional chaning')
console.log(keywords)

//2.all mail ids of mails array 
const mailIds = []
mails.forEach((mail)=> mailIds.push(mail.id))
console.log(mailIds)

//3.return array that contain keywords which in clude 'es' (case insensitive)
const esKeywords = keywords.filter((keyword) => keyword.toLowerCase().includes('es'))
console.log(esKeywords)

//4.array that contain all sender firstname 
const mailSender = mails.map((mail) => mail.sender.firstname)
console.log(mailSender)

//5.array that contains al mailids that start with 'logid-'
const logMailid = mails.map((mail) => 'logId-' + mail.id)
console.log(logMailid)

