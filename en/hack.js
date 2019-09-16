const Discord = require("discord.js")

exports.run = async (client, message, args) => {
message.channel.send("Iniciando `raider.json` 0%").then(m => {
setTimeout(() => {
m.edit("iniciando `raider.json` 20%")
}, 1000); // Tiempo en milisegundos.
setTimeout(() => {
m.edit("iniciando `raider.json` 80%")
}, 2000);
setTimeout(() => {
m.edit("iniciando `raider.json`100%")
}, 3000);
setTimeout(() => {
m.edit("`Obteniendo Permisos de administrador de "+message.guild.name+"...` 0%")
}, 4000)
setTimeout(() => {
m.edit("`Obteniendo Permisos de administrador de "+message.guild.name+"...` 100%")
}, 5000)
setTimeout(() => {
m.edit("Otorgando permisos a: `" + message.author.username + "...` 0%")
}, 6000)
setTimeout(() => {
m.edit("Otorgando permisos a: `" + message.author.username + "...` 99%")
}, 7000)
setTimeout(() => {
m.edit("Listo :white_check_mark: ahora "+ `${message.author}`+ 'tiene permisos de administrador y las raiders fueron activadas en '+ message.guild.name + ' Nº de hackeo ||Es todo fake te trole xDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD||')
}, 9000)
})
}