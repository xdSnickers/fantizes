const client = require("../index");

client.on("ready", async () => {
    console.log(`${client.user.tag} is now online ok?`);
    console.log("A music bot made with ♫' by !xd.Snickers.#5464");
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
        let serverIn = numberWithCommas(client.guilds.cache.size);
        let totalMembers = numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0));

        client.user?.setPresence({
            status: "online", // You can also use online, invisible and dnd.
            activities: [
                {
                    name: `/help | Fantasy♫`,
                    type: "WATCHING" // You can also use PLAYING, STREAMING, WATCHING and COMPETING.
                }
            ]
    });
});
