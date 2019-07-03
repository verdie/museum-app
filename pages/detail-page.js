function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    const comment = document.createElement('section')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    if(doesNotPassAllValidations(name, msg)){
        return false
    }
    h4.innerHTML = `${capitalizeFirstLetter(name)} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h4)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
    }
  
    if(msg.length > 280) {
        alert('Your comment is too long')
        return true
    }

    if(msg.search("fuck") !== -1) {
        alert('no fuck you');
        return true
    }
  
    return false
}


