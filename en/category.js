 const Discord = require("discord.js")

exports.run = async (client, message, args) => { 
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: No tienes el permiso `MANAGE_CHANNELS`.")
  let cate = args.join(" ");
    if(!cate) return message.channel.send(":x: debes poner el nombre de la categoria f!category [nombre de la categoria]")
    
  message.guild.createChannel(cate, 'category')
    message.channel.send("Nueva categoria " + cate)
}