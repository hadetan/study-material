window.addEventListener('load', () => {
    const essayInput = document.getElementById('essay')
    essayInput.value = localStorage.getItem('essay')
})

const essayInput = document.getElementById('essay')

essayInput.addEventListener('change', () => {
    localStorage.setItem('essay', essayInput.value)
})