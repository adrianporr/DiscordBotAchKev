module.exports = {
    name: 'ping',
    description: 'Gibt den Websocket Ping wieder!',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //options: Object[],
    //deleted: Boolean,

    callback: ( client, interaction) => {
        interaction.reply({
            content: `Dein Ping: ${client.ws.ping}ms`,
            ephemeral: true,
        });
    },
};