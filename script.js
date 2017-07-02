var code = 'x';

function init() {
	codeGenerator();
}

function guess() {
/*	if(answer == 'x') {
		codeGenerator();
	}*/
}

function codeGenerator() {
	code = randomNum(0,9999).toString();
	while(code.length < 4) {
		code = '0' + code;
	}
	document.getElementById('answer').value = code;
}
	
function randomNum(x,y) {
	return(Math.floor(Math.random() * y) + x);
}
