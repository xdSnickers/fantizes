const { version: djsversion, MessageEmbed } = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "botinfo",
    description: "Shows Bot's information",

    run: async (client, interaction, args) => {
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
          let totalSeconds = (client.uptime / 1000);
          let days = Math.floor(totalSeconds / 86400);
          totalSeconds %= 86400;
          let hours = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          let minutes = Math.floor(totalSeconds / 60);
          let seconds = Math.floor(totalSeconds % 60);
          let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
            
        const embed = new MessageEmbed()
        .setColor('#8112df')
        .setTitle(`${client.user.username}'s Information`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField("<a:Zainab3:1003193089306923068>・**Creator**:", "[__**!xd.Snickers.#4233**__](https://xdsnicker.cf/)")
        .addField(`<a:Zainab3:1003193089306923068>・${client.user.username}'s Tag:`, client.user.tag)
        .addField(`<a:Zainab3:1003193089306923068>・${client.user.username}'s ID:`, client.user.id)
        .addField("<a:Zainab3:1003193089306923068>・Node.js:", process.version)
        .addField("<a:Zainab3:1003193089306923068>・Discord.js:", `v${djsversion}`)
        .addField("<a:Zainab3:1003193089306923068>・Uptime:", uptime)
        .addField("<a:Zainab3:1003193089306923068>・Commands Count:", `${client.slashCommands.size}`)
        .addField("<a:Zainab3:1003193089306923068>・Servers Count:", numberWithCommas(client.guilds.cache.size))
        .addField("<a:Zainab3:1003193089306923068>・Users Count:", numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0)))
        .addField("<a:Zainab3:1003193089306923068>・Created at:", `${moment(client.user.createdTimestamp).format('LT')} ${moment(client.user.createdTimestamp).format('LL')} - (${moment(client.user.createdTimestamp).fromNow()})`)
        .addField("<a:Zainab3:1003193089306923068>・Website:", "[__**https://xdsnicker.cf**__](https://xdsnicker.cf/)")
        
        .addField("<a:Zainab3:1003193089306923068>・Support Server", "[__**☆・Black-Pearl™**__](https://discord.gg/nqdEqypmbC)\n[]()")
        .setImage("https://cdn.discordapp.com/attachments/856437531451850775/1006011077601001572/standard.gif")
        .setFooter({
            text: `|Requested by ${interaction.user.username}`}
            )
        .setTimestamp();

        interaction.followUp({ embeds: [embed] }).catch((e) => {

        });
    },
};
