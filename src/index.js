/* imports */
const { Client, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
require('dotenv').config()

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
 });

eventHandler(client);

/*client.on('ready', () => {
    console.log(`${client.user.tag} has logged in!`);
});*/

client.on('interactionCreate', async (interaction ) => {
    try {
        if(!interaction.isButton()) return;
        await interaction.deferReply({ ephemeral: true });

        const role = interaction.guild.roles.cache.get(interaction.customId);
        if(!role) {
            interaction.editReply({
                content: "I couldn't find that role!"
            })
            return;
        }

        const hasRole = interaction.member.roles.cache.has(role.id);

        if (hasRole) {
            await interaction.editReply(`Du hast die Regeln bereits bestätigt!`);
            return;
        }

        await interaction.member.roles.add(role);
        await interaction.editReply(`Du hast die Regeln akeptiert! Dir wurde die Rolle ${role} erteilt! Viel Spaß!`);
    } catch (error) {
        console.log(error)
    }
});

















client.login(process.env.KEV_BOT_TOKEN);