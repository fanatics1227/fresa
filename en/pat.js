const Discord = require("discord.js")
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {
    let userm = message.mentions.users.first()
    if(!userm) return message.reply(" Debes mencionar a alguien")
   let embed = new Discord.RichEmbed()
  .addField(message.author.username + " le a echo cariño a", userm)
  .setImage(fresa.pat())
  .setColor("RANDOM")
  message.channel.send(embed) 
}