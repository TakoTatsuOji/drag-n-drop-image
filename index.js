const dropArea = document.querySelector('.drop-area')
const h1 = document.querySelector('h1');

const dragEvents = ['dragenter', 'dragover', 'dragleave', 'drop']

dragEvents.forEach(dragEvent => {
    dropArea.addEventListener(dragEvent, preventDefaults)
})

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

;['dragenter', 'dragover'].forEach(dragEvent => {
    dropArea.addEventListener(dragEvent, highlight)
})

;['dragleave', 'drop'].forEach(dragEvent => {
    dropArea.addEventListener(dragEvent, unhighlight)
})

function highlight(evt) {
    dropArea.classList.add('highlight')
    h1.style.display = 'none'
    
}

function unhighlight(evt) {
    dropArea.classList.remove('highlight')

    if (evt.type == 'drop') {
        h1.style.display = none
        return
    }
    
    h1.style.display = 'block'
}
