const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let bug = client.channels.get('549438654414716942');
    let reporte = args.join(" ");
    if(!reporte) return message.reply(" debes poner el reporte")

  let embed = new Discord.RichEmbed()
  .setTitle('Reporte de bug')
  .setAuthor('Reporte',message.author.avatarURL)
  .addField("Reporte", reporte)
  .addField("Usuario", message.author)
  .addField("Id", message.author.id)
  .addField("Server", message.guild)
  .addField("Server Id", message.guild.id)
  bug.send(embed)
  bug.send("Nuevo reporte <@&549440760538333194>")
message.reply( ' ok reporte enviado')
  }

  