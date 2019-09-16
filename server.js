//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

  


app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT

const Discord = require("discord.js");
const client = new Discord.Client();
//Base de datos
const bd = require('mega-dtbs');
const db = require ('quick.db');

//Apis raras que puse para testear
const node_superfetch = require('node-superfetch')
const Weez = require('weez');
var weez = new Weez.WeezAPI("6tKYCrsrKq2HserbkjJdrD6OnArBLf3OF31a");
//Editores de Imagen
const Jimp = require('jimp');
const canvas = require('canvas');
//Busqueda
const GoogleSearch = require("google-searcher"); 
const search = require('youtube-search');
const ytSearch = require( 'yt-search' );
//fs
const fs = require('fs');
let { reddirSync } = require('fs');
//economia
const Economia = require("economia-discord")

const dgestor = require('discord-gestor');

//gifs
const naruto = require('./gifs/naruto.json');
const fresa = require('fresaapi')


const cosa = [
    "PLAYING",
    "WATCHING",
    "LISTENING",
    "STREAMING"
]

client.on('ready', () => {
  console.log('estoy listo!');
      setInterval(() => { 
        const index = Math.floor(Math.random() * (cosa.length - 1) + 1);
        client.user.setPresence({
        status: "online",
        game: {
            name: client.guilds.size + " Servidores & "+ client.users.size + " Usuarios | f!help",
           type: cosa[index]
        }
    })
    }, 2000);

});

let warn = new bd.crearDB('warn')
let config_db = new bd.crearDB('config')
let bien_db = new bd.crearDB('bienvenida')
let logs_db = new bd.crearDB('logs')

client.on("message",async (message) => {
    if (message.author.bot) return;

  const palabras = ["https://xnxx.com", "http://xnxx.com"];
  if (message.channel.nsfw === true) return
  if(palabras.some(p => message.content.includes(p))){
    message.reply('🔞 No envies paginas NSFW en '`${message.guild}`+" Solo en canales NSFW 🔞").then(r => r.delete(6000));
    message.delete()
    

  }
  //vale

 if (message.content.startsWith("xD")) {//esto es para q si contiene xD salga
message.react("😂")
    }//grax
  
    if (message.content.startsWith("xd")) {//esto es para q si contiene xD salga
message.react("😂")
}
  
    if (message.content.startsWith("XD")) {//esto es para q si contiene xD salga
message.react("😂")
}
  
    if (message.content.startsWith("Xd")) {//esto es para q si contiene xD salga
message.react("😂")
}
  
  if (message.content.startsWith(":v")){
  message.react('564138872922046494')
  }
  
   if (message.content.startsWith(":V")){
  message.react('564138872922046494')
  }
  
  if (message.content.startsWith("v:")){
  message.react('564138872922046494')
  }
  
   if (message.content.startsWith("V:")){
  message.react('564138872922046494')
  }
  
  if(message.content.startsWith("bye")) {
    message.react("👋")
  }
  
    if(message.content.startsWith("chao")) {
    message.react("👋")
    }
  
    if(message.content.startsWith("ban")) {
    message.channel.send("Quieres se Baneado?");
  }
  
    if(message.content.startsWith("hola")) {
      message.react("👋")
    
  }
  
  if(message.content.startsWith("Hola")) {
      message.react("👋")
    
  }

  let prefix;
   if(config_db.tiene(`${message.guild.id}`)){
      prefix = await config_db.obtener(`${message.guild.id}`)
  } else {
   prefix = "f!"
    
  }

    if (message.content.startsWith("<@538023638587408415>")) {
  message.reply(' Info \nMi Prefix es: `'+ prefix + '`')
  }
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 if (message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return; 


      try {  

      let comandos = require(`./en/${command}.js`); 
      
      comandos.run(client, message, args);
      console.log(message.author.tag+" Uso el comando: "+message.content)
      

    } catch (e) {
      console.log(e.stack) 
      message.channel.send("El comando no fue encontrado o esta dañado usa "+prefix+"help para ver los comandos")
      
    } finally {

    }
  
});

/*
client.on("guildMemberUpdate", async (oldMember, newMember) => {
if(oldMember.guild.id !== oldMember.guild.id) return
  let id = db.fetch(`logs-${oldMember.guild.id}`)
  if(!id) return;
var canal = client.channels.get(id);

const embed = new Discord.RichEmbed()
.setTitle("🔄 Usuario Actualizado")
.setColor("RANDOM")
.addField("Apodo Antiguo:", oldMember.nickname)
.addField("Nuevo Apodo:", newMember.nickname)
canal.send(embed)
});*/


client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (newMessage.author.bot) return;
if(oldMessage.guild.id !== oldMessage.guild.id) return
  let id = db.fetch(`logs-${oldMessage.guild.id}`)
  if(!id) return;
var canal = client.channels.get(id);
  

  var user = oldMessage.author
  
  const embed = new Discord.RichEmbed()
  .setTitle('🔄 Mensaje Editado')
  .setThumbnail(oldMessage.author.avatarURL)
  .addField('Mensaje Antiguo:', oldMessage.content)
  .addField('Nuevo Mensaje:', newMessage.content  + '\n[Ir al mensaje]('+ newMessage.url+')')
  .addField('Canal:', oldMessage.channel)
  .addField('👤 Usuario:', oldMessage.author.username+'#'+oldMessage.author.discriminator+' ('+oldMessage.author.id+')')
  .setColor("RANDOM")
  canal.send(embed)
});

client.on("guildCreate", async (guild) => {
const embed = new Discord.RichEmbed()
.setTitle('📥 Nuevo Servidor')
.setThumbnail(guild.iconURL)
.addField('Nombre del Servidor', guild.name)
.addField('Id del servidor', guild.id)
.setColor("00FF04")
var canal = client.channels.get("571843578247249932");
  canal.send(embed)
});

