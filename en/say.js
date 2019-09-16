const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    let Mensaje = args.join(" ");
    message.delete(1000);
    message.channel.send( Mensaje );
}