const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let bug = client.channels.get('582242788263854080');
    let reporte = args.join(" ");
    if(!reporte) return message.reply(" debes poner el reporte")

  let embed = new Discord.RichEmbed()
  .setAuthor('Sugerencia',message.author.avatarURL)
  .addField("Sugirio", reporte)
  .addField("Usuario", message.author)
  .addField("Id", message.author.id)
  .addField("Server", message.guild)
  .addField("Server Id", message.guild.id)
  bug.send(embed)
  bug.send("Nueva sugerencia <@&549440760538333194>")
message.reply('ok sugerencia enviada')
}