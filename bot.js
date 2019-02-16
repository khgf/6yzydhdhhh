const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('By Hamo');

});

const sWlc = {}

client.on('message', message => {

var prefix = "$";

if(message.channel.type === "dm") return;

if(message.author.bot) return;

  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {

    channel: "chat"

}

const channel = sWlc[message.guild.id].channel

  if (message.content.startsWith(prefix + "setwelcome")) {

    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;

    let newChannel = message.content.split(' ').slice(1).join(" ")

    if(!newChannel) return message.reply(`**$setwelcome رجاء كتابت اسم الروم**`)

    sWlc[message.guild.id].channel = newChannel

    message.channel.send(`**${newChannel} تم عمل الترحيب في روم ${message.guild.name}**`);

  }

});


client.login('process.BOT.TOKEN');
