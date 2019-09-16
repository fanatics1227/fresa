const Discord = require("discord.js")
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {
  
  if(!message.mentions.users.first()) {
  let por = args.join(" ");
  if(!por){
  let user = message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(user.username, user.avatarURL)
  .addField('**' + user.username + '** esta llorando', 'porque *Se le da la gana*')
  .setTimestamp()
  .setImage(fresa.cry())
  .setColor("RANDOM")
  message.channel.send(embed)
          } else {
  let user = message.author;
  let embed = new Discord.RichEmbed()
  .setAuthor(user.username, user.avatarURL)
  .addField('**' + user.username + '** esta llorando', 'porque *' + por + '*')
  .setTimestamp()
  .setImage(fresa.cry())
  .setColor("RANDOM")
  message.channel.send(embed)
  }
  }
}