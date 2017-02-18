var computerChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	

	var wins = 0;
	var losses = 0;
	
	

	document.onkeyup = function(event) {

		var userGuess = event.key;

        var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

        if ((userGuess === "A") || (userGuess === "B") || (userGuess === "C") || (userGuess === "D") || (userGuess === "E") || (userGuess === "F") || (userGuess === "G") || (userGuess === "H") || (userGuess === "I") || (userGuess === "J") || (userGuess === "K") || (userGuess === "L") || (userGuess === "M") || (userGuess === "N") || (userGuess === "O") || (userGuess === "P") || (userGuess === "Q") || (userGuess === "R") || (userGuess === "S") || (userGuess === "T") || (userGuess === "U") || (userGuess ==="V") || (userGuess === "W") || (userGuess === "X") || (userGuess === "Y") || (userGuess === "Z")){

        	if ((computerGuess === "A") && (userGuess !=="A"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "A") && (userGuess === "A")) {
        		wins++;
        	}

        	if ((computerGuess === "B") && (userGuess !== "B"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "B") && (userGuess === "B")) {
        		wins++;
        	}

        	if ((computerGuess === "C") && (userGuess !=="C"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "C") && (userGuess === "C")) {
        		wins++;
        	}

        	if ((computerGuess === "D") && (userGuess !=="D"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "D") && (userGuess === "D")) {
        		wins++;
        	}

        	if ((computerGuess === "E") && (userGuess !=="E"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "E") && (userGuess === "E")) {
        		wins++;
        	}

        	if ((computerGuess === "F") && (userGuess !=="F"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "F") && (userGuess === "F")) {
        		wins++;
        	}

        	if ((computerGuess === "G") && (userGuess !=="G"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "G") && (userGuess === "G")) {
        		wins++;
        	}

        	if ((computerGuess === "H") && (userGuess !=="H"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "H") && (userGuess === "H")) {
        		wins++;
        	}

        	if ((computerGuess === "I") && (userGuess !=="I"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "I") && (userGuess === "I")) {
        		wins++;
        	}

        	if ((computerGuess === "J") && (userGuess !=="J"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "J") && (userGuess === "J")) {
        		wins++;
        	}

        	if ((computerGuess === "K") && (userGuess !=="K"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "K") && (userGuess === "K")) {
        		wins++;
        	}

        	if ((computerGuess === "L") && (userGuess !=="L"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "L") && (userGuess === "L")) {
        		wins++;
        	}

        	if ((computerGuess === "M") && (userGuess !=="M"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "M") && (userGuess === "M")) {
        		wins++;
        	}

        	if ((computerGuess === "N") && (userGuess !=="N"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "N") && (userGuess === "N")) {
        		wins++;
        	}

        	if ((computerGuess === "O") && (userGuess !=="O"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "O") && (userGuess === "O")) {
        		wins++;
        	}

        	if ((computerGuess === "P") && (userGuess !=="P"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "P") && (userGuess === "P")) {
        		wins++;
        	}

        	if ((computerGuess === "Q") && (userGuess !=="Q"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "Q") && (userGuess === "Q")) {
        		wins++;
        	} 

        	if ((computerGuess === "R") && (userGuess === "R"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "R") && (userGuess === "R")) {
        		wins++;
        	}

        	if ((computerGuess === "S") && (userGuess !=="S"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "S") && (userGuess === "S")) {
        		wins++;
        	}

        	if ((computerGuess === "T") && (userGuess !=="T"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "T") && (userGuess === "T")) {
        		wins++;
        	}

        	if ((computerGuess === "U") && (userGuess !=="U"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "U") && (userGuess === "U")) {
        		wins++;
        	}

        	if ((computerGuess === "V") && (userGuess !=="V"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "V") && (userGuess === "V")) {
        		wins++;
        	}

        	if ((computerGuess === "W") && (userGuess !=="W"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "W") && (userGuess === "W")) {
        		wins++;
        	}

        	if ((computerGuess === "X") && (userGuess !=="X"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "X") && (userGuess === "X")) {
        		wins++;
        	}

        	if ((computerGuess === "Y") && (userGuess !=="Y"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "Y") && (userGuess === "Y")) {
        		wins++;
        	}

        	if ((computerGuess === "Z") && (userGuess !=="Z"))
        	{
        		losses++;
        		guessesLeft--;
        	}

        	else if ((computerGuess === "Z") && (userGuess === "Z")) {
        		wins++;
        	}


        	

        	var html = "<P> Guess what letter I'm thinking of!</p>" +
        	"<p>wins: " + wins + "</p>" +
        	"<P> losses: " + losses + "</p>" +
        	"<p> Your gusses so far: " + userGuess + "</p>";

        	document.querySelector("#psychic").innerHTML = html;
        }

	};