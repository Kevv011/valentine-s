//page1
const page1 = document.getElementById('page_1');
const btn_continue = document.getElementById('btn_continue');

btn_continue.addEventListener('click', () => {
    page1.classList.toggle("hidden");
});