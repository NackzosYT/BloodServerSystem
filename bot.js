const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
        const ms = require("ms");
const dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
let done = {};
const prefix = 'B'



client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__:white_check_mark:**")
              });
    }
       
});

client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});


client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`تم حذف جميع الرتب بنجاح`")
}// omar jedol / Codes
});



//////////////////////
/////مانع الجحفله/////
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);

} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 3;
 if(channelr[channelremover.id].deleted >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
  /////مانع الجحفله/////
  //////////////////////
  
  

const developers = ["525335066289635338"]
const adminprefix = "B";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**Status You ${argresult} **`)
}
});




client.on('message', message => {
  if (message.content.startsWith("Bavatar")) {
      var mentionned = message.mentions.users.first();
  var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;

    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
     }
});




        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})




const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[ ] ${client.users.size}`)
    client.user.setStatus("idle")
});
client.on('ready', () => {
     client.user.setActivity(".#BloodForEver",{type: 'Server'});

});

client.on('message', async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;
  const args = msg.content.split(' ');
  const searchString = args.slice(1).join(' ');
  const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(msg.guild.id);
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length)
  if (command === `play`) {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has('CONNECT')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }
    if (!permissions.has('SPEAK')) {
      return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
    }

    if (!permissions.has('EMBED_LINKS')) {
      return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **rl")
      }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, msg, voiceChannel, true);
      }
      return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
    } else {
      try {

        var video = await youtube.getVideo(url);

      } catch (error) {
        try {
                          var fast = {};
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          const embed1 = new Discord.RichEmbed()
              .setDescription(`**الرجآء من حضرتك إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index}**] **${video2.title}**`).join('\n')}`)
          .setFooter(`${msg.guild.name}`)
            .setThumbnail('https://e.top4top.net/p_1001lsv3w1.png')

          msg.channel.sendEmbed(embed1).then(message =>{

            message.delete(15000)

          });
          try {
            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 20000,
              errors: ['time']
            })

            }catch(err) {
            console.error(err);
            return msg.channel.send('لم يتم إختيآر مقطع صوتي');
            }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send(':x: لا يتوفر نتآئج بحث ');
        }
    }

      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === `skip`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
    serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
    return undefined;
  } else if (command === `stop`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
    return undefined;
  } else if (command === `vol`) {
    if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
    if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
    if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
    return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
  } else if (command === `np`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
    return msg.channel.sendEmbed(embedNP);
  } else if (command === `replay`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    const embedNP = new Discord.RichEmbed()
  .setDescription(`سيتم اعاده تشغيل الفديو :**${serverQueue.songs[0].title}**`)
  msg.channel.send({embed: embedNP})
     return handleVideo(video, msg, msg.member.voiceChannel);

  } else if (command === `queue`) {
    if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
    let index = 0;
    const embedqu = new Discord.RichEmbed()
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
    return msg.channel.sendEmbed(embedqu);
  } else if (command === `pause`) {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
    }
    return msg.channel.send('لا يوجد شيء حالي ف العمل.');
  } else if (command === "resume") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
    }
    return msg.channel.send('لا يوجد شيء حالي في العمل.');
  }

  return undefined;
async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`,
    time:`${video.duration.hours}:${video.duration.minutes}:${video.duration.seconds}`,
    eyad:`${video.thumbnails.high.url}`,
    best:`${video.channel.title}`,
    bees:`${video.raw.snippet.publishedAt}`,
    shahd:`${video.raw.kind}`,
    zg:`${video.raw.snippet.channelId}`,
        views:`${video.raw.views}`,
        like:`${video.raw.likeCount}`,
        dislike:`${video.raw.dislikeCount}`,
        hi:`${video.raw.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I could not join the voice channel: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);
  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', reason => {
      if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    fetchVideoInfo(`${song.hi}`, function (err,  idk) {
  if (err) throw new Error(err);
  console.log( idk);
      const yyyy = {}
  if(!yyyy[msg.guild.id]) yyyy[msg.guild.id] = {
    like: `${ idk.likeCount}`,
    dislike: `${ idk.dislikeCount}`
  }
  serverQueue.textChannel.send({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
  }).then(love => {
    love.react('👍').then(r=>{
    love.react('👎').then(r =>{
    love.react('🙌').then(r=> {
    let likee = (reaction, user) => reaction.emoji.name === '👍' && user.id === msg.author.id;
    let dislikee = (reaction, user) => reaction.emoji.name === '👎' && user.id === msg.author.id;
    let cnn = (reaction, user) => reaction.emoji.name === '🙌' && user.id === msg.author.id;

    let ll = love.createReactionCollector(likee , {max:5});
    let dd = love.createReactionCollector(dislikee , {max:5});
    let cn = love.createReactionCollector(cnn , {max:5});

        ll.on("collect", r => {
          yyyy[msg.guild.id].like++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${yyyy[msg.guild.id].like}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
    })

    dd.on("collect", r => {
      yyyy[msg.guild.id].dislike++;
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${yyyy[msg.guild.id].dislike}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
    cn.on("collect", r => {
  love.edit({embed : new Discord.RichEmbed()
  .setTitle(`**${ idk.title}**`)
  .setURL( idk.url)
  .addField('Time The Video :' , `${song.time}`, true)
  .addField('Channel Name :' , `${song.best}`, true)
  .addField('Channel ID :' , `${song.zg}`, true)
  .addField('Video Created at :' , `${ idk.datePublished}`, true)
  .addField('Views :' , `${ idk.views}`, true)
  .addField('Like👍 :' , `${ idk.likeCount}`, true)
  .addField('dislike👎 :' , `${ idk.dislikeCount}`, true)
  .addField('comments :' , `${ idk.commentCount}`, true)
  .setImage(`${song.eyad}`)
  .setThumbnail('http://cdn.akhbaar24.com/430e061a-f89a-43c7-86d9-82fae5f7c495.jpg')
  .setColor('#ff0000')
  .setTimestamp()
});
})
})
})
})
})
})
}
});





client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "BD");
   member.addRole (role);
  
})

client.on ("guildMemberRemove", member => {
   
})


	  




client.on("message", message => {
    if (message.content.startsWith("Bbc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online



  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "Bobc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });




//////////////
//////////////log///////////


let bane = JSON.parse(fs.readFileSync("./bcer.json", "utf8"));
let banse = new Set();
client.on('guildBanAdd', function(guild) {
  guild.fetchAuditLogs().then(logs => {
    const ser = logs.entries.first().executor;
    if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
      bans: 0
    }
    let boner = bane[ser.id+guild.id]
banse.add(ser.id)
boner.bans = Math.floor(boner.bans+1)


setTimeout(() => {
  boner.bans = 0
  banse.delete(ser.id)
},8000)

if(boner.bans > 3) {
  let roles = guild.members.get(ser.id).roles.array()
guild.members.get(ser.id).removeRoles(roles)
}

    })
    fs.writeFile('./bcer.json', JSON.stringify(bane), (err) => {
if (err) console.error(err);
})

})

client.on('messageDelete', message => {

	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = message.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	let messageDelete = new Discord.RichEmbed()
	.setTitle('**[MESSAGE DELETE]**')
	.setColor('RED')
	.setThumbnail(message.author.avatarURL)
	.setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
	.setTimestamp()
	.setFooter(message.guild.name, message.guild.iconURL)

	logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {

	if(oldMessage.author.bot) return;
	if(!oldMessage.channel.type === 'dm') return;
	if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldMessage.content.startsWith('https://')) return;

	let messageUpdate = new Discord.RichEmbed()
	.setTitle('**[MESSAGE EDIT]**')
	.setThumbnail(oldMessage.author.avatarURL)
	.setColor('BLUE')
	.setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
	.setTimestamp()
	.setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)

	logChannel.send(messageUpdate);
});


client.on('roleCreate', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleCreate = new Discord.RichEmbed()
		.setTitle('**[ROLE CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleCreate);
	})
});
client.on('roleDelete', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleDelete = new Discord.RichEmbed()
		.setTitle('**[ROLE DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleDelete);
	})
});
client.on('roleUpdate', (oldRole, newRole) => {

	if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldRole.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldRole.name !== newRole.name) {
			let roleUpdateName = new Discord.RichEmbed()
			.setTitle('**[ROLE NAME UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateName);
		}
		if(oldRole.hexColor !== newRole.hexColor) {
			if(oldRole.hexColor === '#000000') {
				var oldColor = '`Default`';
			}else {
				var oldColor = oldRole.hexColor;
			}
			if(newRole.hexColor === '#000000') {
				var newColor = '`Default`';
			}else {
				var newColor = newRole.hexColor;
			}
			let roleUpdateColor = new Discord.RichEmbed()
			.setTitle('**[ROLE COLOR UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateColor);
		}
	})
});


client.on('channelCreate', channel => {

	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelCreate = new Discord.RichEmbed()
		.setTitle('**[CHANNEL CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelCreate);
	})
});
client.on('channelDelete', channel => {
	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelDelete = new Discord.RichEmbed()
		.setTitle('**[CHANNEL DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelDelete);
	})
});
client.on('channelUpdate', (oldChannel, newChannel) => {
	if(!oldChannel.guild) return;

	var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldChannel.type === 'text') {
		var channelType = 'Text';
	}else
	if(oldChannel.type === 'voice') {
		var channelType = 'Voice';
	}else
	if(oldChannel.type === 'category') {
		var channelType = 'Category';
	}

	oldChannel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldChannel.name !== newChannel.name) {
			let newName = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newName);
		}
		if(oldChannel.topic !== newChannel.topic) {
			let newTopic = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newTopic);
		}
	})
});


client.on('guildBanAdd', (guild, user) => {

	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let banInfo = new Discord.RichEmbed()
		.setTitle('**[BANNED]**')
		.setThumbnail(userAvatar)
		.setColor('DARK_RED')
		.setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(banInfo);
	})
});
client.on('guildBanRemove', (guild, user) => {
	if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(userID === client.user.id) return;

		let unBanInfo = new Discord.RichEmbed()
		.setTitle('**[UNBANNED]**')
		.setThumbnail(userAvatar)
		.setColor('GREEN')
		.setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setTimestamp()
		.setFooter(guild.name, guild.iconURL)

		logChannel.send(unBanInfo);
	})
});
client.on('guildUpdate', (oldGuild, newGuild) => {

	if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldGuild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldGuild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldGuild.name !== newGuild.name) {
			let guildName = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD NAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(newGuild.name, oldGuild.iconURL)

			logChannel.send(guildName)
		}
		if(oldGuild.region !== newGuild.region) {
			let guildRegion = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD REGION]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(guildRegion);
		}
		if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
			if(oldGuild.verificationLevel === 0) {
				var oldVerLvl = 'Very Easy';
			}else
			if(oldGuild.verificationLevel === 1) {
				var oldVerLvl = 'Easy';
			}else
			if(oldGuild.verificationLevel === 2) {
				var oldVerLvl = 'Medium';
			}else
			if(oldGuild.verificationLevel === 3) {
				var oldVerLvl = 'Hard';
			}else
			if(oldGuild.verificationLevel === 4) {
				var oldVerLvl = 'Very Hard';
			}

			if(newGuild.verificationLevel === 0) {
				var newVerLvl = 'Very Easy';
			}else
			if(newGuild.verificationLevel === 1) {
				var newVerLvl = 'Easy';
			}else
			if(newGuild.verificationLevel === 2) {
				var newVerLvl = 'Medium';
			}else
			if(newGuild.verificationLevel === 3) {
				var newVerLvl = 'Hard';
			}else
			if(newGuild.verificationLevel === 4) {
				var newVerLvl = 'Very Hard';
			}

			let verLog = new Discord.RichEmbed()
			.setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild Verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(verLog);
		}
	})
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	if(!oldMember.guild) return;

	var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;
		var userTag = logs.entries.first().executor.tag;

		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '`اسمه الاصلي`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '`اسمه الاصلي`';
			}else {
				var newNM = newMember.nickname;
			}

			let updateNickname = new Discord.RichEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();

			let roleAdded = new Discord.RichEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();

			let roleRemoved = new Discord.RichEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleRemoved);
		}
	})
	if(oldMember.guild.owner.id !== newMember.guild.owner.id) {
		let newOwner = new Discord.RichEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL)
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

		logChannel.send(newOwner);
	}
});





   client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail.com')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat.com')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram.com')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter.com')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook.com')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube.com')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }
 
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});


//////////////log//////////////





const temp = JSON.parse(fs.readFileSync('./temp.json', 'utf8'));
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('Btemp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === 'Btemp off') {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**Done ,**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
         fs.writeFile("./temp.json", JSON.stringify(temp), (err) => {
        if(err) console.error(err)
       })
      });
	  
	  
	  
	  
	  
	  
	  




let points = {}

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
points: 0,
};
if (message.content.startsWith(prefix + 'فكك')) {
if(!message.channel.guild) return message.reply('**لا تلعب عندي العب بالسيرفرات**').then(m => m.delete(3000));

const type = require('./gamesbombot/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**الحق عندك 15 ثانية**').then(msg => {


msg.channel.send(`${item.type}`).then(() => {
 message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
 .then((collected) => {
 message.channel.send(`${collected.first().author} ✅ أصلي عليك`);
     let points = {}
     let userData = points[message.author.id];
     let userdata = require('./Points.json');
     userData.points++;
   })
   .catch(collected => {
     message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
   })
 })
})
}
});

client.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;
let messageArray = message.content.split (" ");
let args = messageArray.slice(1);

if (message.content.startsWith(prefix + "8ball")) {


if(!args[1]) return message.reply("?");
let replies = ["يب", "لا.", "ما بعرف.", "اسالني لاحقا لو سمحت"];

let result = Math.floor((Math.random() * replies.length));
let question = args.slice(1).join(" ");

message.channel.sendMessage(`${replies[Math.floor(Math.random() * replies.length)]}`);   ///Alpha Codes
            if (!args[0]) {
       message.edit('1')
       return;
     }
 }
});



client.on('message', message => {
if(message.content.startsWith("Bslots")) {
let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot2 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slot3 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
we = "😀لقد ربحت يا بطل😀"
} else {
we = "😣لقد خسرت حظ آوفر😣"
}
message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});





client.on('message', message => {
if(message.content.startsWith("Bحجرة")) {
let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮ألعب مرة آخرى🎮"
} else {
we = "😣لقد خسرت حظ آوفر😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});



client.on('message', message => {
if(message.content.startsWith("Bورقة")) {
let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮ألعب مرة آخرى🎮"
} else {
we = "😣لقد خسرت حظ آوفر😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});

client.on('message', message => {
if (message.content === "Bserver") {
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setThumbnail(message.author.avatarURL)
.setTitle(`info about ${message.guild.name}`)
.addField(' 🆔 Server ID',`➥` + message.guild.id, true)
.addField(" 👑 Owned by",`➥ ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField(" 🌍 Server Region",`➥ ` + message.guild.region, true)
.addField(" 👥 Server Member Size",`➥ ` + message.guild.memberCount, true)
.addField(' 💬 Channels ', `➥ **${message.guild.channels.filter(m => m.type === 'text').size}** + ' text | Voice  '+ **${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
.addField(" 🔐 Roles ", `➥ ${message.guild.roles.size} Role`,true)
.addField(" 📅 Created On", `➥ ${message.guild.createdAt.toLocaleString()}`,true)
.addField(" 💤 AFK channel",`➥ ` + message.guild.afkChannel || 'Null', true)
.setTimestamp()
.setFooter(message.author.tag, message.author.avatarURL)


message.channel.sendEmbed(embed);
}
});




client.on('message', message => {
if(message.content.startsWith("Bمقص")) {
let slot1 = ['✂ورقة📄', '🗿حجرة🗿', '✂مقص📄'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1) {
we = "🎮ألعب مرة آخرى🎮"
} else {
we = "😣لقد خسرت حظ آوفر😣"
}
message.channel.send(`${slots1} - ${we}`)
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
points: 0,
};
if (message.content.startsWith(prefix + 'عواصم')) {
if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/3awasem.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**👑لديك 15 ثانية للإجابة على السؤال!👑**').then(msg => {


msg.channel.send(`${item.type}`).then(() => {
 message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
 .then((collected) => {
 message.channel.send(`${collected.first().author} ✅ **الإجابة صحيحة بطل**`);
 console.log(`[Typing] ${collected.first().author} typed the word.`);
     let points = {}
     let userData = points[message.author.id];
     let userdata = require('./points.json');
     userData.points++;
   })
   .catch(collected => {
     message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
   })
 })
})
}
});









client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
points: 0,
};
if (message.content.startsWith(prefix + 'لغز')) {
if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**👑لديك 30 ثانية لحل هذا الغز👑**').then(msg => {


msg.channel.send(`${item.type}`).then(() => {
 message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
 .then((collected) => {
 message.channel.send(`${collected.first().author} ✅ **الجواب صحيح صح عليك**`);
 console.log(`[Typing] ${collected.first().author} typed the word.`);
     let points = {}
     let userData = points[message.author.id];
     let userdata = require('./points.json');
     userData.points++;
   })
   .catch(collected => {
     message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
   })
 })
})
}
});








       client.on('message', message => {
         if (!points[message.author.id]) points[message.author.id] = {
           points: 0,
           };
         if (message.content.startsWith(prefix + 'ركب')) {
           if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

         const type = require('./gamesbombot/RKB.json');
         const item = type[Math.floor(Math.random() * type.length)];
         const filter = response => {
             return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
         };
         message.channel.send('**لديك 20 ثانيه لتركيب الكلمه**').then(msg => {


         msg.channel.send(`${item.type}`).then(() => {
                 message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
                 .then((collected) => {
             message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من تركيب الكلمه بسرعه**`);
             console.log(`[Typing] ${collected.first().author} typed the word.`);
                     let won = collected.first().author;
                     points[won.id].points++;
                   })
                   .catch(collected => {
                     message.channel.send(`:x: **لم يتمكن احد من تركيب الكلمه في الوقت المناسب**`);
               console.log('[Typing] Error: No one type the word.');
                   })
             })
           })
         }
         });




     client.on('message', message => {
     if (!points[message.author.id]) points[message.author.id] = {
         points: 0,
       };
     if (message.content.startsWith(prefix + 'شقلب')) {
         if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

     const type = require('./gamesbombot/SHAKLEB.json');
     const item = type[Math.floor(Math.random() * type.length)];
     const filter = response => {
         return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
     };
     message.channel.send('**لديك 15 ثانيه لشقلبة الكلمه**').then(msg => {


     msg.channel.send(`${item.type}`).then(() => {
             message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
             .then((collected) => {
             message.channel.send(`${collected.first().author} ✅ **احسنت,لقد تمكنت من شقلبة الكلمة في الوقت المناسب**`);
             console.log(`[Typing] ${collected.first().author} typed the word.`);
                 let won = collected.first().author;
                 points[won.id].points++;
               })
               .catch(collected => {
                 message.channel.send(`:x: **لم يتمكن احد من شقلبة الكلمه في الوقت المناسب**`);
                 console.log('[Typing] Error: No one type the word.');
               })
             })
         })
     }
     });

	 
	 
	 
	 












