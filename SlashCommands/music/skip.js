const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "skip",
  description: "Skips the song.",
  aliases: [],

  run: async(client, interaction, args) =>  {
   try {
    const VoiceChannel = interaction.member.voice.channel;
    const queue = await client.distube.getQueue(VoiceChannel);
    let embed_1 = new MessageEmbed()
    .setDescription(':x: | idiot u need to be in voice cheenel to listen me.')
    .setColor('RANDOM');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription("<:music:1005993819642265621> | Skipped the song.")
    .setColor('RANDOM');

      if(!queue || !queue.songs || queue.songs.length == 0) return interaction.followUp(":x: | I am not playing anything.");
        await queue.skip(VoiceChannel);
        interaction.followUp({embeds: [embed_2]}).catch((e) => {

      });
    } catch (err) {
      let embed_3 = new MessageEmbed()
      .setDescription(`<a:Duck_walking:1006012564339163218> | Can't skip song because there is no next song in the queue.`)
      .setColor('RANDOM');
        interaction.followUp({ embeds: [embed_3]}).catch((e) => {

      });
        console.log(err);
      };
  },
};