const keyCodeSpace = document.querySelector('.display_keyCode')
const keySpace = document.querySelector('.display_key')
const codeSpace = document.querySelector('.display_code')

window.addEventListener('keydown', display)

function display(e) {
  keyCodeSpace.innerHTML = e.keyCode
  keySpace.innerHTML = e.key
  codeSpace.innerHTML = e.code
}
