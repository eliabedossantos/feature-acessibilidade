// CONTRAST
const htmlTag = document.querySelector("html");
var stateContrast = window.sessionStorage.getItem("contrast");
var radioButtons = document.getElementsByName("contraste");
console.log(radioButtons)
function radioContrast(){
	htmlTag.removeAttribute("class");
	document.body.removeAttribute("class");
	if(radioButtons[0].checked){
		htmlTag.classList.add("contrast_preto_branco_amarelo");
		stateContrast = window.sessionStorage.setItem("contrast", "1");
	}
	else if(radioButtons[1].checked){
		htmlTag.classList.add("contrast_preto_branco");
		stateContrast = window.sessionStorage.setItem("contrast", "3");
	}
	else if(radioButtons[2].checked){
		htmlTag.classList.add("contrast_aumentar_contraste");
		stateContrast = window.sessionStorage.setItem("contrast", "2");
	}
	else if(radioButtons[3].checked){
		htmlTag.classList.add("contrast_preto_branco_invertida");
		stateContrast = window.sessionStorage.setItem("contrast", "4");
	}
	else if(radioButtons[4].checked){
		htmlTag.classList.add("contrast_inverter_cor");
		stateContrast = window.sessionStorage.setItem("contrast", "5");
	}
	else if(radioButtons[5].checked){
		document.body.classList.add("dark");
		stateContrast = window.sessionStorage.setItem("contrast", "6");
	}
	else if(radioButtons[6].checked){
		htmlTag.removeAttribute("class");
		document.body.removeAttribute("class");
		stateContrast = window.sessionStorage.setItem("contrast", "0");
	}
}

/**
 * o trecho de codigo abaixo retorna o valor do contraste que o usuario escolheu em uma das seções e retorna o valor armazenado em sessionStorage
 */

switch(stateContrast){
	case "0": 
		htmlTag.removeAttribute("class");
		document.body.removeAttribute("class");
		document.getElementById("nenhumContraste").setAttribute("checked", "checked");
		break;
	case "1": 
		htmlTag.classList.add("contrast_preto_branco_amarelo");
		document.getElementById("autocontraste").setAttribute("checked", "checked");
		break;
	case "2": 
		htmlTag.classList.add("contrast_aumentar_contraste");
		document.getElementById("aumentarContraste").setAttribute("checked", "checked");
		break;
	case "3": 
		htmlTag.classList.add("contrast_preto_branco");
		document.getElementById("monocromatico").setAttribute("checked", "checked");
		break;
	case "4": 
		htmlTag.classList.add("contrast_preto_branco_invertida");
		document.getElementById("cinzaInvetido").setAttribute("checked", "checked");
		break;
	case "5": 
		htmlTag.classList.add("contrast_inverter_cor");
		document.getElementById("corInvertida").setAttribute("checked", "checked");
		break;
	case "5": 
		document.body.classList.add("dark");
		document.getElementById("darkMode").setAttribute("checked", "checked");
		break;
}

//Tamanho da fonte
var tamFont = window.sessionStorage.getItem("tamFonte");
var rangeFontTag = document.getElementById("tamFonte");
function tamDaFonte(){
	let tamanhoFonte = parseInt(document.querySelector('#tamFonte').value);
	document.body.style.fontSize=tamanhoFonte+"px";
	tamFont = window.sessionStorage.setItem("tamFonte", tamanhoFonte);
}
if(tamFont != 16){
	document.body.style.fontSize=tamFont+"px";
	rangeFontTag.setAttribute("value", tamFont)
}


//espaçamento do texto
var tamEspacoTexto = window.sessionStorage.getItem("tamEspacoTexto");
var rangeEspacoTextoTag = document.getElementById("tamEspaco");
function espacoTexto(){
	let tamanhoEspaco = parseInt(document.querySelector('#tamEspaco').value);
	document.body.style.letterSpacing=tamanhoEspaco+"px";
	tamEspacoTexto = window.sessionStorage.setItem("tamEspacoTexto", tamanhoEspaco);
}
if(tamEspacoTexto != 1){
	document.body.style.letterSpacing=tamEspacoTexto+"px";
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
}

// Espaçamento das linhas
var tamEspacoLinhas = window.sessionStorage.getItem("tamEspacoLinhas");
var rangeEspacoLinhasTag = document.getElementById("tamEspacoLinhas");
function espacoLinhas(){
	let tamanhoEspacoLinhas = parseInt(document.querySelector('#tamEspacoLinhas').value);
	document.body.style.lineHeight=tamanhoEspacoLinhas+"px";
	tamEspacoLinhas = window.sessionStorage.setItem("tamEspacoLinhas", tamanhoEspacoLinhas);
}
if(tamEspacoLinhas != 20){
	document.body.style.lineHeight=tamEspacoLinhas+"px";
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
}