client.on('message',async message => {
    if(message.content.startsWith(prefix + "setVoice")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`\`\UNOnline -> [ ${message.guild.members.filter(m => m.voiceChannel).size} ], 🔊` , 'voice').then(c => {
      console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`\`\UNOnline -> [ ${message.guild.members.filter(m => m.voiceChannel).size} ], 🔊`)
      },1000);
    });
    }
  });

  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setCount")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel(`\`\UNMembers -> [ ${message.guild.members.size} ], 🌹 ` , 'voice').then(c => {
      console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`\`\UNMembers -> [ ${message.guild.members.size} ], 🌹`)
      },1000);
    });
    }
  });


  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setTime")) {
    if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
      console.log(`Time channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
          setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }

        c.setName("🕐 - Time   「" + hours + ":" + minutes  +" " + suffix + "」");
      },1000);
    });
    }
  });



  client.on('message',async message => {
    if(message.content.startsWith(prefix + "setDate")) {
        var currentTime = new Date(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        week = currentTime.getDay();
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
    message.channel.send('✅| **تم عمل الروم بنجاح**');
    message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
      console.log(`Date channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
      },1000);
    });
    }
  });

  client.on('message',async message => {
    var moment = require('moment');
      if(message.content.startsWith(prefix + "setDays")) {
      if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
      if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
      message.channel.send('✅| **تم عمل الروم بنجاح**');
      message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
        console.log(`Day channel setup for guild: \n ${message.guild.name}`);
        c.overwritePermissions(message.guild.id, {
          CONNECT: false,
          SPEAK: false
        });
        setInterval(function() {
          c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
        },1000);
      });
      }
    });










