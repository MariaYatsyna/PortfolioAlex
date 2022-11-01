let burger = document.querySelector('.header__nav-mobile');
let navList = document.querySelector('.header__nav-list');
let lang = document.querySelector('.lang');
let span = document.querySelector('.span');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('open');
    navList.classList.toggle('open');
    lang.classList.toggle('open');
    span.classList.toggle('open');
})

let seasons = document.querySelector('.seasons')
function select(event) {
    let content = event.target.innerHTML;
    let buttons = document.querySelectorAll('.season__button')
    for(let element of buttons){
        element.classList.remove('active')
        let link = element.innerHTML        
        if (link === content) {
            element.classList.add('active')
        }
    }
    let imgBlocks = document.querySelectorAll('.portfolio__img')
    for (let element of imgBlocks) {
        element.classList.remove('active_season')
        let contentBlocks = String(content).toLowerCase().trim()
        if (element.classList.contains(contentBlocks)) {
            element.classList.add('active_season')
        }        
    }
}
seasons.addEventListener('click', select)

let contactsForm = document.forms[0]
contactsForm.addEventListener("submit", onSubmit);

let emailInput = contactsForm.elements.email
emailInput.addEventListener("input", onEmailInput);
function onEmailInput(event) {
    emailInput.value = event.target.value
}

let telInput = contactsForm.elements.tel
telInput.addEventListener("input", onTelInput);
function onTelInput(event) {
    telInput.value = event.target.value
}

let messageInput = contactsForm.elements.message
messageInput.addEventListener("input", onMessage);
function onMessage(event) {
    messageInput.value = event.target.value
}

function onSubmit(event) {
    event.preventDefault()
    alert("Отправить сообщение пользователю: Email: " + emailInput.value + " " + "Phone: " + telInput.value + " " + "Text: " + messageInput.value)
}