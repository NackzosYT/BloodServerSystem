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
const prefix = 'R'


const adminprefix = "R";//FRAS
const devs = ['538100620238782464','312244272000663564'];//FRAS
client.on('message', message => {//FRAS
  var argresult = message.content.split(` `).slice(1).join(' ');//FRAS
    if (!devs.includes(message.author.id)) return;//FRAS
    
if (message.content.startsWith(adminprefix + 'setPlay')) {//fras
  client.user.setGame(argresult);//fras
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)//fras
} else //fras
  if (message.content.startsWith(adminprefix + 'setName')) {//fras
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setAvatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setStreaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/nackzos");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});




const temp = JSON.parse(fs.readFileSync('./temp.json', 'utf8'));
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith('Rtemp on')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**Done ,**')
              client.on('message' , message => {
               if(message.content === 'Rtemp off') {
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







///////كود كيك///////
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
///////كود كيك///////




////////الباند////////
client.on('message', async message => {
    var moment = require('moment');
    var mmss = require('ms')
    let date = moment().format('Do MMMM YYYY , hh:mm');
    let User = message.mentions.users.first();
    let Reason = message.content.split(" ").slice(3).join(" ");
    let messageArray = message.content.split(" ");
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "ban")) {
       if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**You dont have ban_members permission :/ **");
       if(!User) message.channel.send("**Mention Someone**");
       if(User.id === client.user.id) return message.channel.send("**Why you want to ban me ? :/**");
       if(User.id === message.guild.owner.id) return message.channel.send("**Nice try man :> you cant ban the ownership**");
       if(!time) return message.channel.send("**- اكتب الوقت**");
       if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**- Error in this Duration**');
       if(!Reason) message.channel.send("**- اكتب Reason**");
       let banEmbed = new Discord.RichEmbed()
       .setAuthor(`New Banned User !`)
       .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
       .addField('- Banned By: ',message.author.tag,true)
       .addField('- Banned User:', `${User}`)
       .addField('- Reason:',Reason,true)
       .addField('- Time & Date:', `${message.createdAt}`)
       .addField('- Duration:',time,true)
       .setFooter(message.author.tag,message.author.avatarURL);
       let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
  incidentchannel.send(banEmbed);
  message.channel.send(`**:white_check_mark: ${User} has been banned :airplane: **`).then(() => message.guild.member(User).ban({reason: Reason}))
  User.send(`**:airplane: You are has been banned in ${message.guild.name} reason: ${Reason} by: ${message.author.tag} :airplane:**`)
       .then(() => { setTimeout(() => {
           message.guild.unban(User);
       }, mmss(time));
    });
   }
  });

////////الباند////////





////////اللوق//////////
client.on('message', message=>{ //Toxic Codes    //  PremiumBot
    if(message.author.bot) return; //Toxic Codes    //  PremiumBot
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) { //Toxic Codes    //  PremiumBot
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log") //Toxic Codes    //  PremiumBot
    if(log) return message.reply("**يوجد بالفعل روم اللوق**")  //Toxic Codes    //  PremiumBot
    if(!log) {  //Toxic Codes    //  PremiumBot
    message.guild.createChannel("log", "text").then(c=> { //Toxic Codes    //  PremiumBot
        c.overwritePermissions(message.guild.id, { //Toxic Codes    //  PremiumBot
            SEND_MESSAGES: false
    })
})
message.channel.send("**✅ ,تم انشاء روم اللوق بنجــاح**")
    }
    } //Toxic Codes    //  PremiumBot
     })
client.on('error', console.error);
 
client.on('messageDelete', message => { //Toxic Codes    //  PremiumBot
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return; //Toxic Codes    //  PremiumBot
 
    var logChannel = message.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    let messageDelete = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
    .setTitle('**[MESSAGE DELETE]**') //Toxic Codes    //  PremiumBot
    .setColor('RED') //Toxic Codes    //  PremiumBot
    .setThumbnail(message.author.avatarURL) //Toxic Codes    //  PremiumBot
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp() //Toxic Codes    //  PremiumBot
    .setFooter(message.guild.name, message.guild.iconURL) //Toxic Codes    //  PremiumBot
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => { //Toxic Codes    //  PremiumBot
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return; //Toxic Codes    //  PremiumBot
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs //Toxic Codes    //  PremiumBot
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
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL) //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => { //Toxic Codes    //  PremiumBot
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp() //Toxic Codes    //  PremiumBot
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete); //Toxic Codes    //  PremiumBot
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName); //Toxic Codes    //  PremiumBot
        }
        if(oldRole.hexColor !== newRole.hexColor) { //Toxic Codes    //  PremiumBot
            if(oldRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var oldColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var oldColor = oldRole.hexColor;
            } //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
            if(newRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var newColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var newColor = newRole.hexColor; //Toxic Codes    //  PremiumBot
            } //Toxic Codes    //  PremiumBot
            let roleUpdateColor = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[ROLE COLOR UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE') //Toxic Codes    //  PremiumBot
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
  //Toxic Codes    //  PremiumBot
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) { //Toxic Codes    //  PremiumBot
            let roleUpdate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[UPDATE ROLE PERMISSIONS]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) //Toxic Codes    //  PremiumBot
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => { //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        let channelCreate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
        .setTitle('**[CHANNEL CREATE]**') //Toxic Codes    //  PremiumBot
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); //Toxic Codes    //  PremiumBot
client.on('channelDelete', channel => { //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); //Toxic Codes    //  PremiumBot
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
	
    oldChannel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) //Toxic Codes    //  PremiumBot
 
            logChannel.send(newName); //Toxic Codes    //  PremiumBot
        }
        if(oldChannel.topic !== newChannel.topic) { //Toxic Codes    //  PremiumBot
            let newTopic = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[CHANNEL EDIT]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
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
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
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
client.on('guildMemberUpdate', (oldMember, newMember) => { //Toxic Codes    //  PremiumBot
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`'; //Toxic Codes    //  PremiumBot
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
  //Toxic Codes    //  PremiumBot
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
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
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
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
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') //Toxic Codes    //  PremiumBot
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
} //Toxic Codes    //  PremiumBot
client.on('guildMemberRemove', member => { //Toxic Codes    //  PremiumBot
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`) //Toxic Codes    //  PremiumBot
  .setTimestamp() //Toxic Codes    //  PremiumBot
  .setFooter(member.user.tag, member.user.avatarURL)
  //Toxic Codes    //  PremiumBot
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); //Toxic Codes    //  PremiumBot
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave); //Toxic Codes    //  PremiumBot
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    } //Toxic Codes    //  PremiumBot
}); //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
////////اللوق//////////




   
   client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        if(!message.member.hasPermission('MANAGE_ROLES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_ROLES`' );
    let member = message.mentions.users.first();
    let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
    console.log(role);
    if(member) {
         if(role.startsWith('-')) {
           let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
           console.log(roleRe);
           let role1 = message.guild.roles.find('name', roleRe);
           console.log(`hi`);
    const ee =new Discord.RichEmbed()
    .setDescription('**:x: I can’t find the role.**')
    .setFooter('Requested By '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
    
                const e = new Discord.RichEmbed()
    
            .setDescription(':white_check_mark:** Pull Role For **'+member+'**,** '+'**'+'-'+role1.name+'**')
           .setFooter('Requested By '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
       } else if(!role.startsWith('-')) {
           let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
           let role1 = message.guild.roles.find('name', roleRe);
    const ee =new Discord.RichEmbed()
    .setDescription('**:x: I can’t find the role.**')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1);
           const e = new Discord.RichEmbed()
    
           .setDescription(':white_check_mark:** Pull Role For **'+member+'**,** '+'**'+'+'+role1.name+'**')
           .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
           .setColor('BLACK')
            message.channel.send(e)
       } else {
           message.reply(`يجب عليك كتابة اسم الرتبة`);
       }
    }
    else if(args[0] == 'all') {
    if(role.startsWith('B')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Pull From __${message.guild.members.size}__ Member**`);
    });
    }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
    message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +  role1.name+`** Has Pull To __${message.guild.members.size}__ Members **`);
    });
    }
    } else if(args[0] == 'humans') {
    if(role.startsWith('B')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:   Done...\n**` +role1.name+`** Has Pull From __${message.guild.members.size}__ Member**`);
    });
    }
    
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    
    const ee =new Discord.RichEmbed()
    .setDescription('I Cann’t Find This Role')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
       message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
           message.guild.member(m).removeRole(role1);
       });
    msg.edit(`** :white_check_mark:   Done...**`);
    });
    }
    } else if(args[0] == 'bots') {
    if(role.startsWith('B')) {
    let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
    let role1 = message.guild.roles.find('name', roleRe);
              message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
      message.guild.members.forEach(m => {
       message.guild.member(m).removeRole(role1.id);
    });
    msg.edit(`** :white_check_mark:  Done...**`);
    });
    }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    const ee =new Discord.RichEmbed()
    .setDescription('I Cann’t Find This Role')
    .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
    if(!role1) return message.channel.send(ee);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
       message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
           message.guild.member(m).removeRole(role1);
       });
    msg.edit(`** :white_check_mark:  Done...\n**` +role1.name+`** rank has been pull To __${message.guild.members.size}__ Member**`);
    });
    }
    }
    }
    });




 // clear

