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
if(!args[0]){
let embed = new Discord.RichEmbed()
.setAuthor("Documentación para desarrolladores", message.author.avatarURL)
.setColor(3447003)
.addField("Ejemplos de codigo:", "```Ejemplo Embed: "+prefix+"docs embed \nEjemplo Say: "+prefix+"docs say```")
.addBlankField(true)
message.channel.send(embed)
}
  if(args[0] === 'embed'){
    let embed = new Discord.RichEmbed()
//.setAuthor("Ejemplo Embed:", message.author.avatarURL)
.setColor(3447003)
.addField("Ejemplo Embed", "```js\nconst embed = new Discord.RichEmbed()\n.setAuthor()```")
.addBlankField(true)
message.channel.send(embed)
  }
if(args[0] === 'say'){
    let embed = new Discord.RichEmbed()
//.setAuthor("Ejemplo Say", message.author.avatarURL)
.setColor(3447003)
.addField("Ejemplo Say:", '```js\nlet decir = args.join(" ") // <= Esto hace que capture los argumentos del mensaje \nif(!decir) return message.reply("Debes poner que debo decir") // <= Esto define que si no hay argumentos retorne \nmessage.channel.send(decir) // <= Esto hace que mande los argumentos del mensaje```')
.addBlankField(true)
message.channel.send(embed)
}
}