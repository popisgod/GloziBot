require('dotenv').config();
const { EmbedBuilder } = require("discord.js");
const axios = require('axios');
const puppeteer = require('puppeteer');

const commands = {
    'call' : (interaction) => {
        MemberName = interaction.options.get('member').user.username; 
        MemberDiscriminator = (interaction.options.get('member')?.user.discriminator || 'none') !== '0'
        ? '#' + interaction.options.get('member')?.user.discriminator
        : '';
      
        interaction.reply({ ephemeral: true, embeds: [
            new EmbedBuilder()
            .setDescription(`calling **${MemberName}${MemberDiscriminator}**`)
            .setColor('Yellow')
        ]}); 
        
        console.log(interaction.options.get('member').user); 


    },

}; 

module.exports = commands; 
