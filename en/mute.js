const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tienes el permiso `MANAGE_MESSAGES`.")
 let user = message.mentions.members.first() || message.author;
    if(!user) return message.reply("Menciona aun usuario");

       let razon = args.join(" ").slice(22);
    if(!razon) return message.reply("Pon un razon");

    let role = message.guild.roles.find(r => r.name === "muted");
      if (!role) {
      message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions: 1115136 
    }).then(r => {
      user.addRole(r)
      
        message.guild.channels.forEach(canal => {
        canal.overwritePermissions(r, {
        SEND_MESSAGES: false
        })
        })
        })
        
      message.channel.send(user + "Has sido muteado por `" + razon + "`")
      } else {
      user.addRole(role);
      message.channel.send(user + "Has sido muteado por `" + razon+ "`")
        
        message.guild.channels.forEach(canal => {
        canal.overwritePermissions(role, {
        SEND_MESSAGES: false
        })
        }) 
      }
}