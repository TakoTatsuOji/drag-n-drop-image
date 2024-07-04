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

;[dragEvents[0], dragEvents[1]].forEach(dragEvent => {
    dropArea.addEventListener(dragEvent, highlight)
})

;[dragEvents[2], dragEvents[3]].forEach(dragEvent => {
    dropArea.addEventListener(dragEvent, unhighlight)
})

function highlight(evt) {
    dropArea.classList.add('highlight')
    h1.style.display = 'none'
    
}

function unhighlight(evt) {
    dropArea.classList.remove('highlight')

    if (evt.type == 'drop') {
        h1.style.display = 'none'
        return
    }
    
    h1.style.display = 'block'
}

dropArea.addEventListener(dragEvents[3], handleDrop)

function handleDrop(evt) {
    const dataTransfer = evt.dataTransfer
    const imgFileName = dataTransfer.files[0].name 
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
    
    if (!allowedExtensions.exec(imgFileName)) {
        alert("Invalid image file type")
        return
    }

    const imgFile = dataTransfer.files[0]
    previewImg(imgFile)    
}

function previewImg(imgFile) {
    const reader = new FileReader()
    reader.readAsDataURL(imgFile)

    reader.onloadend = function() {
        dropArea.style.backgroundImage = `url(${reader.result})`
    }
}
