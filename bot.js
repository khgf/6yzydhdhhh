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


client.on('ready', function(){    

    var ms = 40000 ;    

    var setGame = ['by Fras#9999','-help'];    

    var i = -1;    

    var j = 0;    

    setInterval(function (){    

        if( i == -1 ){    

j = 1;    

       }    

        if( i == (setGame.length)-1 ){    

            j = -1;    

      }    

       i = i+j;    

        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    

}, ms);    

    

});


client.login('NTIyOTEwOTU2NDk0NTIwMzIy.Dw3EyA.cOueXzdzPpW4XRLP0_SXdehspu8');
