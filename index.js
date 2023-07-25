let fs = require("fs");

fs.readFile("./channel.json", "utf8", function (err, data) {
	if (err) throw err;
	let jsonData = JSON.parse(data);
	let questions = [];
	let index = 1;
	jsonData.messages.forEach((message) => {
		if (message.poll) {
			questions.push(`${index}: ${message.poll.question}`);
			index++;
		}
	});

	let questionsStr = questions.join("\n");

	fs.writeFile("list of questions.md", questionsStr, function (err) {
		if (err) throw err;
		console.log("Questions saved!");
	});
});
