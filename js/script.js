const container = document.getElementById("hover_zoom");
const img = document.querySelector("img");
container.addEventListener("mousemove", onZoom);
container.addEventListener("mouseover", onZoom);
container.addEventListener("mouseleave", offZoom);
function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2.5)";
}
function offZoom(e) {
    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
}
























$(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});




















function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}

function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}