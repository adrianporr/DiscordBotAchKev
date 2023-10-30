const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'accept-rules',
    description: 'Send Regel Message',
    devOnly: true,
    //testOnly: Boolean,
    //deleted: true,
    
    callback: async ( client, interaction) => {

        const roles = [
            { // Community Role
                id: "1167746037478326272",
                label: "Regeln akzeptieren!"
            }
        ]

        const rulesEmbed = new EmbedBuilder()
            .setColor(0x34fbfb)
            .addFields(
                { name: '\u2705 Server freischalten', value: '> Wenn du die Regeln gelesen hast und dem Server beitreten möchtest, bestätige mit dem unteren Button die Regeln!' },
            )

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
                content: "",
                components: [row],
                embeds: [rulesEmbed],
            });
            process.exit
        } catch (error) {
            console.log(error)
        }
    },
};