 const Discord = require("discord.js")

exports.run = async (client, message, args) => {

//message.channel.send(message.guild.roles.map(r=>r.name+' ID: '+r.id))
  const embed = new Discord.RichEmbed()
  .addField('Roles:', message.guild.roles.map(r=>r.name))
  message.channel.send(embed)
}