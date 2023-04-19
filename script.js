setInterval(changeSlide, 10000);

function changeSlide(){
	if(!document.getElementById("pic1").classList.contains("hidden")){
		document.getElementById("pic1").classList.remove("slideshowpic");
		document.getElementById("pic1").classList.add("hidden");
		document.getElementById("pic2").classList.remove("hidden");
		document.getElementById("pic2").classList.add("slideshowpic");
	}
	else if(!document.getElementById("pic2").classList.contains("hidden")){
		document.getElementById("pic2").classList.remove("slideshowpic");
		document.getElementById("pic2").classList.add("hidden");
		document.getElementById("pic3").classList.remove("hidden");
		document.getElementById("pic3").classList.add("slideshowpic");
	}
	else if(!document.getElementById("pic3").classList.contains("hidden")){
		document.getElementById("pic3").classList.remove("slideshowpic");
		document.getElementById("pic3").classList.add("hidden");
		document.getElementById("pic4").classList.remove("hidden");
		document.getElementById("pic4").classList.add("slideshowpic");
	}
	else if(!document.getElementById("pic4").classList.contains("hidden")){
		document.getElementById("pic4").classList.remove("slideshowpic");
		document.getElementById("pic4").classList.add("hidden");
		document.getElementById("pic5").classList.remove("hidden");
		document.getElementById("pic5").classList.add("slideshowpic");
	}
	else if(!document.getElementById("pic5").classList.contains("hidden")){
		document.getElementById("pic5").classList.remove("slideshowpic");
		document.getElementById("pic5").classList.add("hidden");
		document.getElementById("pic1").classList.remove("hidden");
		document.getElementById("pic1").classList.add("slideshowpic");
	}
}
	
function showMoreLess(para, paraclick){
	let target = document.getElementById(para);
	let button = document.getElementById(paraclick);
	if(target.classList.contains("hidden")){
		target.classList.remove("hidden");
		button.innerHTML="Show Less"
	}
	else{
		target.classList.add("hidden");
		button.innerHTML="Show More"
	}
}

function showResults(){
	let a1 = document.getElementById("q1").value;
	let a2 = document.getElementById("q2").value;
	let a3 = document.getElementById("q3").value;
	let a4 = document.getElementById("q4").value;
	let total = 0;
	let rp1 = document.getElementById("r1");
	let rp2 = document.getElementById("r2");
	let rp3 = document.getElementById("r3");
	let rp4 = document.getElementById("r4");
	let tp = document.getElementById("rT");
	
	if(a1 == "IDs are for unique elements, classes can be resueded"){
		rp1.innerHTML = "Question 1: Corect";
		total = total+1;
	}
	else{
		rp1.innerHTML = "Question 1: Incorrect";
	}
	if(a2 == "document.getElementById"){
		rp2.innerHTML = "Question 2: Corect";
		total = total+1;
	}
	else{
		rp2.innerHTML = "Question 2: Incorrect";
	}
	if(a3 == "a"){
		rp3.innerHTML = "Question 3: Corect";
		total = total+1;
	}
	else{
		rp3.innerHTML = "Question 3: Incorrect";
	}
	if(a4 == "#"){
		rp4.innerHTML = "Question 4: Corect";
		total = total+1;
	}
	else{
		rp4.innerHTML = "Question 4: Incorrect";
	}
	
	tp.innerHTML="Score: "+total+"/4";	
}