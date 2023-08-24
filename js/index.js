const button = document.getElementById('buttonText')
const input = document.getElementById('inputText')

button.addEventListener('click', () => {
  const text = input.value 
  window.localStorage.setItem('text', text)
})