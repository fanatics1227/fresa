const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let autor = message.author;
    message.react("👋")
     message.channel.send("Hola " + autor + " que tal?");
}