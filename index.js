const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "!";
bot.on("ready", async () =>{
console.log(`${bot.user.username} = online`)
});
bot.on("message", async message =>{
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    if (command === "!embed") {
            // Makes an Embed command
        var embed = new discord.RichEmbed()
            .setColor("#2fcebe")
            .setDescription(message.content.slice(6));
    }
        });
    bot.login("process.env.token");
