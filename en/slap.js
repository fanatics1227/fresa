const Discord = require("discord.js")
const node_superfetch = require('superagent');
const fresa = require('fresaapi');
exports.run = async (client, message, args) => {

let userm = message.mentions.users.first();
    if(!userm) return message.channel.send("Debes mencionar a quien vaz a golpear")
    let Razon = args.join(" ").slice(22);
    if(!Razon) {
        

  const embed = new Discord.RichEmbed()
.addField(message.author.username + ' Ha golpeado a :', userm)
.addField('Razon:', 'Se le da la gana')
.setImage(fresa.slap())
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)

  
message.channel.send(embed)
    }


  const embed = new Discord.RichEmbed()
.addField(message.author.username + ' Ha golpeado a :', userm)
.addField('Razon:', Razon)
.setImage(fresa.slap())
.setColor("RANDOM")
.setAuthor(message.author.username, message.author.avatarURL)

  
message.channel.send(embed)
}