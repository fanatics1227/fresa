const Discord = require("discord.js")

exports.run = async (client, message, args) => {

 
var server = message.guild;
  let info1 = message.guild.members.size;
  let info2 = message.guild.name;
  
    let embed800 = new Discord.RichEmbed()
.setTitle("Informacion del servidor")
.setThumbnail(server.iconURL)
.setAuthor(server.name, server.iconURL)
.setColor(3447003)
.addField("Nombre del servidor", info2)
.addField('ID:', server.id)
.addField('Region:', server.region)
.addField('Creado el:', server.joinedAt.toDateString())
.addField('Dueño del Servidor:', server.owner.user.tag+' ('+server.owner.user.id +')')
.addField('Miembros:', server.memberCount)
.addField('Roles:', server.roles.size)
.addField('Canales:', server.channels.size)
.addBlankField(true)
message.channel.send(embed800)
}
//este no es de mybot?