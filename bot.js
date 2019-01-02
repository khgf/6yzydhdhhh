const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('وعليكم السلام ورحمة الله وبركاته');

  }

});


client.login('BOT_TOKEN');
