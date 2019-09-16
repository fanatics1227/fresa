const Discord = require("discord.js")

exports.run = async (client, message, args) => {
let apodo = args.join(" ");
message.member.setNickname(apodo)
  message.reply(` Ok tu apodo ahora es ${apodo}`)
}