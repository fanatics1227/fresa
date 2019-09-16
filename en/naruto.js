const Discord = require('discord.js')
const gif = require('../gifs/naruto.json');
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
  .setTitle("Jutsus")
  .setDescription("Ayuda Para los comandos de Jutsus Normales")
  .addField(prefix+"naruto rasengan", "Hacer un rasengan")
  .addField(prefix+"naruto clones-de-sombras", "Usar el Jutsu clones de Sombras")
  .addField(prefix+"naruto chidori", "Usar el Chidori")
  .setColor("#5275e4")
  message.channel.send(embed)
  let embed1 = new Discord.RichEmbed()
  .setTitle("Jutsus del Clan Uchiha")
  .setDescription("Ayuda Para los comandos de Jutsus Normales")
  .addField(prefix+"naruto sharingan", "Usa el Sharingan")
  .addField(prefix+"naruto bola-de-fuego", "Usar el Jutsu bola de fuego")
  .addField(prefix+"naruto susano", "Usar el susano")
  .setColor("#5275e4")
  message.channel.send(embed1)
}
  
if(args[0] === 'rasengan'){
     let embed = new Discord.RichEmbed()
  .setTitle("Rasengan!!")
  .setImage(gif.rasengan)
  .setColor("RANDOM")
  message.channel.send(embed)  
}
  
if(args[0] === 'clones-de-sombras'){
      let embed = new Discord.RichEmbed()
  .setTitle("Arte Ninja Jutsu Multi Clones De Sombras")
  .setImage(gif.clones)
  .setColor("RANDOM")
  message.channel.send(embed)  
 
}

if(args[0] === 'chidori'){
        let embed = new Discord.RichEmbed()
  .setTitle("Chidori!!")
  .setImage(gif.chidori)
  .setColor("RANDOM")
  message.channel.send(embed) 
}
}