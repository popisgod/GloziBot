require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name : 'call', 
        description : 'Call a member and ask them to join your call.', 
        options : [
            {
                name: 'member',
                description : 'Target @member',
                type : ApplicationCommandOptionType.User,
                required : true, 
            },
        ]
    },
];

const rest = new REST({ version : '10'  }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.
                GUILD_ID),
            { body: commands}
        );

        console.log('Slash commands were registerd successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();