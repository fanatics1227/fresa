const Discord = require("discord.js")

exports.run = async (client, message, args) => {  

let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(0x66b3ff)                             .setFooter(`Avatar de ${message.author.tag}`);                                              message.channel.send({ embed });

} else {
    const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)               .setColor(0x66b3ff)                             .setFooter(`Avatar de ${miembro.tag}`);
                                                    message.channel.send({ embed })
} }