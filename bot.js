const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("597773905112858674")
setInterval(function() {
channel.send(`I know what do I do`);
}, 30)
})

client.login(process.env.BOT_TOKEN);