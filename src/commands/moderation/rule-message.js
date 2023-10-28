const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'rule-message',
    description: 'Sende Regel Message',
    devOnly: true,
    //testOnly: Boolean,
    //deleted: true,
    
    callback: async ( client, interaction) => {

        const roles = [
            {
                id: "1167746037478326272",
                label: "Regeln akzeptieren!"
            }
        ]

        try {
            const channel = client.channels.cache.get('1167752003540242442');
            if (!channel) return;
    
            const row = new ActionRowBuilder();
    
            roles.forEach((role) => {
                row.components.push(
                    new ButtonBuilder()
                    .setCustomId(role.id)
                    .setLabel(role.label)
                    .setStyle(ButtonStyle.Success)
                )
            })
    
            await channel.send({
                content: 'Akzeptiere die Regeln um Zugriff auf den Server zu erhalten!',
                components: [row],
            });
            process.exit
        } catch (error) {
            console.log(error)
        }
    },
};