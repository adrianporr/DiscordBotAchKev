const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bannt ein Mitglied vom Server!',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'target-user',
            description: 'Der User der gebannt werden soll',
            required: true,
            type: ApplicationCommandOptionType.Mentionable,

        },
        {
            name: 'reason',
            description: 'Der Grund weshalb der User gebannt werden soll',
            type: ApplicationCommandOptionType.String,

        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: ( client, interaction) => {
        interaction.reply('ban..');
    },
};