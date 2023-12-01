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
                id: "732652212303691812",
                label: "GTA V RP"
            },
            { // Valorant
                id: "571660165741543436",
                label: "Valorant"
            },
            { // Otaku
                id: "532530454717399040",
                label: "Otaku"
            },
        ]
        // Build embed
        const rulesEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('ROLLEN AUSWAHL')
            .addFields(
                { name: '\u200B', value: '<:twitch:404298367880003614> <@&483633437467738113>\n> Diese Rolle haben Streamer und YouTuber die hier bei uns sind. Diese Rolle erhält man nur auf Anfrage. Meldet euch hierzu bei jemandem unseres <@&490850011144257547>-Teams'}, //CC
                { name: '\u200B', value: '<:Otaku:1180150211545399368> <@&532530454717399040>\n> Fans, die ein großes Maß an Zeit für ihre Leidenschaft aufwenden und ihr mit großer Neigung nachgehen. Es wird ähnlich wie die englischen Wörter Nerd oder Geek benutzt..'}, //Otaku
                { name: '\u200B', value: '<:RP:1180149333681770536> <@&732652212303691812>\n> Falls du auch GTA V Roleplay spielst.'}, //GTAV
                { name: '\u200B', value: '<:valorant:1180151540242194533> <@&571660165741543436>\n> Falls du auch Valorant spielst und Zugriff auf den <#707966765920944168> Channel haben möchtest.'}, //Valorant
            )
        // Build message content and action row with buttons
        try {
            const channel = client.channels.cache.get('568395081191653376');
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