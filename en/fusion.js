 const Discord = require("discord.js")
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {


let userM = message.mentions.users.first();
  if(!userM) return message.reply(' debes poner con quien fusionarte')
  
let first = Math.round(message.author.username.length / 2)
let first_half = message.author.username.slice(0, first)
let second = Math.round(message.mentions.users.first().username.length / 2)
let second_half = message.mentions.users.first().username.slice(second)
let finalname = first_half + second_half
 

  
  let user = message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(user.username, user.avatarURL)
  .addField('**' + user.username + '** Se ha fusionado', 'con **'+userM.username+'**')
  .addField('Fusion:', finalname)
  .setTimestamp()
  .setImage(fresa.fusion())
  .setColor("RANDOM")
  .setFooter('Gracias a: Esponjosin por la ayuda con el comando ')
  message.channel.send(embed)
}