const { guildId } = require('../../config.json');

module.exports = async (client, guildlId) => {
    let applicationCommands;

    if(guildlId) {
        const guild = await client.guilds.fetch(guildId);
        applicationCommands = guild.commands;
    } else {
        applicationCommands = await client.application.commands;
    }

    await applicationCommands.fetch();
    return applicationCommands;
}