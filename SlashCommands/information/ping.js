module.exports = {
    name: "ping",
    description: "Shows Fantasy's Ping",

    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` }).catch((e) => {
          
        });
    },
};
