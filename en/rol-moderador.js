const Discord = require("discord.js")

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
    message.guild.createRole({
    name: "Moderador",
    color: "#ffd300",
    position: 5,
    hoist: true,
    permissions: 1610087895,
    mentionable: true
    })
    message.channel.send('ok el rol Moderador ha sido creado')
}