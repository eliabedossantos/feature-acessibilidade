// open sidebar
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
	else{
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
	case "6": 
		document.body.classList.add("dark");
		document.getElementById("darkMode").setAttribute("checked", "checked");
		break;
}

//Tamanho da fonte
var tamFont = window.sessionStorage.getItem("tamFonte");
var rangeFontTag = document.getElementById("tamFonte");

function tamDaFonte(){
	let tamanhoFonte = parseInt(document.querySelector('#tamFonte').value);
	tamFont = window.sessionStorage.setItem("tamFonte", tamanhoFonte);
		htmlTag.classList.remove("tamFont1");	
		htmlTag.classList.remove("tamFont2");
		htmlTag.classList.remove("tamFont3");
		if(tamanhoFonte == 1){
			htmlTag.classList.add("");
		}
		else if(tamanhoFonte == 2){
			htmlTag.classList.add("tamFont1");
		}
		else if(tamanhoFonte == 3){
			htmlTag.classList.add("tamFont2");
		}
		else if(tamanhoFonte == 4){
			htmlTag.classList.add("tamFont3");
		}


}

switch(tamFont){
	case "1": 
	htmlTag.classList.remove("tamFont1");	
	htmlTag.classList.remove("tamFont2");
	htmlTag.classList.remove("tamFont3");
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "2": 
	htmlTag.classList.remove("tamFont1");	
	htmlTag.classList.remove("tamFont2");
	htmlTag.classList.remove("tamFont3");
	htmlTag.classList.add("tamFont1");
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "3": 
	htmlTag.classList.remove("tamFont1");	
	htmlTag.classList.remove("tamFont2");
	htmlTag.classList.remove("tamFont3");
	htmlTag.classList.add("tamFont2");
	rangeFontTag.setAttribute("value", tamFont);
	break;
	case "4": 
	htmlTag.classList.remove("tamFont1");	
	htmlTag.classList.remove("tamFont2");
	htmlTag.classList.remove("tamFont3");
	htmlTag.classList.add("tamFont3");
	rangeFontTag.setAttribute("value", tamFont);
	break;

}


//espaçamento do texto
var tamEspacoTexto = window.sessionStorage.getItem("tamEspacoTexto");
var rangeEspacoTextoTag = document.getElementById("tamEspaco");
function espacoTexto(){
	let tamanhoEspaco = parseInt(document.querySelector('#tamEspaco').value);
	tamEspacoTexto = window.sessionStorage.setItem("tamEspacoTexto", tamanhoEspaco);
	htmlTag.classList.remove("espacoText1");	
	htmlTag.classList.remove("espacoText2");
	htmlTag.classList.remove("espacoText3");
	if(tamanhoEspaco == 1){
		htmlTag.classList.add("");
	}
	else if(tamanhoEspaco == 2){
		htmlTag.classList.add("espacoText1");
	}
	else if(tamanhoEspaco == 3){
		htmlTag.classList.add("espacoText2");
	}
	else if(tamanhoEspaco == 4){
		htmlTag.classList.add("espacoText3");
	}

}
 
switch(tamEspacoTexto){
	case "1": 
	htmlTag.classList.remove("espacoText1");	
	htmlTag.classList.remove("espacoText2");
	htmlTag.classList.remove("espacoText3");
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "2": 
	htmlTag.classList.remove("espacoText1");	
	htmlTag.classList.remove("espacoText2");
	htmlTag.classList.remove("espacoText3");
	htmlTag.classList.add("espacoText1");
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "3": 
	htmlTag.classList.remove("espacoText1");	
	htmlTag.classList.remove("espacoText2");
	htmlTag.classList.remove("espacoText3");
	htmlTag.classList.add("espacoText2");
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;
	case "4": 
	htmlTag.classList.remove("espacoText1");	
	htmlTag.classList.remove("espacoText2");
	htmlTag.classList.remove("espacoText3");
	htmlTag.classList.add("espacoText3");
	rangeEspacoTextoTag.setAttribute("value", tamEspacoTexto);
	break;

}


// Espaçamento das linhas
var tamEspacoLinhas = window.sessionStorage.getItem("tamEspacoLinhas");
var rangeEspacoLinhasTag = document.getElementById("tamEspacoLinhas");
function espacoLinhas(){
	let tamanhoEspacoLinhas = parseInt(document.querySelector('#tamEspacoLinhas').value);
	tamEspacoLinhas = window.sessionStorage.setItem("tamEspacoLinhas", tamanhoEspacoLinhas);
	htmlTag.classList.remove("espacoLine1");	
	htmlTag.classList.remove("espacoLine2");
	htmlTag.classList.remove("espacoLine3");
	if(tamanhoEspacoLinhas == 1){
		htmlTag.classList.add("");
	}
	else if(tamanhoEspacoLinhas == 2){
		htmlTag.classList.add("espacoLine1");
	}
	else if(tamanhoEspacoLinhas == 3){
		htmlTag.classList.add("espacoLine2");
	}
	else if(tamanhoEspacoLinhas == 4){
		htmlTag.classList.add("espacoLine3");
	}

}
 
switch(tamEspacoLinhas){
	case "1": 
	htmlTag.classList.remove("espacoLine1");	
	htmlTag.classList.remove("espacoLine2");
	htmlTag.classList.remove("espacoLine3");
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "2": 
	htmlTag.classList.remove("espacoLine1");	
	htmlTag.classList.remove("espacoLine2");
	htmlTag.classList.remove("espacoLine3");
	htmlTag.classList.add("espacoLine1");
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "3": 
	htmlTag.classList.remove("espacoLine1");	
	htmlTag.classList.remove("espacoLine2");
	htmlTag.classList.remove("espacoLine3");
	htmlTag.classList.add("espacoLine2");
	rangeEspacoLinhasTag.setAttribute("value", tamEspacoLinhas);
	break;
	case "4": 
	htmlTag.classList.remove("espacoLine1");	
	htmlTag.classList.remove("espacoLine2");
	htmlTag.classList.remove("espacoLine3");
	htmlTag.classList.add("espacoLine3");
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




