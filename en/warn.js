const Discord = require("discord.js")
const db = require ('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes el permiso `BAN_MEMBERS`.")
let wUser = message.mentions.users.first()
let mUser = message.author;
let reason = args.join(" ").slice(22)


if (!wUser) return message.reply("Menciona a la persona deseada")
if (!reason) return message.reply("Escribe la Razón")
  
await db.add(`UserWarning_${wUser.id}_${message.guild.id}`, 1)
let count = await db.fetch(`UserWarning_${wUser.id}_${message.guild.id}`)
  
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(wUser.avatarURL)
.setDescription('**Warn**')

.addField('**Usuario**:', wUser)  
.addField('ID:', wUser.id)
.addField('**Razon:**:', reason)

.addField('**Numero de warns**:', count)

.addField('**Moderador**:', mUser)
.addField('Modearador Id:', mUser.id)
message.channel.send(embed)
   
  if (count === 5) return message.guild.ban(wUser)

  let id = db.fetch(`logs-${message.guild.id}`)
  if(!id) return
var canal = client.channels.get(id);
  
  canal.send(embed)
}