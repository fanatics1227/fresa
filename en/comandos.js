 const Discord = require("discord.js")
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
    
.setTitle("Comandos")
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription('```css\n[ ] Obligatorio, < > Opcional ```')
.setColor(3447003)
.addField("🎉🎉 Comandos Fun 🎉🎉", "```css\n"+`${prefix}8ball
${prefix}cry <Razon>
${prefix}hug [@Usuario]
${prefix}slap [@Usuario] <Razon>
${prefix}fusion [@Usuario]
${prefix}pat [@Usuario]
${prefix}kill [@Usuario]
${prefix}kiss [@Usuario]
${prefix}meme
${prefix}hack
${prefix}naruto
${prefix}warm
${prefix}trash <@Usuario>
${prefix}triggered <@Usuario>
${prefix}bob <@Usuario>
${prefix}car [@Usuario]
${prefix}gru [Texto 1] | [Texto 2] | [Texto 3]
${prefix}drake [@Usuario]`+"```" )
.addField("🖼🖼 Comandos Multimedia 🖼🖼", "```css\n"+`${prefix}avatar <@Usuario>
${prefix}servericon`+"```")
.addField("📝✏ Comandos Texto ✏📝", "```css\n"+`${prefix}say [Decir]
${prefix}embed [Titulo] | [Descripción]
${prefix}encuesta [Pregunte] | [Opcion 1] | [Opcion 2]
${prefix}hola`+"```")
.addField("ℹ Comandos Info ℹ", "```css\n"+`${prefix}spam
${prefix}credits
${prefix}serverinfo`+"```")
.addField("Extras", "```css\n"+`${prefix}ping
${prefix}bug [Reporte]
${prefix}sugerencia [Tu Sugerencia]
${prefix}seguridad`+'```')
.addBlankField(true)
message.channel.send(embed);
    }
  if(args[0] === "moderacion"){
    	let embed2 = new Discord.RichEmbed()
.setTitle("🔨 Comandos de Moderación 🔨")
.setAuthor(message.author.username, message.author.avatarURL)
.setColor(3447003)
.setDescription('```css\n'+`${prefix}mute [@Usuario] [Razon]
${prefix}unmute [@Usuario]
${prefix}ban [@Usuario] [Razon]
${prefix}kick [@Usuario] [Razon]
${prefix}hackban [ID]
${prefix}warn [@Usuario] [Razon]`+'```')
.addField("🛠 Comandos De Administración 🛠", "```css\n"+`${prefix}newrol [Nombre del Role]
${prefix}addrol [@Role] [@Usuario]
${prefix}removerol [@Role] [@Usuario]
${prefix}channel [Nombre del Canal]
${prefix}channel delate [#Canal]
${prefix}category [Nombre de la Categoria]
${prefix}emoji`+'```')
.addField("⚔ Comandos De Roles Pre-hechos ⚔", "```css\n"+`${prefix}rol-moderador
${prefix}rol-admin
${prefix}rol-ayudante`+'```')
.addBlankField(true)
message.channel.send(embed2);
  }
}

   
   