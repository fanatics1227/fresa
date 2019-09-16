// xD
const Discord = require('discord.js');
const bd = require('mega-dtbs');
exports.run = async (client, message, args) => {
let config_db = new bd.crearDB('config')

 let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
    
  }
  
message.reply(prefix)
} // Listo - By Defense :v esto lleva aquí hace mucho :v