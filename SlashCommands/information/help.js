const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "help",
  description: "Show Bot's Assist Menu",

  run: async (client, interaction, args) => {

      const BotInfo = new MessageEmbed()
      .setColor('#020127')
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle(`<a:fronix_badge:1010175835602419722> **__${client.user.username}'s Assist Menu__** <a:fronix_badge:1010175835602419722>`)
      .addField('<:t_Arrow:1002432066379591791> **__Navigation Assist:__**', '<:t_Arrow:1002432066379591791> _Click on buttons to see commands._')
      .addField('<:t_Arrow:1002432066379591791> __Categories:__', '<:t_Arrow:1002432066379591791> _Information. , Music._')
      .setImage("")
      .setFooter({
        text: `Requested by ${interaction.user.username}`}
        )
      .setTimestamp();


      const Information = new MessageEmbed()
      .setColor('#020127')
      .setTitle('<a:nixalert:1015566705260507247> **__INFORMATION__** <a:nixalert:1015566705260507247>')
      .addField(' **/help**', ' _Use: Shows help menu._')
      .addField(' **/botinfo**', ' _Use: Shows Bot information._')
      .addField(' **/ping**', ' _Use: Shows ping._')
      .addField(' **/invite**', ' _Use: Gives Bot Invite Link._')
      .addField(' **/support**', ' _Use: Gives Support Server Invite Link._');

      const music = new MessageEmbed()
      .setColor("#020127")
      .setTitle('<a:fronixdisc:1015565117271851089> __MUSIC__ <a:fronixdisc:1015565117271851089>')
      .addField('**/play**', ' _Use: Plays a Song._')
      .addField(' **/skip**', ' _Use: Skips the Song._')
      .addField(' **/stop**', ' _Use: Stops the Song._')
      .addField(' **/pause**', ' _Use: Pause the Song._')
      .addField(' **/resume**', ' _Use: Resume the Song._')
      .addField(' **/join**', ' _Use: Joins the voice channel._')
      .addField(' **/leave**', ' _Use: Leaves the voice channel._')
      .addField(' **/volume**', ' _Use: Sets volume of song._')
      .addField(' **/queue**', ' _Use: Shows the queue that is currently being played._')
      .addField(' **/loop**', ' _Use: Loops the queue or a song that is currently being played._\n _*More:* Type /loop twice to loop queue._ ');

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageButton()
        .setCustomId("option1")
        .setEmoji("<a:nixalert:1015566705260507247>")
        .setLabel("Information")
        .setStyle("SECONDARY"),
  
        new MessageButton()
        .setCustomId("option2")
        .setEmoji("<a:fronixdisc:1015565117271851089>")
        .setLabel("Music")
        .setStyle("SECONDARY")
      ),
    ];

    const filter = i => ['option1', 'option2'].includes(i.customId) && i.user.id === interaction.user.id;

    const initialMessage = await interaction.followUp({
      embeds: [BotInfo],
      components: components(false),
    }).catch((e) => {

  });

      const collector = initialMessage.createMessageComponentCollector({
        filter,
        componentType: "BUTTON",
      });
  
      collector.on("collect", async (i) => {
        if (i.customId === 'option1') {
          await initialMessage.edit({ embeds: [Information] });
          await i.deferUpdate()
        }
        if (i.customId === 'option2') {
         await initialMessage.edit({ embeds: [music] });
         await i.deferUpdate()
        }
  });

},
};
