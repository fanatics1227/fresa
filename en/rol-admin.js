const Discord = require("discord.js")

exports.run = async (client, message, args) => { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
    message.guild.createRole({
    name: "Administrador",
    color: "#FF0000",
    position: 6,
    hoist: true,
    permissions: 2146958847,
    mentionable: true
    })

    message.channel.send('ok el rol Administrador ha sido creado')
}