const Discord = require("discord.js")
const bd = require('mega-dtbs');
let config_db = new bd.crearDB('config')

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes el permiso `ADMINISTRADOR`.")
    let pref = args.join(" ");
    if(!pref) return message.reply("Escribe el nuevo prefix")
    
    config_db.agregar(`${message.guild.id}`, `${pref}`)
    
    message.channel.send('El prefix se cambio a: '+ pref)
}
// uk