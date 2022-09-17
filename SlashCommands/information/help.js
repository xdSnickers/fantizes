const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "help",
  description: "Show Bot's Help Menu",

  run: async (client, interaction, args) => {

    const BotInfo = new MessageEmbed()
    .setColor('#26f8ff')
    .setThumbnail(client.user.displayAvatarURL())
    .addField('**<a:X_dec_bluearrow:1017916680208388146>  Hey there! Im Monster. The best quality music bot for your server**', "**<a:X_dec_bluearrow:1017916680208388146>  My Prefix /**", "**I have 15+ commands which you can find in the menu below**", "**Invite me to your server now by using my /invite command**")
    .addField('**<a:X_dec_bluearrow:1017916680208388146>  I have 15+ commands which you can find in the menu below**', "**<a:X_dec_bluearrow:1017916680208388146>  Invite me to your server now by using my /invite command**")
    .addField('**Navigation Help:**', '**<a:X_dec_bluearrow:1017916680208388146>  Click on my menu to get help with the specified categories!**')
    .addField('**My Menu:**', "**🧊  Information**", '**🧊  Music**')
    .addField('**🧊  Music**', "**If you find any bugs/errors make sure to dm ! Haris#9899**", '**🧊  Music**')
    .addField('**Bot by:**', "**! Haris#9899 <a:9970verifyblue:1017916682888564736>**")
    .setImage("https://media.discordapp.net/attachments/1017908449436241961/1017920414757953617/standard_5.gif")
    .setFooter({
      text: `Bot coded by Haris support team of daki.cc free bot hosting | Requested by ${interaction.user.username}`}
      )
    .setTimestamp();


    const Information = new MessageEmbed()
    .setColor('#26f8ff')
    .setTitle('🧊 Information')
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/help**", "Shows help menu")
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/botinfo**", "See Information about bot.")
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/ping**", "Shows ping")
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/invite**", "Gives invite link")
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/support**", "Gives support server link")
    .addField("<a:X_dec_bluearrow:1017916680208388146>**/vote**", "Gives link to vote for the bot.")
    .setFooter({
      text: "Bot made by ! Haris#9899"
    });
      const music = new MessageEmbed()
      .setColor("#26f8ff")
      .setTitle('🧊 Music')
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/play**", "Plays a song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/skip**", "Skips the song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/stop**", "Stops the song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/pause**", "Pause the song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/resume**", "Resumes the song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/join**", "Joins the voice channel")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/leave**", "Leaves the voice channel")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/volume**", "Sets the volume of a song")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/queue**", "Shows the queue that is currently being played.")
      .addField("<a:X_dec_bluearrow:1017916680208388146>**/loop**", "Loops the queue or a song that is currently being played.")

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder(`${client.user.username}'s Help Panel`)
          .setDisabled(state)
          .addOptions([
            {
              label: "Information",
              emoji: "🧊",
              description: 'See Informative Commands',
              value: "option1",
            },
            {
              label: "Music",
              emoji: "🧊",
              description: 'See Music Commands',
              value: "option2",
            },        
          ])
      ),
    ];

    const initialMessage = await interaction.followUp({
      embeds: [BotInfo],
      components: components(false),
    }).catch((e) => {

  });

      const collector = interaction.channel.createMessageComponentCollector({
        componentType: "SELECT_MENU",
      });
  
      collector.on("collect", (message) => {
        if(message.values[0] == "option1") {
          initialMessage.edit({ embeds: [Information] });
      }
      if(message.values[0] == "option2") {
        initialMessage.edit({ embeds: [music] });
    }

      });

},
};
