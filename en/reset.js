const Discord = require("discord.js")

exports.run = async (client, message, args) => { 

if(message.author.id !== "443224166611681311") return message.channel.send("**Dueño solo**");
message.channel.send("`Desconectado..`").then(() => {
    client.destroy().then(() => {
        process.exit();
    });
});

  }