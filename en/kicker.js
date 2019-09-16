const Discord = require("discord.js")

exports.run = async (client, message, args) => {

 
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No tienes el permiso `KICK_MEMBERS`.")

message.mentions.users.forEach((r) => {
message.channel.send(r)
})
}