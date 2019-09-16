const Discord = require("discord.js")
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {

let userm = message.mentions.users.first();
if(!userm) return message.channel.send("Debes mencionar a quien vaz a abrazar")

let razon = args.join(" ").slice(22);
if(!razon){
    
const embed = new Discord.RichEmbed()
.addField(message.author.username+" ha abrazado a:", userm)
.setImage(fresa.hug())
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)


    
message.channel.send(embed)
  } else {
  const embed = new Discord.RichEmbed()
.addField(message.author.username+" ha abrazado a:", userm)
.addField("Razon:", razon)
.setImage(fresa.hug())
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)


    
message.channel.send(embed)
  }

}
