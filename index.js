const body = document.querySelector(".page");
const header = document.querySelector(".page-header")
header.style.height = body.scrollWidth / 2 + 'px';
window.onresize = () => {
    header.style.height = body.scrollWidth / 2 + 'px';
}