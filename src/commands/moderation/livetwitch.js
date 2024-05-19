const { ApiClient } = require('twitch');
const { ClientCredentialsAuthProvider } = require('twitch-auth');

const clientId = 'uqrtuw2o392erch33lqzc3iolykd4s';
const clientSecret = 'u8su9pqsdky6z2gn8b8uxow1nmkk6f';
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

const streamerName = 'achKev'; // Name des Streamers, den Sie überwachen möchten
let isLive = false;

setInterval(async () => {
    const user = await apiClient.helix.users.getUserByName(streamerName);
    if (!user) {
        console.log(`Streamer ${streamerName} not found`);
        return;
    }

    const stream = await apiClient.helix.streams.getStreamByUserId(user.id);
    if (stream && !isLive) {
        isLive = true;
        const channel = client.channels.cache.get('1219988835107209278'); // ID des Kanals, in dem die Nachricht gesendet werden soll
        channel.send(`${streamerName} is now live on Twitch! https://www.twitch.tv/${streamerName}`);
    } else if (!stream) {
        isLive = false;
    }
}, 60000); // Überprüft alle 60 Sekunden, ob der Streamer live ist