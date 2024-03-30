module.exports.config = {
    name: "speedtest",
    version: "1.0.0",
    permssion: 0,
    credits: "Rasha",
    description: "Thêm người dùng vào nhóm bằng link hoặc UID",
  prefix: true,
    category: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {

	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"" + 
			"Speed: " + resault + " Mbps",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Can't speedtest right now please try again later", event.threadID, event.messageID);
	}
}
