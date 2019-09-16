
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

let user = message.mentions.users.first();
    if(!user) return message.channel.send("Debes mencionar a alguien")
    
    const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(user.avatarURL)
.setDescription('**Warn**')

.addField('**Usuario**:', user)  
.addField('ID:', user.id)
.addField('**Razon:**:', '**NO DEFINIDA**')

.addField('**Numero de warns**:', '4/5') // k falso :v

.addField('**Moderador**:', message.author)
.addField('Modearador Id:', message.author.id)//xD
message.channel.send(embed)
message.channel.sen('Tranquilo es de broma')
}