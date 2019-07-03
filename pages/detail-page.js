function submitComment() {
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    const comment = document.createElement('section')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')
    h4.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h4)
    comment.appendChild(p)
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    inputField.value = null
    textArea.value = null
    if(doesNotPassAllValidations(name, msg)){
        return false
    }
    var str = "Visit W3Schools! fuckers";
    var n = str.search("fuck");
    if (n !== -1) {
    alert('no fuck you');
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