client.on('message', message => {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");

message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لعقوبات")
              client.channels.find('name', 'reports').send(Rembed);
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});







client.on('message', message => {
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    };
  if (message.content.startsWith(prefix + 'اسرع')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

  const type = require('./gamesbombot/type.json');
  const item = type[Math.floor(Math.random() * type.length)];
  const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };
  message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {


  msg.channel.send(`${item.type}`).then(() => {
          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
          .then((collected) => {
      message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
      console.log(`[Typing] ${collected.first().author} typed the word.`);
              let won = collected.first().author;
              points[won.id].points++;
            })
            .catch(collected => {
              message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
        console.log('[Typing] Error: No one type the word.');
            })
      })
    })
  }
  });
  
  



 client.on('message', function(message) {
     if(message.content.startsWith(prefix + 'قرعة')) {
         let args = message.content.split(" ").slice(1);
         if (!args[0]) {
             message.channel.send('**حط رقم معين يتم السحب منه**');
             return;
             }
     message.channel.send(Math.floor(Math.random() * args.join(' ')));
             if (!args[0]) {
           message.edit('1')
           return;
         }
     }
 });



 client.on('message', message => {
 if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
   };
 if (message.content.startsWith(prefix + 'رياضيات')) {
     if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

 const type = require('./gamesbombot/ryd.json');
 const item = type[Math.floor(Math.random() * type.length)];
 const filter = response => {
     return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
 };
 message.channel.send('**👑لديك 30 ثانية يلا ركز يا بطل👑**').then(msg => {


 msg.channel.send(`${item.type}`).then(() => {
         message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
         .then((collected) => {
         message.channel.send(`${collected.first().author} ✅ **والله أنك ذكي وحش يا بطل**`);
         console.log(`[Typing] ${collected.first().author} typed the word.`);
             let points = {}
             let userData = points[message.author.id];
             let userdata = require('./points.json');
             userData.points++;
           })
           .catch(collected => {
             message.channel.send(`🕓😀أنتهى الوقت أعد العب مرة آخرى😀🕓`);
           })
         })
     })
 }
 });



                 client.on('message', message => {
                   if (!points[message.author.id]) points[message.author.id] = {
                     points: 0,
                     };
                   if (message.content.startsWith(prefix + 'كتابة')) {
                     if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

                   const type = require('./gamesbombot/type.json');
                   const item = type[Math.floor(Math.random() * type.length)];
                   const filter = response => {
                       return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                   };
                   message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {


                   msg.channel.send(`${item.type}`).then(() => {
                           message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                           .then((collected) => {
                       message.channel.send(`${collected.first().author} ✅ **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                       console.log(`[Typing] ${collected.first().author} typed the word.`);
                               let won = collected.first().author;
                               points[won.id].points++;
                             })
                             .catch(collected => {
                               message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                         console.log('[Typing] Error: No one type the word.');
                             })
                       })
                     })
                   }
                   });
 
 const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('Bصراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",

]


 client.on('message', message => {
   if (message.content.startsWith("Bعقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Blood System ♧' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});





 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
     '‏كت تويت | هل تفضل الافلام ولا المسلسلات ؟',
     '‏كت تويت | وش افضل قناة تتابعها في اليوتيوب ؟',
     '‏كت تويت | وش افضل لعبة ممكن تلعبها  ؟',
     '‏كت تويت | وش تتباع اكثر افلام اجنبي ام عربي ؟',
     '‏كت تويت | مو لاقي سؤال اسئله لك :joy:',
]

 client.on('message', message => {
   if (message.content.startsWith("Bكت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.",
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
  "**المناقشات العقيمة لا تنجب افكارا**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
]


 client.on('message', message => {
   if (message.content.startsWith("Bخواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL)
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
    








    client.on("message", message => {
          if (message.content === "Bhelp") {
        message.author.send(`**
:record_button: ~~__**Create a room named log to start the log**__~~ :record_button:
 
:fire: __Action Commands:__
❯ ${prefix}new → create ticket for you (need support-team role)
❯ ${prefix}close → close the ticket
❯ ${prefix}tickle → tickle someone
❯ ${prefix}poke → poke someone
❯ ${prefix}cuddle → cuddle someone
❯ ${prefix}pat → cuddle someone

:video_game: __Game Commands:__
❯ ${prefix}xo → xo game
❯ ${prefix}صراحه → Frankly Game
❯ ${prefix}عواصم → Capitals Game
❯ ${prefix}حجرة أو ورقة أو مقص → Paper scissors game
❯ ${prefix}كت تويت → Tweets Game
❯ ${prefix}لو خيروك → If they made you choose game
❯ ${prefix}قرعة → Lot game
❯ ${prefix}فكك → Decrypt game
❯ ${prefix}لغز → Gas game
❯ ${prefix}شقلب → Chuckle game
❯ ${prefix}اسرع → The fastest writing game
❯ ${prefix}ركب → Synthesis assembly game
❯ ${prefix}رياضيات → Math game

:globe_with_meridian
s: __General Commands:__
❯ ${prefix}8ball → Ask magic 8ball something
❯ ${prefix}avatar → Shows yours or the user avatar


:information_source: __Info Commands:__
❯ ${prefix}server → Shows informations about the server.
❯ ${prefix}userinfo → Shows informations about the user.
**        `)
              message.channel.send(":white_check_mark: I've DMed you with my help list")
          }
          });
        



      client.on("message", message => {
          if (message.content === "Bhelp") {
            
        message.author.send(`**
:wrench: __Moderation Commands:__ (ban , mute , warn need channel with incidents channel!)
❯ ${prefix}setwelcomer → To setwelcome channel
❯ ${prefix}autorole → autorole options **(to set the role type ${prefix}autorole set rolename
and to turn on the autorole type ${prefix}autorole toggle)** 
❯ ${prefix}prune → To clear the chat (you can use ${prefix}clear)
❯ ${prefix}bans → Shows a bans size
❯ ${prefix}ban → To ban a member **Permanently**
❯ ${prefix}role → To give someone a role (you can use ${prefix}role all to give everyone the rank of your choice)
❯ ${prefix}-role → To Pull the rank of a particular person (you can use ${prefix}-role all to Pull everyone the rank of your choice)
❯ ${prefix}temp on → To Turn on the temporary rooms 
❯ ${prefix}temp off → To Turn off the temporary rooms 
❯ ${prefix}tempban → To ban a member **Temporary**
❯ ${prefix}mute → To mute a member **Temporary**
❯ ${prefix}tempmute → To mute a member **Temporary**
❯ ${prefix}kick → To kick a member
❯ ${prefix}unban → Unban member by id
❯ ${prefix}unmute → Unmutes a member
❯ ${prefix}warn → Warns a member
❯ ${prefix}setTime → Create Hour Room 
❯ ${prefix}setDate → Create Date Room 
❯ ${prefix}setDays → Create Day Room 
❯ ${prefix}setCount → Member Count Room 
❯ ${prefix}setVoice → Create Voice Online Room 
Bhchannel - اخفاء الشات
Bschannel - اضهار الشات المخفية

Bmutechannel - تقفيل الشات
Bunmutechannel - فتح الشات

:barber: __Colors Commands:__
❯ ${prefix}deletecolors → delete 132 colors
❯ ${prefix}createcolors → create 132 colors
❯ ${prefix}colors → View the colors menu
❯ ${prefix}colors → To give the color you want
**
        `)
        }
        });

















////colors/////


client.on('message', message => {
let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == 'لون'){
const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


var a = message.guild.roles.find("name",`${args}`)
 if(!a)return;
const embed = new Discord.RichEmbed()

.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Done , تم تغيير لونك . :white_check_mark: **`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
if (!args)return;
setInterval(function(){})
   let count = 0;
   let ecount = 0;
for(let x = 1; x < 201; x++){

message.member.removeRole(message.guild.roles.find("name",`${x}`))

}
 message.member.addRole(message.guild.roles.find("name",`${args}`));


}
});



client.on('message', message => {
if(message.content.split(' ')[0] == 'الوان'){
  if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
let menu = new Discord.RichEmbed()
.setImage('https://b.top4top.net/p_1002p20mv1.png')
.setFooter('Colors Menu')
message.channel.sendEmbed(menu)




client.on('message', message => {
  if(message.content === prefix + 'createcolors') {
                       if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
       if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
    message.guild.createRole({
                name: "1",
                  color: "#FFB6C1",
                  permissions: []
   })
         message.guild.createRole({
                name: "2",
                  color: "#FFC0CB",
                  permissions: []
   })
              message.guild.createRole({
                name: "3",
                  color: "#FF69B4",
                  permissions: []
   })
                   message.guild.createRole({
                name: "4",
                  color: "#FF1493",
                  permissions: []
   })
                   message.guild.createRole({
                name: "5",
                  color: "#DB7093",
                  permissions: []
   })
                   message.guild.createRole({
                name: "6",
                  color: "#C71585",
                  permissions: []
   })
                   message.guild.createRole({
                name: "7",
                  color: "#E6E6FA",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#D8BFD8",
                  permissions: []
   })
                   message.guild.createRole({
                name: "8",
                  color: "#DDA0DD",
                  permissions: []
   })
                   message.guild.createRole({
                name: "9",
                  color: "#DA70D6",
                  permissions: []
   })
                   message.guild.createRole({
                name: "10",
                  color: "#EE82EE",
                  permissions: []
   })
                   message.guild.createRole({
                name: "11",
                  color: "#FF00FF",
                  permissions: []
   })
                   message.guild.createRole({
                name: "12",
                  color: "#BA55D3",
                  permissions: []
   })
                   message.guild.createRole({
                name: "13",
                  color: "#9932CC",
                  permissions: []
   })
                        message.guild.createRole({
                name: "14",
                  color: "#9400D3",
                  permissions: []
   })
                        message.guild.createRole({
                name: "15",
                  color: "#8A2BE2",
                  permissions: []
   })
                             message.guild.createRole({
                name: "16",
                  color: "#8B008B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "17",
                  color: "#800080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "18",
                  color: "#9370DB",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "19",
                  color: "#7B68EE",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "20",
                  color: "#6A5ACD",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "21",
                  color: "#483D8B",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "22",
                  color: "#663399",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "23",
                  color: "#4B0082",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "24",
                  color: "#FFA07A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "25",
                  color: "#FA8072",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "26",
                  color: "#E9967A",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "27",
                  color: "#F08080",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "28",
                  color: "#CD5C5C",
                  permissions: []
   })
                                  message.guild.createRole({
                name: "29",
                  color: "#DC143C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "30",
                  color: "	#FF0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "31",
                  color: "#B22222",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "32",
                  color: "#8B0000",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "33",
                  color: "#FFA500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "34",
                  color: "#FF8C00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "35",
                  color: "#FF7F50",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "36",
                  color: "#FF6347",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "37",
                  color: "#FF4500",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "38",
                  color: "#FFD700",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "39",
                  color: "#FFFFE0",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "40",
                  color: "#FFFACD",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "41",
                  color: "#FAFAD2",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "42",
                  color: "	#FFEFD5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "43",
                  color: "#FFE4B5",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "44",
                  color: "#FFDAB9",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "45",
                  color: "#EEE8AA",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "46",
                  color: "#F0E68C",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "47",
                  color: "#BDB76B",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "48",
                  color: "#ADFF2F",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "49",
                  color: "#7FFF00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "50",
                  color: "#7CFC00",
                  permissions: []
   })
                                       message.guild.createRole({
                name: "51",
                  color: "#00FF00",
                  permissions: []
   })  
   
                                       message.guild.createRole({
                name: "52",
                  color: "#32CD32",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "53",
                  color: "#98FB98",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "54",
                  color: "#90EE90",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "55",
                  color: "#00FA9A",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "56",
                  color: "#00FF7F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "57",
                  color: "#3CB371",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "58",
                  color: "#2E8B57",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "59",
                  color: "#2E8B57",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "60",
                  color: "#008000",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "61",
                  color: "#006400",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "62",
                  color: "#9ACD32",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "63",
                  color: "#6B8E23",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "64",
                  color: "#556B2F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "65",
                  color: "#66CDAA",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "66",
                  color: "#8FBC8F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "67",
                  color: "#20B2AA",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "68",
                  color: "#008B8B",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "69",
                  color: "#008080",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "70",
                  color: "#00FFFF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "71",
                  color: "#E0FFFF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "72",
                  color: "#AFEEEE",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "73",
                  color: "#7FFFD4",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "74",
                  color: "#40E0D0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "75",
                  color: "#48D1CC",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "76",
                  color: "#00CED1",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "77",
                  color: "#5F9EA0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "78",
                  color: "#4682B4",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "79",
                  color: "#B0C4DE",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "80",
                  color: "#ADD8E6",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "81",
                  color: "#B0E0E6",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "82",
                  color: "#87CEFA",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "83",
                  color: "#87CEEB",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "84",
                  color: "#6495ED",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "85",
                  color: "#00BFFF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "86",
                  color: "#1E90FF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "87",
                  color: "#4169E1",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "88",
                  color: "#0000FF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "89",
                  color: "#0000CD",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "90",
                  color: "#00008B",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "91",
                  color: "#000080",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "92",
                  color: "#191970",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "93",
                  color: "#FFF8DC",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "94",
                  color: "#FFEBCD",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "95",
                  color: "#FFE4C4",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "96",
                  color: "#FFDEAD",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "97",
                  color: "#F5DEB3",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "98",
                  color: "#DEB887",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "99",
                  color: "#D2B48C",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "100",
                  color: "#BC8F8F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "101",
                  color: "#F4A460",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "102",
                  color: "#DAA520",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "103",
                  color: "#B8860B",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "104",
                  color: "#CD853F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "105",
                  color: "#D2691E",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "106",
                  color: "#808000",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "107",
                  color: "#8B4513",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "108",
                  color: "#A0522D",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "109",
                  color: "#A52A2A",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "110",
                  color: "#800000",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "111",
                  color: "#FFFFFF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "112",
                  color: "#FFFAFA",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "113",
                  color: "#F0FFF0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "114",
                  color: "#F5FFFA",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "115",
                  color: "#F0FFFF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "116",
                  color: "#F0F8FF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "117",
                  color: "#F8F8FF",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "118",
                  color: "#F5F5F5",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "119",
                  color: "#FFF5EE",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "120",
                  color: "#F5F5DC",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "121",
                  color: "#FDF5E6",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "122",
                  color: "#FFFAF0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "123",
                  color: "#FFFFF0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "124",
                  color: "#FAEBD7",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "125",
                  color: "#FAF0E6",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "126",
                  color: "#FFF0F5",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "127",
                  color: "#FFE4E1",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "128",
                  color: "#DCDCDC",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "129",
                  color: "#D3D3D3",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "130",
                  color: "#C0C0C0",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "131",
                  color: "#f7f7f7",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "132",
                  color: "#b2b2b2",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "133",
                  color: "#6f6c6c",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "134",
                  color: "#4d4646",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "135",
                  color: "#4c4c4c",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "136",
                  color: "#2F4F4F",
                  permissions: []
   })     
                                       message.guild.createRole({
                name: "137",
                  color: "#040000",
                  permissions: []
   })     

   
        message.channel.sendMessage({embed: new Discord.RichEmbed()
   .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
  }




client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '1');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '2');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '3');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '4');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '5');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '6');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '7');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '8');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '9');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '10');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '11');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '12');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '13');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '14');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '15');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '16');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '17');
  
  role.delete()
  }

});



