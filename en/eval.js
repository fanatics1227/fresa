 const Discord = require("discord.js")

exports.run = async (client, message, args) => {
if(message.author.id !== '443224166611681311') return message.channel.send('El comando no existe o se encuentra dañado pon `f!help` para ver los comandos')
if(args.join(" ") === 'client.token') return message.reply("NO, Mi Token nadie se lo sabe")
      try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }

}