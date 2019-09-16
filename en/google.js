const Discord = require("discord.js")
const GoogleSearch = require("google-searcher");
exports.run = async (client, message, args) => {
  
if (message.channel.nsfw === true) return message.channel.send("Este comando es solo para canales SFW"); 
let busqueda = args.join(' '); 
if (!busqueda) return message.channel.send(':mag_right: Escribe el término a buscar.'); 

message.channel.send(':mag_right: Buscando...') 
.then(message =>{ 
new GoogleSearch() 
    .host("www.google.com") 
    .lang("es")
    .query(busqueda)
    .exec() 
    .then(results => { 
        if(results[0] == undefined) return message.edit(':x: Sin resultados.'); 

message.edit(':mag_right: Este es el resultado a "'+busqueda+'": ' +results[0]) 
    })
})
}
