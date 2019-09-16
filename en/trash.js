const Discord = require("discord.js")
const Weez = require('weez');
var weez = new Weez.WeezAPI("6tKYCrsrKq2HserbkjJdrD6OnArBLf3OF31a");

exports.run = async (client, message, args) => {
  let userM = message.mentions.users.first();
  let user = message.author;
  if(!userM){
    let img = await weez.basura(user.avatarURL)
    
    message.channel.send({files: [img]})
  } else {
    let img = await weez.basura(userM.avatarURL)
    
    message.channel.send({files: [img]})
  }
}