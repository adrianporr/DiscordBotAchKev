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

        if (!(role.id == "1167746037478326272")) {
            if (hasRole) { // Any role add and remove
                await interaction.member.roles.remove(role);
                interaction.editReply(`Die Rolle ${role} wurde entfernt!`)
            } else {
                await interaction.member.roles.add(role);
                interaction.editReply(`Du hast die Rolle ${role} erhalten!`)
            }
        } else {
            if (hasRole) { // Community role and rule accept
                interaction.editReply(`Du hast die Regeln bereits akzeptiert!`)
            } else {
                await interaction.member.roles.add(role);
                interaction.editReply(`Du hast die Regeln akzeptiert und die Rolle ${role} erhalten! Viel Spaß auf dem Server`)
            }
        }
        
        
    } catch (error) {
        console.log(error)
    }
});

client.login(process.env.KEV_BOT_TOKEN);