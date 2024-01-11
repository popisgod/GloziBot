

const commands = {
    'call' : (interaction) => {
        interaction.reply({content : `calling ${interaction.options.get('member').user.username}#${interaction.options.get('member').user.discriminator}`,
         ephemeral : true});
    },

}; 

module.exports = commands; 
