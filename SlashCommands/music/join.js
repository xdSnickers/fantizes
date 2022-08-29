const { joinVoiceChannel } = require("@discordjs/voice");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "join",
  description: "Joins the voice channel.",

  run: async(client, interaction, args) =>  {

    let user = await interaction.member.fetch();
    let channel = await user.voice.channel;
if(!channel) return interaction.followUp(":x: | asshole be in voice channel to use me.").catch((e) => {

});
    joinVoiceChannel({
        channelId: interaction.member.voice.channel.id,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator
    });
    let embed = new MessageEmbed()
    .setDescription("<:music:1005993819642265621> | Daddy is here hihih.");
    interaction.followUp({embeds: [embed]}).catch((e) => {

  });
  },
};