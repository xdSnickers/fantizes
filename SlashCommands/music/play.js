const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  description: "Play a song!",
  options: [
    {
      name: "song",
      description: "provide a song.",
      type: "STRING",
      required: true,
    }
  ],

  run: async(client, interaction, args) =>  {

    const VoiceChannel = interaction.member.voice.channel;
    const music = interaction.options.getString("song")

    if(!music) return interaction.followUp(":x: | Provide a Song name or a link to play a Song.")

    let embed_1 = new MessageEmbed()
    .setDescription(':x: | idiot u need to be in voice cheenel to listen me.')
    .setColor('RANDOM');
    if(!VoiceChannel) return interaction.followUp({embeds: [embed_1]}).catch((e) => {

  });

    let embed_2 = new MessageEmbed()
    .setDescription(`:x: | Am been Foked in <#${interaction.guild.me.voice.channelId}>!`)
    .setColor('RANDOM');
    if(interaction.guild.me.voice.channelId && VoiceChannel.id !== interaction.guild.me.voice.channelId) return interaction.followUp({embeds: [embed_2]}).catch((e) => {
});

    try {
      client.distube.play(VoiceChannel, music, { textChannel: interaction.channel, member: interaction.member});
      let embed_3 = new MessageEmbed()
      .setDescription(`<a:Duck_walking:1006012564339163218> | Song Foked.`)
      .setColor('RANDOM');
      interaction.followUp({embeds: [embed_3]}).catch((e) => {

    });
    } catch (e) {
      const embed = new MessageEmbed()
      .setDescription(`:x: | Error: ${interaction.guild.me.voice.channelId}!`)
      .setColor("RANDOM");
      interaction.followUp({embeds: [embed]}).catch((e) => {

    });
    };
  },
};
