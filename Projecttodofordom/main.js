import {addTodoHandler , loadHandler , beforeUnloadHandler} from "../Projecttodofordom/eventHandler/eventController.js"
window.addEventListener('load' , loadHandler)
window.addEventListener('beforeunload' , beforeUnloadHandler)