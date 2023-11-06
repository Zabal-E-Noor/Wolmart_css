//+++++++++++++++++++++++++++++++++
let menu = document.querySelector('.menu')

console.log(menu);

window.addEventListener('scroll',()=>{
    let scrolling = window.screenY

    if(scrolling > 100){

        menu.classlist.add('menu_fixed')
    }

})




$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});





















// const container = document.getElementById("hover_zoom");
// const img = document.querySelector("img");
// container.addEventListener("mousemove", onZoom);
// container.addEventListener("mouseover", onZoom);
// container.addEventListener("mouseleave", offZoom);
// function onZoom(e) {
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;
//     img.style.transformOrigin = `${x}px ${y}px`;
//     img.style.transform = "scale(2.5)";
// }
// function offZoom(e) {
//     img.style.transformOrigin = `center center`;
//     img.style.transform = "scale(1)";
// }



// $(function () {
//     $('.slider').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });
// });



// function up(max) {
//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
//     if (document.getElementById("myNumber").value >= parseInt(max)) {
//         document.getElementById("myNumber").value = max;
//     }
// }

// function down(min) {
//     document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
//     if (document.getElementById("myNumber").value <= parseInt(min)) {
//         document.getElementById("myNumber").value = min;
//     }
// }


