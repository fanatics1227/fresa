const Discord = require("discord.js");
const YtSearch = require("yt-search");
exports.run =  async (client, message, args, prefix) => {
    const busq = message.content.split(' ').slice(1).join(' ');
    YtSearch(busq, async function(err, datos) {
    if ( err ) throw err
    const videos = datos.videos;
    const result = videos[0]
    const embed = new Discord.RichEmbed()
    .setTitle(result.title)
    .setURL('https://www.youtube.com'+result.url)
    .addField('Duración', "0:00 - "+result.timestamp)
    .addField('Vistas', result.views.toLocaleString())
    .setImage('https://i1.ytimg.com/vi/'+result.videoId+'/hqdefault.jpg')
    .setFooter('https://www.youtube.com'+result.url)
    .setColor("FF0000")
    message.channel.send(embed)
    })
}

// Esto te lo pase yo :V xD por eso no lo puse porque ni idea de como usar la api
// XD