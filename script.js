
function myFunction() {
var val = 0;
var cough = document.getElementById("cough");
var runnynose = document.getElementById("runnynose");
var diarrhea = document.getElementById("diarrhea");
var sorethroat = document.getElementById("sorethroat");
var fever = document.getElementById("fever");
var headache = document.getElementById("headache");
var fatigue = document.getElementById("fatigue");
var chills = document.getElementById("chills");
var bodyaches = document.getElementById("bodyaches");
var shortness = document.getElementById("shortness");
var trouble = document.getElementById("trouble");
var bluelips = document.getElementById("bluelips");
var chestpain = document.getElementById("chestpain");
	if(cough.checked == true){
		val = val + 1;
	}
	if(runnynose.checked == true){
		val = val + 1;
	}
	if(diarrhea.checked == true){
		val = val + 1;
	}
	if(sorethroat.checked == true){
		val = val + 1;
	}
	if(bodyaches.checked == true){
		val = val + 1;
	}
	if(fever.checked == true){
		val = val + 1;
	}
	if(headache.checked == true){
		val = val + 1;
	}
	if(shortness.checked == true){
		val = val + 2;
	}
 	if(fatigue.checked == true){
		val = val + 2;
	}
 	if(travl.checked == true){
		val = val + 3;
	}
 	if(trvlhis.checked == true){
		val = val + 3;
	}
 	if(contact.checked == true){
		val = val + 3;
	}
	if(val >= 0 && val<=2){
		alert("Observe.. Maybe related to Stress");
	} else if(val >= 3 && val<=5){
		alert("Rehydrate and observe personal hygiene. Re-evaluate after 2 days");
	} else if(val >= 6 && val<=12){
		alert("Seek consultation with Doctor");
	} else {
		alert("Reach out to Doctor immediately");
	}
}
