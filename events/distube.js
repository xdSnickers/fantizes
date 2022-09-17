client = require("../index");
const { MessageEmbed } = require("discord.js");

// DisTube Events
client.distube
.on("playSong", (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:imp_cross:1010896819963834528>  | Playing: [${song.name}](${song.url}) - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Snickers.`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("RANDOM")]}))
.on("addSong", (queue, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:imp_cross:1010896819963834528>  | Added [${song.name}](${song.url}) - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Snickers.`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("RANDOM")]}))
.on("playList", (queue, playlist, song) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:imp_cross:1010896819963834528>  | Play [${playlist.name}](${playlist.url}) playlist (${playlist.songs.length} songs).\nNow playing [${song.name}](${song.url}) - \`${song.formattedDuration}\``)
  .setFooter(`Requested by ${song.user.username} | Bot by !xd.Snickers.`, `${song.user.displayAvatarURL()}`)
  .setTimestamp()
  .setColor("RANDOM")]}))
.on("addList", (queue, playlist) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:imp_cross:1010896819963834528>  | Added [${playlist.name}](${playlist.url}) playlist (${playlist.songs.length} songs) to queue.`)
  .setColor("RANDOM")]}))
.on("empty", (queue) => queue.textChannel.send({embeds: [new MessageEmbed()
  .setDescription(`<a:imp_cross:1010896819963834528>  | Looks like everyone left me alone in the Voice Channel so I am leaving Voice Channel too.`)
  .setColor("RANDOM")]}))
.on(`error`, (channel, e) => {
    channel.send({embeds: [new MessageEmbed()
    .setDescription(`:x: | An error encountered: ${e}`)
  .setColor('RANDOM')]})}) 
.on("finish", (queue) => queue.textChannel.send({embeds: [new MessageEmbed()
.setDescription(`<a:imp_cross:1010896819963834528>  | Music Queue has just ended`)
.setColor("RANDOM")]}));