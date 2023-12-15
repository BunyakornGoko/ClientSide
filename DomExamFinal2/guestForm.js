import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchInput = document.getElementById('search-input')
    const addGuestBtn = document.getElementById('add-guest-btn')
    searchInput.addEventListener('keyup' , searchGuest)
    addGuestBtn.addEventListener('click' , addGuest)
    
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const html = `<div>
    <span>${guestItem.firstname} ${guestItem?.lastname}</span>
    <span class="remove-icon" id="${guestItem?.firstname}-${guestItem?.lastname}" style="cursor:pointer;color:red">[X]</span>
  <div>`
  const displayArea = document.getElementById('display-area')
  displayArea.insertAdjacentHTML('beforeend',html)
  const guest = document.getElementById(`${guestItem.firstname}-${guestItem.lastname}`)
  guest.addEventListener('click' , removeGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayArea = document.getElementById('display-area')
    displayArea.textContent = ''
    guestResult.forEach((guestItem) => {
      displayGuest(guestItem)
    })
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const search = event.target.value
    const newGuest = guests.searchGuests(search)
    displayGuests(newGuest)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstNameInput = document.getElementById('firstname-input')
    const lastNameInput = document.getElementById('lastname-input')
    console.log(firstNameInput,lastNameInput);
    const firstname = firstNameInput.value
    const lastname = lastNameInput.value
    guests.addNewGuest(firstname , lastname)
    const newGuest = {firstname , lastname}
    displayGuest(newGuest)
    firstNameInput.value = ""
    lastNameInput.value = ""
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const displayArea = document.getElementById('display-area')
    const el = event.target
    const parent = el.parentElement
    const arr = el.id.split('-')
    const obj = {firstname : arr[0] , lastname : arr[1]}
    guests.removeGuest(obj)
    displayArea.removeChild(parent)
  }
  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())