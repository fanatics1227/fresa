 const Discord = require("discord.js")

exports.run = async (client, message, args) => {
if(message.author.id !== '443224166611681311') return message.channel.send('El comando no existe o se encuentra dañado pon `f!help` para ver los comandos')
message.channel.send(client.guilds.map(r=>r.name+' ID: '+r.id))
}