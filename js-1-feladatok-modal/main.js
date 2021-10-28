const modal = document.getElementById(`modal01`);
const modalBtn = document.getElementById(`modalBtn`);
const closeBtn = document.getElementById(`closeBtn`);
const cancelBtn = document.getElementById(`cancelBtn`);
const okeyBtn = document.getElementById(`okeyBtn`);

modalBtn.addEventListener(`click`, openModal);
closeBtn.addEventListener(`click`, closeModal);
window.addEventListener(`click`, closeWindow);
cancelBtn.addEventListener(`click`, closeModal);
okeyBtn.addEventListener(`click`, closeModal);

function openModal(){
    modal.style.display = `block`;
    document.fonts = `Arial`;
}

function closeModal(){
    modal.style.display = `none`;
}

function closeWindow(e){
    if(e.target == modal)
    modal.style.display = `none`;
}

