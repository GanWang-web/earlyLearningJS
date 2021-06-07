registration.reset()
questionaire.reset()
testimonial.reset()

var logo = document.getElementsByClassName("logo")[0].addEventListener("click",function(){
	for(var i =0;i<3;i++){
		(function(i){
			console.log(i);
		})(4)
	}
})
function delete_post() {
	let deleted = document.getElementsByClassName("post")
	for (var i = 0; i < deleted.length; i++) {
		deleted[i].onclick = function (e) {
			let testimonialUl = document.getElementById("testimonialUl")
			testimonialUl.removeChild(e.target.parentNode)
		}
	}
}

var p = document.getElementsByClassName('img-g')[0];
var button = document.querySelectorAll('.button-g span')
document.getElementsByClassName("prev")[0].addEventListener("click", function () {
	if (parseInt(p.style.left) > -4200) {
		p.style.left = parseInt(p.style.left) - 700 + 'px'
		p.style.transition = 'left 1s';
	} else {
		alert("Last photo.")
		return
	}
})

document.getElementsByClassName("next")[0].addEventListener("click", function () {
	if (parseInt(p.style.left) > -700) {
		p.style.left = '0px'
		p.style.transition = 'right 1s';
		alert("First photo.")
		return
	}
	p.style.left = parseInt(p.style.left) + 700 + 'px'
})

registration.onsubmit = function (e) {
	let name = registration["name"].value
	let email = registration["email"].value
	let gender = registration["gender"].value
	let BOB = registration["DOB"].value
	let education = registration["education"].value
	if (/^[a-zA-Z ]*$/.test(name) == false) {
		alert("Please only input characters in name.")
		e.preventDefault()
		return
	} else if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email) == false) {
		alert("Incorrect email format, please input again.")
		e.preventDefault()
		return
	}
}

let testimonialContent = document.getElementById("testimonialContent")
let testimonialSubmit = document.getElementById("testimonialSubmit")
let testimonialUl = document.getElementById("testimonialUl")
let testimonialName = document.getElementById("nickname")
testimonialSubmit.onclick = function (e) {
	e.preventDefault()
	if (testimonialContent.value == "" && testimonialName.value == "") {
		alert("Text area cannot be empty!!!")
		return
	} else if (testimonialName.value == "" && testimonialName.value == "") {
		alert("Nickname area cannot be empty!!!")
		return
	} else if (typeof testimonialContent.value && !isNaN(testimonialContent.value)) {
		alert("Content area cannot only contain number!!!")
		return
	} else if (typeof testimonialName.value && !isNaN(testimonialName.value)) {
		alert("Nickname area cannot only contain number!!!")
		return
	}
	let time = new Date()
	time_str = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
	let li = document.createElement("li")
	li.innerHTML = `<div style="font:italic bold 20px arial,sans-serif">${testimonialContent.value}</div></div>${testimonialName.value} post on ${time_str}&nbsp;&nbsp;&nbsp;&nbsp;<button onclick=delete_post() class="delete_post">Delete</button>`
	li.setAttribute("class","post");
	testimonialContent.value = '';
	testimonialName.value = '';
	if (testimonialUl.children.length > 0) {
		testimonialUl.insertBefore(li, testimonialUl.children[0]);
	} else {
		testimonialUl.appendChild(li);
	}
}

questionaire.onsubmit = function (e) {
	var radio = document.getElementsByName("one");
	for (i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var one = radio[i].value
		}
	}
	var radio = document.getElementsByName("two");
	for (i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var two = radio[i].value
		}
	}
	var checkbox = document.getElementsByName("three");
	var three = ''
	for (i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			three += checkbox[i].value;
		}
	}
	var radio = document.getElementsByName("four");
	for (i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var four = radio[i].value
		}
	}
	var radio = document.getElementsByName("five");
	for (i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			var five = radio[i].value
		}
	}
	if (one == undefined || two == undefined || three == undefined || four == undefined || five == undefined) {
		alert('You have unanswered questions.')
		e.preventDefault()
	}
	sessionStorage.setItem('quizz', `one=${one}&two=${two}&three=${three}&four=${four}&five=${five}`);
}
