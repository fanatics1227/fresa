const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let pregunta = args.join(" ");
    if(!pregunta) return message.channel.send('Escribe una pregunta')
      let respuestas = ["Si", "No", "Tal vez", "Siempre", "Quien sabe"]           
    var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Pregunta: "+pregunta, 'Respuesta: '+respuestas[Math.floor(Math.random() * respuestas.length)])
  .setFooter("Comando 8ball")
  .setColor("RANDOM")
        message.channel.send(embed);
  
}
