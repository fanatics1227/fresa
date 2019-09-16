const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes el permiso `BAN_MEMBERS`.")
let id = args.join(" ")
if(!id) return message.reply(' debes poner el id del baneado')
  
let user = client.users.get(id)  
message.guild.ban(id)
  
  message.channel.send(' Has baneado a '+ user.username + " Por ID")
}