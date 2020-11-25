var slideIndex=0;


function slideshow(){

	var i;
	var slides=document.getElementsByClassName("column");

	for (i=0;i<slides.length;i++){
		slides[i].style.display="none";
		
	}
	slideIndex++;
	if(slideIndex>slides.length){slideIndex=1}
	
	slides[slideIndex-1].style.display="block";
	setTimeout(slideshow,3000);//Change image every 3 seconds
}   