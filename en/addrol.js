const Discord = require("discord.js")

exports.run = async (client, message, args) => {
 
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No tienes el permiso `MANAGE_ROLES`.")
     let user = message.mentions.members.first()
    if(!user) return message.channel.send("Deves mencionar a alguien")
    let rol = message.mentions.roles.first();
    if(!rol) return message.channel.send("Debes mencionar un rol")
     let rolid = rol.id;
    if(!rolid) return message.channel.send("Deves poner el id del rol sin <@& y sin >")
     let mirol = message.guild.roles.get(rolid);
    user.addRole(mirol);
    message.channel.send("Ok " + user + "ahora tiene el rol <@&" + rolid + ">");
  }