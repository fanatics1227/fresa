    
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
let texto = args.join(" ").split(" | ")
    if(!texto[0]) return message.channel.send("Debes Poner el Titulo")
    if(!texto[1]) return message.reply(' Debes Poner una descripción')
  message.delete();
  const Embed = new Discord.RichEmbed()
  .setDescription(texto)
  .setColor(0x06e013)
  message.channel.send(Embed)
}
