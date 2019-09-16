const Discord = require('discord.js')

exports.run = async (client, message, args) => {
 

let rol = args.join(" ");
    
    message.guild.createRole({
    name: rol,
    color: "#0000",
    permissions: 0 
    })
    message.channel.send("Nuevo rol creado "+rol)
  }