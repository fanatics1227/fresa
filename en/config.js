const Discord = require('discord.js')
const bd = require('mega-dtbs');
const db = require ('quick.db');


 
let warn = new bd.crearDB('warn')
let config_db = new bd.crearDB('config')
let bien_db = new bd.crearDB('bienvenida')
let logs_db = new bd.crearDB('logs')

exports.run = async (client, message, args) => {

     let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
    
  }
  
if(!args[0]){
  let embed = new Discord.RichEmbed()
  .setColor(3447003)
  .addField('🛠 Comandos de configuración 🛠','```css\n'+`${prefix}setlogs[#Canal]
${prefix}setprefix [Nuevo Prefix]
${prefix}setwelcome [#Canal]
${prefix}config reset`+'```')
  .addBlankField(true)
  message.channel.send(embed);
}
if(args[0] === "reset"){
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
  bien_db.eliminar(`${message.guild.id}`)
  config_db.eliminar(`${message.guild.id}`)
  logs_db.eliminar(`${message.guild.id}`)
  await db.delete(`welcome-${message.guild.id}`)
  message.channel.send("Se eliminaron todos los datos de este server")
}

}