client.on("guildDelete", async (guild) => {
const embed = new Discord.RichEmbed()
.setTitle('📤 Servidor Eliminado')
.setThumbnail(guild.iconURL)
.addField('Nombre del Servidor', guild.name)
.addField('Id del servidor', guild.id)
.setColor("FF0000")
var canal = client.channels.get("571849222861750274");
  canal.send(embed)
});

client.on("messageDelete", async (message) => {
//let DeleteLog = new db.crearDB('DeleteLogs');//que haces Un evento para?
if(message.guild.id !== message.guild.id) return
  let id = db.fetch(`logs-${message.guild.id}`)
  if(!id) return
var canal = client.channels.get(id);
  

  var user = message.author
  var embed = new Discord.RichEmbed()
      .setTitle("❌ Mensaje eliminado")
      .setThumbnail(message.author.avatarURL)
      .addField("Contenido del mensaje", message.content)
      .addField("ID del Mensaje", message.id)
      .addField("Canal del Mensaje", message.channel)
      .addField("👤 Autor del mensaje ", user)
      .addField("ID", user.id)
      .setColor("FF0000")
  
  canal.send(embed);
});

client.on("roleDelete", (role) => {
  if(role.guild.id !== role.guild.id) return;
  let id = db.fetch(`logs-${role.guild.id}`)
  if(!id) return
var canal = client.channels.get(id);

  var embed = new Discord.RichEmbed()
  .setTitle("❌ Rol Eliminado")
  .addField("Nombre del role", role.name)
  .addField("ID del role", role.id)
  .setColor("FF0000")
  
  canal.send(embed);
  
});

/*client.on("roleUpdate", (newRole) => {
   if(newRole.guild.id !== newRole.guild.id) return
let id = db.fetch(`logs-${newRole.guild.id}`)
if(!id) return
var canal = client.channels.get(id);
 
  var color = newRole.color
  var embed = new Discord.RichEmbed()
  .setTitle("🔄 Rol Actualizado")
  .addField("Nombre del rol", newRole.name)
  .addField("Color", newRole.color)
  .setColor(color)

  canal.send(embed);
  
});

client.on("channelUpdate", async (oldChannel, newChannel) => {
    if(oldChannel.guild.id !== oldChannel.guild.id) return
  let id = db.fetch(`logs-${oldChannel.guild.id}`)
  if(!id) return
var canal = client.channels.get(id);
  
const embed = new Discord.RichEmbed()
.setTitle('🔄 Canal Actualizado')
.addField('Nombre Antiguo:', oldChannel.name)
.addField('Nombre Nuevo:', newChannel.name)
.addField('Id del canal:', oldChannel.id)
.setColor("RANDOM")
canal.send(embed);
});*/

client.on("channelCreate", (channel) => {
  if(channel.guild.id !== channel.guild.id) return
  let id = db.fetch(`logs-${channel.guild.id}`)
  if(!id) return
var canal = client.channels.get(id);

  var embed = new Discord.RichEmbed()
      .setTitle("✅ Nuevo canal")
      .addField("Nombre del canal", "<#"+channel.id+">")
      .addField("ID del canal", channel.id)
   
      .setColor("64FF00")
  
  canal.send(embed);

});

client.on("channelDelete", (channel) => {
  if(channel.guild.id !== channel.guild.id) return
  
let id = db.fetch(`logs-${channel.guild.id}`)
if(!id) return
var canal = client.channels.get(id);
  
  var embed = new Discord.RichEmbed()
      .setTitle("❌ Canal Borrado")
      .addField("Nombre del canal", channel.name)
      .addField("ID del canal", channel.id)
   
      .setColor("FF0000")
  
  canal.send(embed);

});

client.on("guildMemberAdd",async (member) => {
  if(member.guild.id !== member.guild.id) return
let id = db.fetch(`welcome-${member.guild.id}`)
if(!id) return
var canal = client.channels.get(id);
  

  
    let bienvenida = new Weez.Bienvenida()
  .avatar(member.user.displayAvatarURL)
  .fondo("https://i.imgur.com/0YrfJgx.jpg")
  .textoTitulo(`Bienvenido ${member.user.username}`)
  .textoDesc("Disfruta de tu tiempo aqui!")
  .textoColor('ffffff') 
  .acceso(weez)
 
let img = await Weez.bienvenidaRender(bienvenida)
canal.send({files: [img]})

  const embed = new Discord.RichEmbed()
  .setAuthor('📥 Un miembro a entrado al servidor', member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .addField("Usuario: ", member.user.tag+' ('+member.id+')')
  .addField("Ahora somos:", member.guild.memberCount + ' Miembros')
  .setColor("00FF04")
  .setFooter("Hola "+ member.user.tag+" bienvenido a "+ member.guild.name)

  
let id2 = db.fetch(`logs-${member.guild.id}`)
if(!id2) return
  
var canal2 = client.channels.get(id2); 
  canal2.send(embed)
  
});

client.on("guildMemberRemove", async (member) => {
    if(member.guild.id !== member.guild.id) return
  
let id = db.fetch(`logs-${member.guild.id}`)
if(!id) return
  
var canal = client.channels.get(id);

  const embed = new Discord.RichEmbed()
  .setAuthor('📤 Un miembro se fue del servidor', member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .addField("Usuario: ", member.user.tag+' ('+member.id+')')
  .addField("Ahora somos:", member.guild.memberCount + ' Miembros')
  .setColor("FF0000")
  .setFooter("Adios te extrañaremos en "+ member.guild.name, member.guild.iconURL)
  
  canal.send(embed)
});

client.login(process.env.TOKEN);


/*
Fana: xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD



Defens: Deja te copio el Yutu


*/
