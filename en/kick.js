const Discord = require("discord.js")

exports.run = async (client, message, args) => {

 
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No tienes el permiso `KICK_MEMBERS`.")
  let user = message.mentions.users.first();
  let Razon = args.join(" ").slice(22);
   if(!user) return message.reply("Debes mencionar a alguien")
   if(!Razon)return message.reply("Debes poner una razon")
   message.guild.member(user).kick(Razon)
      .then(kick => {
  message.channel.send("ok " + user + " a sido pateado del servidor");
   }).catch(error => {
       message.channel.send(`¡UPS! Ha ocurrido un error: ${error.message}`) 
   })
}