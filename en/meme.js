const Discord = require("discord.js");
const fresa = require("fresaapi");
exports.run = async (client, message, args) => {
   
   
let meme = ["https://cdn.discordapp.com/attachments/539720786131288064/542042139421442053/Quiz_Kid_20122018215650.jpg",
                  "https://images-ext-1.discordapp.net/external/vTpCThN7yzA_D3T9mIM2u-FRAQ1xVZQNIFjCxtTAHyk/https/cdn.discordapp.com/attachments/491363577576554496/493864873738895422/42111191_338464000223724_5264160514979659776_n.png?width=284&height=300",
                  "https://media.discordapp.net/attachments/529773110761750539/530155641231245313/IMG-20181213-WA0000.jpg",
                  "https://images7.memedroid.com/images/UPLOADED180/5504bc8a25bec.jpeg",
                  "https://images-ext-2.discordapp.net/external/eZeyf3hBdb0ylMyTAuy6bYNsmTRbz2N55eg9KZgpBu0/https/pbs.twimg.com/media/DsS64XQWkAAqnyR.jpg%3Alarge?width=300&height=300",
                  "https://images7.memedroid.com/images/UPLOADED993/57a0f8f2bb9fc.jpeg",
                  "https://images7.memedroid.com/images/UPLOADED191/56bf057ecbf7a.jpeg",
                          "https://images-ext-2.discordapp.net/external/1xPG4bar9Xt7yvJZNn97GDyqCK-CEaHIPvL5x6VJh2k/https/images7.memedroid.com/images/UPLOADED720/5819189543ca4.jpeg?width=318&height=300",
                          "https://images-ext-1.discordapp.net/external/uCyj9VHGCoZNYHk_znFA67fov9g3_zokpCKwhbpKN5c/https/images3.memedroid.com/images/UPLOADED107/59862c45910b1.jpeg?width=400&height=288",
                          "https://media.discordapp.net/attachments/539720786131288064/541374977644167178/21192582_1963089090637838_5614651520797118257_n.jpg?width=331&height=301",
           "https://cdn.discordapp.com/attachments/563987799305355275/566827145641328650/c803b132848fb50a770e90da8324f2bb.png"]           
    var embed = new Discord.RichEmbed()
  .setTitle("¡Meme xD!")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")

  .setTimestamp()
  .setImage(fresa.meme())
        message.channel.send(embed);
}