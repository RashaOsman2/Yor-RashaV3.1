 const fs = require("fs");
module.exports.config = {
    name: "Mc voice",
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
		if (event.body.indexOf("Mc")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("madarteresa")==0 || event.body.indexOf("মাদারচোদ")==0 || event.body.indexOf("মাদারচোত")==0 || event.body.indexOf("motherfather")==0 || event.body.indexOf("MC")==0 || event.body.indexOf("Motherfather")==0 || event.body.indexOf("Motherboard")==0 || event.body.indexOf("motherboard")==0 ) {
		var msg = {
				body: "আমি ভালো মানুষ তাই গালিটা লেখলাম না, আমার বট এ ভয়েস এ বলে দিবো🐸",
				attachment: fs.createReadStream(__dirname + `/Nayan/20240112_170715_1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
