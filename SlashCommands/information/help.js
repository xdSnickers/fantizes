const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "help",
  description: "Show Bot's Help Menu",

  run: async (client, interaction, args) => {

      const BotInfo = new MessageEmbed()
      .setColor('#8112df')
      .setThumbnail(client.user.displayAvatarURL())
      .setTitle(`${client.user.username}'s Help menu`)
      
      .setDescription("<a:blue_flame:1005286941392121856>__**Hey Its Me Fantasy Thanks For Using Me If You Find Any Bug Report To My Support Server!**__  .")
      .addField('<a:p_chikahands:1003200910429786122>**My Prefix /:**', `<a:Dance:1003197645856190464>__**I have 15+ commands which you can find in the menu below**__`)
      .addField('<a:p_chikahands:1003200910429786122>**Navigation Help:**', '<a:Dance:1003197645856190464> __**Click on the menu to select a category**__ ')
      .addField('<a:p_chikahands:1003200910429786122>**Bot by:**', "[<a:Dance:1003197645856190464> __**!xd.Snickers.#5464**__](http://xdsnickers.cf/)")
      .addField('<a:p_chikahands:1003200910429786122>**Music:**', "<a:Dance:1003197645856190464> __**If you find any bugs/errors make sure to visit:**__ __**http://xdsnickers.cf**__")
      .setImage("https://cdn.discordapp.com/attachments/856437531451850775/1006011255665991762/standard_1.gif")
      .setFooter({
        text: `Coded by ♫'s !xd.Snickers.|Requested by ${interaction.user.username}`}
        )
      .setTimestamp();


      const Information = new MessageEmbed()
    .setColor('#26f8ff')
    .setTitle('<a:Discord:1005988068102258759>  __Information__')
    .addField(" <a:DittoHype:1005987994592882788> **/Help**", "<a:Vivre_loading:1005989479527485570>__Shows help menu__")
    .addField(" <a:DittoHype:1005987994592882788> **/Botinfo**", "<a:Vivre_loading:1005989479527485570>__See Information about bot.__")
    .addField(" <a:DittoHype:1005987994592882788> **/Ping**", "<a:Vivre_loading:1005989479527485570>__Shows ping__")
    .addField(" <a:DittoHype:1005987994592882788> **/Invite**", "<a:Vivre_loading:1005989479527485570>__Gives invite link__")
    .addField(" <a:DittoHype:1005987994592882788> **/Support**", "<a:Vivre_loading:1005989479527485570>__Gives support server link__")
    .setFooter({
        text: "Bot made with ♫'s by !xd.Snickers.#5464 "
      });

      const music = new MessageEmbed()
      .setColor("#8112df")
      .setTitle('📀 Music')
      .addField('`/play`', '```js\nFunction: Play a Song.\nAliases: p.\n```')
      .addField('`/skip`', '```js\nFunction: Skips the Song.\nAliases: null.\n```')
      .addField('`/stop`', '```js\nFunction: Stops the Song.\nAliases: null.\n```')
      .addField('`/pause`', '```js\nFunction: Pause the Song.\nAliases: null.\n```')
      .addField('`/resume`', '```js\nFunction: Resume the Song.\nAliases: null.\n```')
      .addField('`/join`', '```js\nFunction: Joins the voice channel.\nAliases: null.\n```')
      .addField('`/leave`', '```js\nFunction: Leaves the voice channel.\nAliases: dc, disconnect.\n```')
      .addField('`/volume`', '```js\nFunction: Sets volume of song.\nAliases: null.\n```')
      .addField('`/queue`', '```js\nFunction: Shows the queue that is currently being played.\nAliases: q.\n```')
      .addField('`/loop`', '```js\nFunction: Loops the queue or a song that is currently being played.\nAliases: l.\n```');

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder(`${client.user.username}'s Help Panel`)
          .setDisabled(state)
          .addOptions([
            {
              label: "Information",
              emoji: "<:config:1005993880979783691>",
              description: 'See Informative Commands',
              value: "option1",
            },
            {
              label: "Music",
              emoji: "<:music:1005993819642265621>",
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
