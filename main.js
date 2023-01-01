const mineflayer = require('mineflayer')
var address = "localhost";	//서버 주소
var bots = [];
var server_port = 25565;    //서버포트(기본:25565)

function createBot() {
	let bot = mineflayer.createBot({
		host: address,
		username: `bot_${bots.length}`,
		viewDistance: "tiny",
        port: server_port
	});
	return(bot);
}

function ready() {
	bots.push(createBot());
	if (bots.length < 5) {
		setTimeout(ready, 10000);
	} else {
		bots[0].chat("Ready!");
		bot.on('chat', (username, message) => {
				if (message == "축하해") {
					do {
						bots[i].chat("Happy birthday!"+username);
						i += 1;
					} while (i < 5);
				} else return;
			}
		)
	}
}

ready();
