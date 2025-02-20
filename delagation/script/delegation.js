/**
 * Event delegation is a technique where a single event listener is attached 
 * to a parent element to handle events for child elements. 
 * This is useful for dynamic elements.
 */

const dashboard = document.getElementById('dashboard')
const parent = document.getElementById('button-panel')
parent.addEventListener('click', (event) => {
  if (event.target && event.target.nodeName === 'BUTTON') {
        dashboard.innerHTML = event.target.innerHTML
    }
})

const root = document.getElementById('root')

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
}