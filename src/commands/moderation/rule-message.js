const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name: 'rule-message',
    description: 'Sende Regel Message',
    devOnly: true,
    //testOnly: Boolean,
    //deleted: true,
    
    callback: async ( client, interaction) => {

        const roles = [
            { // Community Role
                id: "1167746037478326272",
                label: "Regeln akzeptieren!"
            },
            { // Weeb Role 
                id: "1168247103127048253",
                label: "Weeb Rolle"
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
                content: `
                **REGELWERK**\n\n**[1]** Illegale Aktivitäten - Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert!\n**[2]** Respektvoller Umgang miteinander ist mir persönlich ein sehr wichtiges Anliegen!\n**[3]** Alle Beleidigungen, rassistischen, rechtsextremistischen oder sexistischen Aussagen sind in jeder Art und Weise untersagt und werden keineswegs toleriert.
                `,
                components: [row],
            });
            process.exit
        } catch (error) {
            console.log(error)
        }
    },
};