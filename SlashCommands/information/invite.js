const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    description: "Gives invite link",
    run: async(client, interaction, args) => {
      const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Invite me')
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=889765638564888576&permissions=8&scope=bot`)
					.setStyle("LINK"),
			);

  const inviteembed = new MessageEmbed()
  .setColor('#8112df')
  .setTitle(`Invite ${client.user.username} now`)
  .setImage(client.user.displayAvatarURL())
  .setFooter({
    text: `${client.user.username}`, 
    iconURL: client.user.displayAvatarURL({dynamic: true})})

    interaction.followUp({embeds: [inviteembed], components: [button]}).catch((e) => {

  });
}
}
