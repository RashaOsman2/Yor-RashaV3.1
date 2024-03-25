 const fs = require("fs");
module.exports.config = {
    name: "AraAra",
    version: "1.0.0",
    permssion: 0,
    credits: "Rasha",
    description: "emoji",
  prefix: true,
    category: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};

module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ara")==0 || event.body.indexOf("Ara ara")==0 || event.body.indexOf("ara ara")==0 || event.body.indexOf("Ara")==0) {
		var msg = {
				body: "Ara ara (あら あら)",
				attachment: fs.createReadStream(__dirname + `/Nayan/download.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
