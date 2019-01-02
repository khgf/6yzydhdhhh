client.on('ready', function(){    

    var ms = 40000 ;    

    var setGame = ['Test...'];    

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
