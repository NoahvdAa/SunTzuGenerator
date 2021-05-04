var regenID = 0;

function regenQuote() {
	regenID++;
	var me = regenID;

	document.getElementById("processing").style.display = "block";
	document.getElementById("result").style.display = "none";
	document.getElementById("downloadButton").disabled = true;

	setTimeout(function () {
		if (regenID !== me) return;

		var quoteText = document.getElementById("quote").value;
		var nameText = document.getElementById("name").value;
		document.getElementById("quoteAsText").innerText = quoteText;
		document.getElementById("nameAsText").innerText = nameText;

		window.fitText(document.getElementById("quoteTextHolder"));
		window.fitText(document.getElementById("nameTextHolder"), 2);

		var container = document.getElementById("processingContainer");

		html2canvas(container, {
			windowWidth: container.scrollWidth,
			windowHeight: container.scrollHeight,
			backgroundColor: '#000000'
		}).then(function (canvas) {
			if (regenID !== me) return;
			var base64image = canvas.toDataURL("image/jpeg");
			document.getElementById("result").src = base64image;
			document.getElementById("result").style.display = "block";
			document.getElementById("processing").style.display = "none";
			document.getElementById("downloadButton").disabled = false;
		});
	}, 1000);
}

function download() {
	var a = document.createElement("a");
	a.href = document.getElementById("result").src;
	a.setAttribute("download", "suntzu.jpg");
	a.click();
}

regenQuote();