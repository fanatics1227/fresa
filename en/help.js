const Discord = require('discord.js') 
const bd = require('mega-dtbs');

let config_db = new bd.crearDB('config')

exports.run = async (client, message, args) => {

   let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
    
  }

let embed = new Discord.RichEmbed()
.setAuthor("Ayuda:", message.author.avatarURL)
.setColor(3447003)
.addField("Comandos", prefix+"comandos")
.addField("Comandos de Moderación", prefix+"comandos moderacion")
.addField("Configuración", prefix+"config")
.addField("Prefix: ", "`"+prefix+"`", true)
.addField("Pagina Web", "[Fresa](http://fresa.glitch.me/#)")
.addField("Servidor de Soporte", "[discord.gg](http://discord.gg/CxmU7Bp)")
.addField("Bot de musica", "[MP3](https://discordapp.com/oauth2/authorize?client_id=571889864321269760&permissions=-1&scope=bot)")
.addField("Discord Bots se agradese tu voto", "[DiscordBots.org](https://discordbots.org/bot/538023638587408415)")
.setImage("https://i.imgur.com/BwPBeG9.gif")
.addBlankField(true)
message.channel.send(embed)

}

module.exports.help = {
  name: "help",
  aliases: ["ayuda", "halp", "ayeda"]
}