client.on('message', message => {//Toxic Codes
   if(!message.channel.guild) return;//Toxic Codes
if(message.content.startsWith(prefix + 'clear')) {//Toxic Codes
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));//Toxic Codes
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );//Toxic Codes
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);//Toxic Codes
let request = `Requested By ${message.author.username}`;//Toxic Codes
message.channel.send(`**ViperBot**`).then(msg => {//Toxic Codes
msg.react('?')//Toxic Codes
.then(() => msg.react('?'))//Toxic Codes
.then(() =>msg.react('?'))//Toxic Codes
//Toxic Codes
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;//Toxic Codes
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;//Toxic Codes
//Toxic Codes
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });//Toxic Codes
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });//Toxic Codes
reaction1.on("collect", r => {//Toxic Codes
message.channel.send(`Chat will delete`).then(m => m.delete(5000));//Toxic Codes
var msg;//Toxic Codes
        msg = parseInt();//Toxic Codes
//Toxic Codes
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);//Toxic Codes
      message.channel.sendMessage("", {embed: {//Toxic Codes
        title: "`` Chat Deleted ``",//Toxic Codes
        color: 0x06DF00,//Toxic Codes
        footer: {//Toxic Codes
//Toxic Codes
        }//Toxic Codes//Toxic Codes
      }}).then(msg => {msg.delete(3000)});//Toxic Codes
//Toxic Codes
})//Toxic Codes
reaction2.on("collect", r => {//Toxic Codes
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));//Toxic Codes
msg.delete();//Toxic Codes
})//Toxic Codes
})//Toxic Codes
}//Toxic Codes
});//Toxic Codes
//Toxic Codes
client.on("message", message => {//Toxic Codes
            var args = message.content.substring(prefix.length).split(" ");//Toxic Codes
            if (message.content.startsWith(prefix + "clear")) {//Toxic Codes
 if (!args[1]) {//Toxic Codes
                                let x5bz1 = new Discord.RichEmbed()//Toxic Codes
                                .setDescription("&clear <number>")//Toxic Codes
                                .setColor("RANDOM")//Toxic Codes
                                message.channel.sendEmbed(x5bz1);//Toxic Codes
                            } else {//Toxic Codes
                            let messagecount = parseInt(args[1]);//Toxic Codes
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));//Toxic Codes
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));//Toxic Codes
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));//Toxic Codes
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("RANDOM")//Toxic Codes
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")//Toxic Codes
                                                                                        message.delete("..");//Toxic Codes
                                message.channel.sendEmbed(x5bz2);//Toxic Codes
                            }//Toxic Codes
                          }//Toxic Codes
});//Toxic Codes

//Toxic Codes



  
  
  



client.login(process.env.BOT_TOKEN); 