client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '18');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '19');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '20');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("+!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '21');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '22');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '23');
  
  role.delete()
  }

});



client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '24');
  
  role.delete()
  }

});



client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '25');
  
  role.delete()
  }

});



client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '26');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '27');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '28');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '29');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '30');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '31');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '32');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '33');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '34');
  
  role.delete()
  }

});


client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '35');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '36');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '37');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '38');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '39');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '40');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '41');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '42');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '43');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '44');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '45');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '46');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '47');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '48');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '49');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '50');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '51');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '52');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '53');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '54');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '55');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '56');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '57');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '58');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '59');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '60');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '-61');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '62');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '63');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '64');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '65');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '66');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '67');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '68');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '69');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '70');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '71');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '72');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '73');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '74');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '75');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '76');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '77');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '78');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '79');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '80');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '81');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '82');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '83');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '84');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '85');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '86');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '87');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '88');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '89');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '90');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '91');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '92');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '93');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '94');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '95');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '96');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith ("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '97');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '98');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '99');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '100');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '101');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '102');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '103');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '104');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '105');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith ("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '106');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '107');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '108');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '109');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '110');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '111');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '112');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '113');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '114');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '115');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '116');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '117');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '118');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '119');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '121');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '122');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("!deletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '123');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '124');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '125');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '126');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '127');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '128');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '129');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '130');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '131');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '132');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '133');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '134');
  
  role.delete()
  }

});
client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '135');
  
  role.delete()
  }

});

