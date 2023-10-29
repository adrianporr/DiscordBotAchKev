const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'rules',
    description: 'Sende Regel Message',
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
            .setColor(0x0099FF)
            .setTitle('REGELWERK')
            .addFields(
                { name: '[1] Illegale Aktivitäten', value: '> Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert', inline: true},
                { name: '[2] Miteinander', value: '>  Alle Beleidigungen, rassistischen, rechtsextremistischen oder sexistischen Aussagen sind in jeder Art und Weise untersagt und werden keineswegs toleriert.', inline: true},
                { name: '\u200B', value: '\u200B' },
                { name: '[3] Fremdwerbung', value: '> Keine Werbung in den Text-Kanälen/Sprach-Kanälen! Wenn es etwas zu bewerben gibt, dann nutzt bitte dafür den Channel', inline: true},
                { name: '[4] Medien', value: '> Das Teilen pornografischer, gewaltverherrlichender oder illegaler Medien ist strikt untersagt.', inline: true},
                { name: '\u200B', value: '\u200B' },
                { name: '[5] Illegale Aktivitäten', value: '> Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert', inline: true},
                { name: '[6] Illegale Aktivitäten', value: '> Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert', inline: true},
                { name: '\u200B', value: '\u200B' },
                { name: '[7] Illegale Aktivitäten', value: '> Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert', inline: true},
                { name: '[8] Illegale Aktivitäten', value: '> Jegliche Art von Gesetzesverstößen oder Verstöße gegen die Discord Guidelines werden nicht toleriert', inline: true},
                { name: '\u200B', value: '\u200B' },
                { name: '\u2705 Server freischalten', value: '> Wenn du die Regeln gelesen und dem Server beitreten möchtest, bestätige mit dem unteren Button die Regeln' },
            )

        const rulesImage = new EmbedBuilder()
            .setColor(0x0099FF)
            .setImage('https://i.imgur.com/jwCrEeT.png')

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
                embeds: [rulesImage, rulesEmbed]
            });
            process.exit
        } catch (error) {
            console.log(error)
        }
    },
};