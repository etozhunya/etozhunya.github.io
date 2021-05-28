document.addEventListener('DOMContentLoaded', () => {

	$('video').trigger('play')
	cubeAngle = 90;
	$('#cube').bind("click", rotate)

	function rotate(){
	    cube.style.transform = "rotateY(" + cubeAngle +       "deg)";
	    if (cubeAngle >= 90) {
	        cubeAngle = cubeAngle + 90;
	    }  
	}
	
	$(".hamburger").click(function(e) {
        $(this).toggleClass("active");
    });

})
