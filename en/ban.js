const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes el permiso `BAN_MEMBERS`.")
    let ban = message.mentions.users.first();
    if(!ban) return message.reply("Debes mencionar a alguien")
    let Razon = args.join(" ").slice(22);
    if(!Razon) return message.reply("Debes poner una razon");
    
 // if(ban.bannable !== false) return message.reply("No puedo banear a este usuario debes poner mi rol por encima de su rol más alto para banearlo")
  
    message.guild.member(ban).ban(Razon)
  .then(ban => {
      message.channel.send("Ok " + ban + " a sido banneado Razon: " + Razon);
    }).catch(error => {
        message.channel.send(`¡UPS! Ha ocurrido un error: ${error.message}`)
      })
  	
}