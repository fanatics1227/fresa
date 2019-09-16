const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  
if(args[0] === 'delate'){
     if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: No tienes el permiso `MANAGE_CHANNELS`.")
let canal = message.mentions.channels.first();
let id = canal.id
    if(!id) return message.channel.send("Debes Mencionar el Canal")
  message.guild.channels.get(id).delete()

    message.channel.send("OK el canal " + canal + " ha sido eliminado" );
} else {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":x: No tienes el permiso `MANAGE_CHANNELS`.")
    let nombre = args.join(" ");
    if(!nombre) return message.channel.send(":x: Debes poner el nombre del canal ejemplo f!channel new [nombre]")
   message.guild.createChannel(nombre)
    message.channel.send("OK el canal " + nombre + " ha sido creado" );
}

}