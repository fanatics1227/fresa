const Discord = require('discord.js');
const fresa = require('fresaapi');

exports.run = async (client, message, args) => {
  let userM = message.mentions.users.first();
 if(!userM) return message.reply("Debes menconar a alguien") 
  
  const embed = new Discord.RichEmbed()
  .setDescription('**'+message.author.username+ ' a besado a '+ userM.username+'**')
  .setImage(fresa.kiss())
  .setColor("RANDOM")
  
  message.channel.send(embed)

}
 
