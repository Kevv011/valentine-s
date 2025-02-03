const body = document.getElementById('body');
const page1 = document.getElementById('page_1');
const page2 = document.getElementById('page_2');
const page3 = document.getElementById('page_3');
const btn_continue = document.getElementById('btn_continue');
const btn_continue2 = document.getElementById('btn_continue2');

btn_continue.addEventListener("click", () => {
    page1.classList.add("hidden");

    setTimeout(() => {
        page2.classList.remove("d-none");
    }, 500);

    setTimeout(() => {
        page1.style.display = "none";
        page2.style.display = "block";
        page2.classList.add("show");
    }, 1000);

    setTimeout(() => {
        btn_continue2.classList.remove("hidden");
        btn_continue2.classList.add("show");
    }, 8000);
});

/* *********************************************** */

btn_continue2.addEventListener("click", () => {
    page2.classList.remove("show");

    setTimeout(() => {
        page2.style.display = "none";
        page3.classList.remove("d-none");
    }, 500);

    setTimeout(() => {
        page3.style.display = "block";
        page3.classList.add("show");
    }, 1000);
});


