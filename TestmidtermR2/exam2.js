class Membership{
    static autoId = 1
    constructor(memberName){
        this.memberId = Membership.autoId++
        this.memberName = memberName
    }
}
let members = []
members.push(new Membership('Bunyakorn'))
members.push(new Membership('BoatBoat'))
members.push(new Membership('Champ'))
console.log(members);

function findMemberId(id){
    const findId = members.filter((member => member.memberId === id))
    if(findId.length === 0){
        return -1
    }
    return findId[0].memberId - 1
}

function findMemberId2(id){
    const findIndex = members.findIndex((member => member.memberId === id))
    if(findIndex === -1){
        return -1
    }
    let findId = findIndex + 1
    return findId
}
// console.log(findMemberId(2));
// console.log(findMemberId2(2));

function findMemberName(name){
    const findindexofName = members.findIndex((member) => member.memberName === name)
    return findindexofName 
}

// console.log(findMemberName('Bunyakorn'))

function subscribe(name){
    if(findMemberName(name) === -1){
        members.push(new Membership(name))
        return members
    }
    return -1
}
// console.log(subscribe('Bunyakorn'));

function unsubscribe(id){
    if(findMemberId2(id) !== -1){
        members.splice(id - 1 , 1)
        return members
    }
    return -1
}
console.log(unsubscribe(2));

// const {getAttendaceRate,getAvgScore,underPerformStudents} = require('./exam')
// console.log(getAttendaceRate());