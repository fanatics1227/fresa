const Discord = require("discord.js")

exports.run = async (client, message, args) => {
let userM = message.mentions.users.first();
let userMID = client.guild.users.get(userM.id);
if(!userM){
  let user = message.author;
  let userID = client.guild.users.get(user.id);
  
  let embed = new Discord.RichEmbed()
  .setTitle("Informacion de: "+ user.username)
  .setColor("RANDOM")
  .addField("Usuario:", user.username+"#"+user.discriminator+" ("+user.id+")")
  .addField('Bot?', user.bot)
}


}