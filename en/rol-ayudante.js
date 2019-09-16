const Discord = require("discord.js")

exports.run = async (client, message, args) => {   
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
    message.guild.createRole({
    name: "Ayudante",
    color: "#97f3ba",
    position: 4,
    hoist: true,
    permissions: 1341652435,
    mentionable: true
    })
    message.reply(' el rol aydante a sido creado')
}