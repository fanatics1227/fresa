const Discord = require('discord.js')
const bd = require('mega-dtbs');
 let config_db = new bd.crearDB('config')
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("No tienes el permiso `MANAGE_EMOJIS`.")
   let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
    
  }
  if(!args[0]){
  const embed = new Discord.RichEmbed()
  .setTitle("😄 Emojis 😄")
  .setColor("RANDOM")
  .addField(prefix+'emoji 1', "Consigue este emoji <:packman:564138872922046494>")
  .addField(prefix+'emoji 2', 'Consigue este emoji <:1_:564149279577473102>')
  .addField(prefix+'emoji 3', 'Consigue este emoji <:2_:564149300960034817>')
  message.channel.send(embed).then(async m => {
    await m.react("564138872922046494")
    await m.react("564149279577473102")
    await m.react("564149300960034817")
  });
  }
  if(args[0] === '1'){
    message.guild.createEmoji('https://i.imgur.com/lRffZTN.png', 'packman')
    message.channel.send("Listo :white_check_mark: el emoji <:packman:564138872922046494> fue añadido")
  }
  
  if(args[0] ==='2'){
    message.guild.createEmoji('https://i.imgur.com/kX9kMm7.png', '1_')
    message.channel.send('Listo :white_check_mark: el emoji <:1_:564149279577473102> fue añadido')
  }
  
  if(args[0] === '3'){
    message.guild.createEmoji('https://i.imgur.com/mUfCU6P.png', '2_')
    message.channel.send('Listo :white_check_mark: el emoji <:2_:564149300960034817> fue añadido')
  }
}