client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '136');
  
  role.delete()
  }

});



client.on('message', async message => {
  
    let args = message.content.split(' ').slice(1);
if (message.content.startsWith("Bdeletecolors")) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  let role = message.guild.roles.find('name', '137');
  
  role.delete()
  }

});
})
}})

////////////colors////


client.on("message", (message) => {

  if(message.content.startsWith(`${prefix}new`)){
     const reason = message.content.split(" ").slice(1).join(" ");
     if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
     if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
     message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
         let role = message.guild.roles.find("name", "Support Team");
         let role2 = message.guild.roles.find("name", "@everyone");
         c.overwritePermissions(role, {
             SEND_MESSAGES: true,
             READ_MESSAGES: true
         });
         c.overwritePermissions(role2, {
             SEND_MESSAGES: false,
             READ_MESSAGES: false
         });
         c.overwritePermissions(message.author, {
             SEND_MESSAGES: true,
             READ_MESSAGES: true
         });
         message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
         const embed = new Discord.RichEmbed()
             .setColor(0xCF40FA)
             .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
             .setTimestamp();
         c.send({
             embed: embed
         });
     }).catch(console.error);
 }


  if(message.content.startsWith(`${prefix}close`)){
     if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

     message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`/close\`. This will time out in 10 seconds and be cancelled.`)
         .then((m) => {
             message.channel.awaitMessages(response => response.content === 'Bclose', {
                     max: 1,
                     time: 10000,
                     errors: ['time'],
                 })
                 .then((collected) => {
                     message.channel.delete();
                 })
                 .catch(() => {
                     m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                         m2.delete();
                     }, 3000);
                 });
         });
 }

});