// //  cor background body
// function corBackgroundBody(){
// 	let corBackground = document.querySelector('#corBackground').value;
// 	document.body.style.backgroundColor=corBackground;
// }

// //	cor Texto body
// function corTextoBody(){
// 	let corTexto = document.querySelector('#corTexto').value;
// 	document.body.style.color=corTexto;
// 	document.querySelector("h1").style.color = corTexto;
// 	document.querySelector("h2").style.color = corTexto;
// 	document.querySelector("h3").style.color = corTexto;
// 	document.querySelector("h4").style.color = corTexto;
// 	document.querySelector("h5").style.color = corTexto;
// 	document.querySelector("h6").style.color = corTexto;
// 	document.querySelector("p").style.color = corTexto;
// 	document.querySelector("small").style.color = corTexto;
// 	document.querySelector("label").style.color = corTexto;
// 	document.querySelector("strong").style.color = corTexto;
// 	document.querySelector("b").style.color = corTexto;
// 	document.querySelector("em").style.color = corTexto;
// 	document.querySelector("span").style.color = corTexto;
// 	document.querySelector("a").style.color = corTexto;
// }

// Destacar links
var destacarLink = window.sessionStorage.getItem("DestacarLinks");
var checkboxDestacarTag = document.getElementById("destacar-link");
function destacarLinks(){
	let checkbox = document.getElementById('destacar-link');
	if(checkbox.checked) {
    	document.querySelector("body").style.color = "#ff0000";
    	document.querySelector("body").style.textDecoration = "underline";
		document.querySelector("body").style.fontSize = 1.3+"em"
		destacarLink = window.sessionStorage.setItem("DestacarLinks", 1)
		
	} else {
    	document.querySelector("body").style.color = "";
    	document.querySelector("body").style.textDecoration = "";
		document.querySelector("body").style.fontSize = ""
		destacarLink = window.sessionStorage.setItem("DestacarLinks", 0)
	}
}
if(destacarLink == 1){
	document.querySelector("body").style.color = "#ff0000";
    document.querySelector("body").style.textDecoration = "underline";
	document.querySelector("body").style.fontSize = 1.3+"em"
	checkboxDestacarTag.setAttribute("checked", "checked");
}
else{
	document.querySelector("body").style.color = "";
	document.querySelector("body").style.textDecoration = "";
	document.querySelector("body").style.fontSize = ""
}

// fonte legivel
var fonteLegivelStorage = window.sessionStorage.getItem("fonteLegivel");
var checkboxLegivelTag = document.getElementById("fonte_legivel");
function fonteLegivel(){
	let checkbox = document.getElementById('fonte_legivel');
	if(checkbox.checked) {
    	document.body.style.fontFamily = "Arial"
		document.body.style.fontWeight = "500"
		fonteLegivelStorage = window.sessionStorage.setItem("fonteLegivel", 1)
	}
	else {
    	document.body.style.fontFamily = ""
		document.body.style.fontWeight = ""
		fonteLegivelStorage = window.sessionStorage.setItem("fonteLegivel", 0)
	}
}
if(fonteLegivelStorage == 1){
	document.body.style.fontFamily = "Arial"
	document.body.style.fontWeight = "500"
	checkboxLegivelTag.setAttribute("checked", "checked");
}
else{
	document.body.style.fontFamily = ""
	document.body.style.fontWeight = ""
}


//LUPA
var lupa = window.sessionStorage.getItem("lupa");
var checkboxLupaTag = document.getElementById("lupa");
function zoom_page(){
	let checkbox = document.getElementById('lupa');
	if(checkbox.checked) {
    	document.body.style.zoom = 1.3;
		lupa = window.sessionStorage.setItem("lupa", 1);
	} else {
		document.body.style.zoom = 1;
		lupa = window.sessionStorage.setItem("lupa", 0);
	}
}
if(lupa == 1){
	document.body.style.zoom = 1.3;
	checkboxLupaTag.setAttribute("checked", "checked");
}
else{
	document.body.style.zoom = 1;
}



// sidebar
function sizeOfThings(){
	var windowWidth = window.innerWidth;
	return windowWidth;
};
  
function openNav() {
	document.getElementById("btn-acess").style.zIndex = "0"
	if(sizeOfThings() <= 750){
		document.getElementById("sidebar__header-title").style.fontSize = "2rem"
		document.getElementById("mySidenav").style.width = "90%";
	}
	else{
		document.getElementById("mySidenav").style.width = "40%";
	}
}
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}



