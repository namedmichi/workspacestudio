var counterText;
var html;
var css;
var js;
var ts;
var htmlChars;
var cssChars;
var jsChars;
var tsChars;
var htmlWords;
var cssWords;
var tsWords;
var jsWords;
var htmlLines;
var cssLines;
var tsLines;

var jsLines;
fetch('CounterFile.txt')
	.then((response) => response.text())
	.then((text) => (counterText = text))
	.then((text) => {
		counterText = counterText.split(';');
		console.log(counterText);
		console.log(typeof counterText);
		var lenght = counterText.length;
		html = counterText[lenght - 7];
		css = counterText[lenght - 6];
		js = counterText[lenght - 5];
		ts = counterText[lenght - 4];

		console.log(html);
		html = html.split(' ');
		css = css.split(' ');
		js = js.split(' ');
		ts = ts.split(' ');
		console.log(css[0].substring(1));
		console.log(js);
		htmlChars = html[0];
		htmlWords = html[3];
		htmlLines = html[6];
		cssChars = css[0].substring(1);
		cssWords = css[3];
		cssLines = css[6];
		jsChars = js[0].substring(1);
		jsWords = js[3];
		jsLines = js[6];
		tsChars = ts[0].substring(1);
		tsChars = ts[0];
		tsWords = ts[3];
		tsLines = ts[6];
		document.getElementById('htmlChars').innerHTML += htmlChars;
		document.getElementById('htmlWords').innerHTML += htmlWords;
		document.getElementById('htmlLines').innerHTML += htmlLines;
		document.getElementById('cssChars').innerHTML += cssChars;
		document.getElementById('cssWords').innerHTML += cssWords;
		document.getElementById('cssLines').innerHTML += cssLines;
		document.getElementById('jsChars').innerHTML += jsChars;
		document.getElementById('jsWords').innerHTML += jsWords;
		document.getElementById('jsLines').innerHTML += jsLines;
		document.getElementById('tsChars').innerHTML += tsChars;
		document.getElementById('tsWords').innerHTML += tsWords;
		document.getElementById('tsLines').innerHTML += tsLines;
	});