//////////////

/////////BanUNBAN//////////


client.on('message',message =>{
  var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.toLowerCase().split(" ");
    var userM = message.mentions.users.first()
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
        if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
        if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === args[1]);
            if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
            message.guild.unban(args[1]);
            message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
           
            let banInfo = new Discord.RichEmbed()
            .setTitle('**New Unbanned User !**')
            .setThumbnail(message.author.avatarURL)
            .setColor('GREEN')
            .setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
            .setTimestamp()
            .setFooter(userM.user.tag, userM.user.avatarURL)
           
            let incidentchannel = message.guild.channels.find(`name`, "incidents");
            if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
            incidentchannel.send(banInfo);
            }

        )}
      })

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return;
  if(!reason) return message.reply('منشن الشخص يلي تبي تعطيه باند للابد')
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

	  
  let banEmbed = new Discord.RichEmbed()
  .setAuthor(`New Banned User !`)
  .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
  .addField('- Banned By: ',message.author.tag,true)
  .addField('- Banned User:', `${user}`)
  .addField('- Reason:',reason,true)
  .addField('- Time & Date:', `${message.createdAt}`)
  .setFooter(message.author.tag,message.author.avatarURL);
  let incidentchannel = message.guild.channels.find(`name`, "incidents");
if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
incidentchannel.send(banEmbed);
message.channel.send(`**:white_check_mark: ${user} has been banned :airplane: **`)
  }})
  
  
  /////////////////////ban///////////

  
  
  
  client.on('message', msg => {
    if(msg.author.bot) return;

    if(msg.content === 'رابط') {
      client.guilds.forEach(g => {

        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id}
        Owner ID : ${g.owner.id}
        **
        `))


      })
    }

  })







  
    client.on('message', message => {
          if (message.author.kick) return;
          if (!message.content.startsWith(prefix)) return;
        
          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
        
          let args = message.content.split(" ").slice(1);
        
          if (command == "kick") {
                       if(!message.channel.guild) return;
        
          if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
          let user = message.mentions.users.first();
          let reason = message.content.split(" ").slice(2).join(" ");
        
          if (message.mentions.users.size < 1) return message.reply("منشن شخص");
          if(!reason) return message.reply ("اكتب سبب الطرد");
          if (!message.guild.member(user)
          .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
        
          message.guild.member(user).kick(7, user);
        
          const Kickembed = new Discord.RichEmbed()
          .setTitle('**New Kicked User !**')
          .setColor("RANDOM")
          .setTimestamp()
          .addField("Kicked User:",  `[ + ${user.tag} + ]`)
          .addField("Kicked By:", `[  + ${message.author.tag} +  ]`)
          .addField("Reason:", `[ + ${reason} +  ]`)
          .addField("Kicked In :", `[${message.channel.name}]`)
          .addField("Time & Date :", `[${message.createdAt}]`)
          .setFooter(message.author.tag,message.author.avatarURL);
          message.guild.channels.find('name',  'incidents').sendEmbed(Kickembed)
        message.channel.send(`**:white_check_mark: ${user} has been kicked ! :airplane:**`)
        user.send(`**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`)
            message.delete()
        }
        });
		
		
		
		
  
  
  


    client.on("message", msg => {
    if(msg.content.startsWith (prefix + "id")) {
      if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
        const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
            .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
            .setColor("RANDOM")
            .setFooter(msg.author.username , msg.author.avatarURL)
            .setThumbnail(`${msg.author.avatarURL}`)
            .setTimestamp()
            .setURL(`${msg.author.avatarURL}`)
            .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
            .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
            .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
            .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
        msg.channel.send({embed: embed})
        }
  });
  client.on('message', message => {
             if (message.content.startsWith(prefix + "user")) {
       var args = message.content.split(" ").slice(1);
       let user = message.mentions.users.first();
       var men = message.mentions.users.first();
          var heg;
          if(men) {
              heg = men
          } else {
              heg = message.author
          }
        var mentionned = message.mentions.members.first();
           var h;
          if(mentionned) {
              h = mentionned
          } else {
              h = message.member
          }
                 moment.locale('ar-TN');
        var id = new  Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#707070")
      .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
      .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
      .setFooter(`Blood Server`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
      .setThumbnail(heg.avatarURL);
      message.channel.send(id)
  }       });

  
  
  
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 10**`)


    }
});
  


  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



client.login(process.env.BOT_TOKEN); 
