const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'roles-selection',
    description: 'Sende Rollen Message',
    devOnly: true,
    //testOnly: Boolean,
    //deleted: true,
    
    callback: async ( client, interaction) => {

        const roles = [
            { // GTA V
                id: "1168262026477441096",
                label: "GTA V"
            },
            { // Valorant
                id: "1168261749343002666",
                label: "Valorant"
            },
            { // Otaku
                id: "1168247103127048253",
                label: "Otaku"
            },
        ]

        const rulesEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('ROLLEN AUSWAHL')
            .addFields(
                { name: '\u200B', value: '<@&1168261692803792976>\n> Diese Rolle haben Streamer und YouTuber die hier bei uns Gäste sind. Diese Rolle erhält man nur auf Anfrage. Meldet euch hierzu bei jemandem unseres <@&1168267273799217172>-Teams'}, //CC
                { name: '\u200B', value: '<@&1168247103127048253>\n> Fans, die ein großes Maß an Zeit für ihre Leidenschaft aufwenden und ihr mit großer Neigung nachgehen. Es wird ähnlich wie die englischen Wörter Nerd oder Geek benutzt..'}, //Otaku
                { name: '\u200B', value: '<@&1168262026477441096>\n> Falls du auch GTA V Roleplay spielst.'}, //GTAV
                { name: '\u200B', value: '<@&1168261749343002666>\n> Falls du auch Valorant spielst und Zugriff auf den <#1168267887337816145> Channel haben möchtest.'}, //Valorant
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
                embeds: [rulesEmbed]
            });
            process.exit
        } catch (error) {
            console.log(error)
        }
    },
};