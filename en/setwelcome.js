const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
    

  let canal = message.mentions.channels.first();
    if(!canal) return message.channel.send(":x: Debes poner mencionar el canal que quieres definir como bienvenida :x:")
    
    await db.set(`welcome-${message.guild.id}`, canal.id)
    let bien = await await db.fetch(`welcome-${message.guild.id}`)
    message.channel.send('Nuevo canal de bienvenida: <#'+bien+'>')
}