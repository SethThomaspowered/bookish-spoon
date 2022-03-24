const http = require("https");

const options = {
	"method": "GET",
	"hostname": "dad-jokes.p.rapidapi.com",
	"port": null,
	"path": "/random/joke",
	"headers": {
		"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
		"X-RapidAPI-Key": "75edbf7044msh93dfb15fb9cc4eap17f8e3jsn8859a5a1dbe8",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();