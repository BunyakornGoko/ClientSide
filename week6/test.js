//โจทย์ให้เช็คสกุลไฟล์ ถ้ามีสกุลตามมที่กำหนดให้ return true ถ้าเป็น null และ undefind ให้ return false
function isImageFileExtension(fileName){
    if(fileName === null || fileName === undefined){
        return false
    }
    return fileName.substring(fileName.lastIndexOf('.'))
}

function isImageFileExtension2(fileName2){
    return (
        fileName2.endsWith('.png') ||
        fileName2.endsWith('.jpg') ||
        fileName2.endsWith('.jpeg') ||
        fileName2.endsWith('.gif') ||
        fileName2.endsWith('.svg') 
    )
}
console.log(isImageFileExtension2('sample.png'));
console.log(isImageFileExtension2('sample.jpg'));
console.log(isImageFileExtension2('sample.jpeg'));
console.log(isImageFileExtension2('sample.gif'));
console.log(isImageFileExtension2('sample.svg'));