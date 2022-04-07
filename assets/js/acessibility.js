// abrir sidebar
const sideBar  =  document.getElementById('acessibilidade');
function openAcess(){
	sideBar.classList.add("active");
}
function closeAcess(){
	sideBar.classList.remove("active");
}

// CONTRAST
const htmlTag = document.querySelector("html");
var stateContrast = window.sessionStorage.getItem("contrast");
var radioButtons = document.getElementsByName("contraste");
var logo = document.querySelector("#logo");
function radioContrast(){
	htmlTag.removeAttribute("class");
	document.body.removeAttribute("class");
	if(radioButtons[0].checked){
		htmlTag.classList.add("contrast_preto_branco_amarelo");
		stateContrast = window.sessionStorage.setItem("contrast", "1");
		logo.removeAttribute("src");
		logo.setAttribute("src", "assets/img/logo-white.png");
	}
	else if(radioButtons[1].checked){
		htmlTag.classList.add("contrast_preto_branco");
		stateContrast = window.sessionStorage.setItem("contrast", "3");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
	}
	else if(radioButtons[2].checked){
		htmlTag.classList.add("contrast_aumentar_contraste");
		stateContrast = window.sessionStorage.setItem("contrast", "2");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
	}
	else if(radioButtons[3].checked){
		htmlTag.classList.add("contrast_preto_branco_invertida");
		stateContrast = window.sessionStorage.setItem("contrast", "4");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
	}
	else if(radioButtons[4].checked){
		htmlTag.classList.add("contrast_inverter_cor");
		stateContrast = window.sessionStorage.setItem("contrast", "5");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
	}
	else if(radioButtons[5].checked){
		document.body.classList.add("dark");
		stateContrast = window.sessionStorage.setItem("contrast", "6");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-white.png');
	}
	else if(radioButtons[6].checked){
		htmlTag.removeAttribute("class");
		document.body.removeAttribute("class");
		stateContrast = window.sessionStorage.setItem("contrast", "0");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');

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
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
		break;
	case "1": 
		htmlTag.classList.add("contrast_preto_branco_amarelo");
		document.getElementById("autocontraste").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute("src", "assets/img/logo-white.png");
		break;
	case "2": 
		htmlTag.classList.add("contrast_aumentar_contraste");
		document.getElementById("aumentarContraste").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
		break;
	case "3": 
		htmlTag.classList.add("contrast_preto_branco");
		document.getElementById("monocromatico").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
		break;
	case "4": 
		htmlTag.classList.add("contrast_preto_branco_invertida");
		document.getElementById("cinzaInvetido").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
		break;
	case "5": 
		htmlTag.classList.add("contrast_inverter_cor");
		document.getElementById("corInvertida").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute('src', 'assets/img/logo-revo.png');
		break;
	case "6": 
		document.body.classList.add("dark");
		document.getElementById("darkMode").setAttribute("checked", "checked");
		logo.removeAttribute("src");
		logo.setAttribute("src", "assets/img/logo-white.png");
		break;
}

//Tamanho da fonte
var tamFont = window.sessionStorage.getItem("tamFonte");
var rangeFontTag = document.getElementById("tamFonte");

function tamDaFonte(){
	let tamanhoFonte = parseInt(document.querySelector('#tamFonte').value);
	tamFont = window.sessionStorage.setItem("tamFonte", tamanhoFonte);
		htmlTag.classList.remove("tamFont"+'1');	
		htmlTag.classList.remove("tamFont"+'2');
		htmlTag.classList.remove("tamFont"+'3');
		if(tamanhoFonte == 1){
			htmlTag.classList.add("");
		}
		else if(tamanhoFonte == 2){
			htmlTag.classList.add("tamFont"+'1');
		}
		else if(tamanhoFonte == 3){
			htmlTag.classList.add("tamFont"+'2');
		}
		else if(tamanhoFonte == 4){
			htmlTag.classList.add("tamFont"+'3');
		}


}

switch(tamFont){
	case "1": 
	htmlTag.classList.remove("tamFont"+'1');	
	htmlTag.classList.remove("tamFont"+'2');
	htmlTag.classList.remove("tamFont"+'3');
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "2": 
	htmlTag.classList.remove("tamFont"+'1');	
	htmlTag.classList.remove("tamFont"+'2');
	htmlTag.classList.remove("tamFont"+'3');
	htmlTag.classList.add("tamFont"+'1');
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "3": 
	htmlTag.classList.remove("tamFont"+'1');	
	htmlTag.classList.remove("tamFont"+'2');
	htmlTag.classList.remove("tamFont"+'3');
	htmlTag.classList.add("tamFont"+'2');
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "4": 
	htmlTag.classList.remove("tamFont"+'1');	
	htmlTag.classList.remove("tamFont"+'2');
	htmlTag.classList.remove("tamFont"+'3');
	htmlTag.classList.add("tamFont"+'3');
	rangeFontTag.setAttribute("value", tamFont);
	break;

}


//espaçamento do texto
var tamEspacoTexto = window.sessionStorage.getItem("tamEspacoTexto");
var rangeEspacoTextoTag = document.getElementById("tamEspaco");
function espacoTexto(){
	let tamanhoEspaco = parseInt(document.querySelector('#tamEspaco').value);
	tamEspacoTexto = window.sessionStorage.setItem("tamEspacoTexto", tamanhoEspaco);
	htmlTag.classList.remove("espacoText"+'1');	
	htmlTag.classList.remove("espacoText"+'2');
	htmlTag.classList.remove("espacoText"+'3');
	if(tamanhoEspaco == 1){
		htmlTag.classList.add("");
	}
	else if(tamanhoEspaco == 2){
		htmlTag.classList.add("espacoText"+'1');
	}
	else if(tamanhoEspaco == 3){
		htmlTag.classList.add("espacoText"+'2');
	}
	else if(tamanhoEspaco == 4){
		htmlTag.classList.add("espacoText"+'3');
	}

}
 
switch(tamEspacoTexto){
	case "1": 
	htmlTag.classList.remove("espacoText"+'1');	
	htmlTag.classList.remove("espacoText"+'2');
	htmlTag.classList.remove("espacoText"+'3');
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "2": 
	htmlTag.classList.remove("espacoText"+'1');	
	htmlTag.classList.remove("espacoText"+'2');
	htmlTag.classList.remove("espacoText"+'3');
	htmlTag.classList.add("espacoText"+'1');
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "3": 
	htmlTag.classList.remove("espacoText"+'1');	
	htmlTag.classList.remove("espacoText"+'2');
	htmlTag.classList.remove("espacoText"+'3');
	htmlTag.classList.add("espacoText"+'2');
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "4": 
	htmlTag.classList.remove("espacoText"+'1');	
	htmlTag.classList.remove("espacoText"+'2');
	htmlTag.classList.remove("espacoText"+'3');
	htmlTag.classList.add("espacoText"+'3');
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;

}


// Espaçamento das linhas
var tamEspacoLinhas = window.sessionStorage.getItem("tamEspacoLinhas");
var rangeEspacoLinhasTag = document.getElementById("tamEspacoLinhas");
function espacoLinhas(){
	let tamanhoEspacoLinhas = parseInt(document.querySelector('#tamEspacoLinhas').value);
	tamEspacoLinhas = window.sessionStorage.setItem("tamEspacoLinhas", tamanhoEspacoLinhas);
	htmlTag.classList.remove("espacoLine"+'1');	
	htmlTag.classList.remove("espacoLine"+'2');
	htmlTag.classList.remove("espacoLine"+'3');
	if(tamanhoEspacoLinhas == 1){
		htmlTag.classList.add("");
	}
	else if(tamanhoEspacoLinhas == 2){
		htmlTag.classList.add("espacoLine"+'1');
	}
	else if(tamanhoEspacoLinhas == 3){
		htmlTag.classList.add("espacoLine"+'2');
	}
	else if(tamanhoEspacoLinhas == 4){
		htmlTag.classList.add("espacoLine"+'3');
	}

}
 
switch(tamEspacoLinhas){
	case "1": 
	htmlTag.classList.remove("espacoLine"+'1');	
	htmlTag.classList.remove("espacoLine"+'2');
	htmlTag.classList.remove("espacoLine"+'3');
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "2": 
	htmlTag.classList.remove("espacoLine"+'1');	
	htmlTag.classList.remove("espacoLine"+'2');
	htmlTag.classList.remove("espacoLine"+'3');
	htmlTag.classList.add("espacoLine"+'1');
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "3": 
	htmlTag.classList.remove("espacoLine"+'1');	
	htmlTag.classList.remove("espacoLine"+'2');
	htmlTag.classList.remove("espacoLine"+'3');
	htmlTag.classList.add("espacoLine"+'2');
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "4": 
	htmlTag.classList.remove("espacoLine"+'1');	
	htmlTag.classList.remove("espacoLine"+'2');
	htmlTag.classList.remove("espacoLine"+'3');
	htmlTag.classList.add("espacoLine"+'3');
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;

}



// Destacar links
var destacarLink = window.sessionStorage.getItem("DestacarLinks");
var checkboxDestacarTag = document.getElementById("destacar-link");
function destacarLinks(){
	let checkbox = document.getElementById('destacar-link');
	if(checkbox.checked) {
    	htmlTag.classList.add("destacarLink");
		destacarLink = window.sessionStorage.setItem("DestacarLinks", 1)
		
	} else {
    	htmlTag.classList.remove("destacarLink");
		destacarLink = window.sessionStorage.setItem("DestacarLinks", 0)
	}
}
if(destacarLink == 1){
	htmlTag.classList.add("destacarLink");
	checkboxDestacarTag.setAttribute("checked", "checked");
}
else{
	htmlTag.classList.remove("destacarLink");
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




