var code = 'x';

function guess() {
	if(answer == 'x') {
		codeGenerator();
	}
}

function codeGenerator() {
	answer = randomNum(0,9999).toString();
	while(answer.length < 4) {
		answer = '0' + answer;
	}
}
	
function randomNum(x,y) {
	return(Math.floor(Math.random() * y) + x);
}
