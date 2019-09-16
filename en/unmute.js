const Discord = require("discord.js")

exports.run = async (client, message, args) => {


if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes el permiso `MANAGE_MESSAGES`.")
  let user = message.mentions.members.first() || message.author;
  let role = message.guild.roles.find(r => r.name === "muted");
  if(!user){
  message.channel.send("Deves mencionar a alguien para unmute")
  }
  user.removeRole(role);
  message.channel.send(user + "Ha sido Desmutado!.");
}