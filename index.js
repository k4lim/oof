var Discord = require('discord.js');
var bot = new Discord.Client();
var isReady = true;

bot.on('message', message => {
  if (isReady && message.content === '.oof') {
    var voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) {
      return message.reply("Join a voice channel before using that command.");
    }
  isReady = false;
  voiceChannel.join().then(connection => {
     const dispatcher = connection.playFile('./oof.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
});

bot.login('NTMwMDU5NTIyNjYwNzYxNjIy.Dw7RFA.LfLwySFPa7CJla2zzvUF7yeUtc0');
