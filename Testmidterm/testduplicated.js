// //How to delete some duplicates from an array

const duplicate = [];

const deleteDuplicate = (name) => {
  for (let i = 0; i < name.length; i++) {
    const element = name[i];
    const index = duplicate.indexOf(element); // array.indexof(element)
    if (index === -1) {
        duplicate.push(element);
    } 
  } 
  return duplicate
}
               // -1    -1       0    -1      -1      -1      -1      -1
const name = ['champ', 'nong', 'champ', 'dol', 'poom', 'boom', 'nut', 'chaiyo']
           // testcae = ['champ', 'nong', 'dol', 'poom', 'boom', 'nut', 'chaiyo']

console.log(deleteDuplicate(name))