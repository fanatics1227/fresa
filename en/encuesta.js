const Discord = require("discord.js")

exports.run = async (client, message, args) => {
 
   
   let texto = args.join(" ").split(" | ")
   if(!texto[0]) return message.reply(' Debes Escribir La pregunta')
  if(!texto[1]) return message.reply(' Debes Poner La Opcion 1')
  if(!texto[2]) return message.reply(' Debes Poner La Opcion 2')
   message.delete(10)
   const embed = new Discord.RichEmbed()
   .setAuthor(message.author.username, message.author.avatarURL)
   .setTitle(texto[0])
   .setDescription("<:1_:564149279577473102> "+ texto[1] + '\n<:2_:564149300960034817> '+ texto[2])
   .setFooter('Comando: Encuesta')
  
   message.channel.send(embed).then(async m =>  {
 await m.react("564149279577473102")
   await m.react("564149300960034817")
 })
}