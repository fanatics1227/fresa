const Discord = require("discord.js")
const bd = require('mega-dtbs');
 let config_db = new bd.crearDB('config')
exports.run = async (client, message, args) => {
   let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
  }
let embed = new Discord.RichEmbed()
  .setTitle("Fresa Bot")
  .addField("Dueño", "<@443224166611681311>")
  .addField("Nombre", "<@538023638587408415>", true)
  .addField("Prefix", "`"+prefix+"`", false)
  .addField("Memoria", "NOSE", true)
  .addField("Libreria", "discord.js", false)
  .addField("Verción", "1.0.0 [BETA]", true)
  
  message.channel.send(embed);
}