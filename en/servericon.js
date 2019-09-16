const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let server = message.guild;
  
  let embed = new Discord.RichEmbed()
  .addField('Imagen del servidor', server)
 .setImage(server.iconURL)
.setColor("RANDOM")
  message.channel.send(embed)
}