const { EmbedBuilder } = require("discord.js");


const commands = {
    'call' : (interaction) => {
        interaction.reply({ ephemeral: true, embeds: [
            new EmbedBuilder()
            .setDescription(`calling **${interaction.options.get('member').user.username}#${interaction.options.get('member').user.discriminator}**`)
            .setColor('Yellow') 
        ]}); 

        
    },

}; 

module.exports = commands; 
