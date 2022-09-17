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
      .addField('<a:imp_cross:1010896819963834528>**My Prefix /:**', `<a:Vivre_loading:1005989479527485570>__**I have 15+ commands which you can find in the menu below**__`)
      .addField('<a:imp_cross:1010896819963834528>**Navigation Help:**', '<a:Vivre_loading:1005989479527485570> __**Click on the menu to select a category**__ ')
      .addField('<a:imp_cross:1010896819963834528>**Bot by:**', "[<a:Vivre_loading:1005989479527485570> __**!xd.Snickers.#4233**__](https://xdsnicker.cf/)")
      .addField('<a:imp_cross:1010896819963834528>**Music:**', "<a:Vivre_loading:1005989479527485570> __**If you find any bugs/errors make sure to visit:**__ __**https://xdsnicker.cf**__")
      .setImage("https://cdn.discordapp.com/attachments/856437531451850775/1006011255665991762/standard_1.gif")
      .setFooter({
        text: `|Requested by ${interaction.user.username}`}
        )
      .setTimestamp();


      const Information = new MessageEmbed()
    .setColor('#26f8ff')
    .setTitle('<a:Discord:1017566470013730897>  __Information__')
    .addField(" <a:Discord:1017566470013730897> **/Help**", "<a:Vivre_loading:1005989479527485570>__Shows help menu__")
    .addField(" <a:Discord:1017566470013730897> **/Botinfo**", "<a:Vivre_loading:1005989479527485570>__See Information about bot.__")
    .addField(" <a:Discord:1017566470013730897> **/Ping**", "<a:Vivre_loading:1005989479527485570>__Shows ping__")
    .addField(" <a:Discord:1017566470013730897> **/Invite**", "<a:Vivre_loading:1005989479527485570>__Gives invite link__")
    .addField(" <a:Discord:1017566470013730897> **/Support**", "<a:Vivre_loading:1005989479527485570>__Gives support server link__")
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
