function transition(){
	var box = document.getElementById("box");
	if (this.scrollY > this.innerHeight /1.7){
		document.body.classList.add('body-transition')
		box.classList.add("box-shadow");
	}
	else{
		document.body.classList.remove('body-transition')
		box.classList.remove("box-shadow");
	}
}

window.addEventListener("scroll", transition);