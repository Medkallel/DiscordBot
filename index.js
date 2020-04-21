const Discord = require('discord.js');
const client = new Discord.Client();
const token ='NzAxMDg4MDcxMTIyMTU3NjA4.XpsZMw.hrpEJbCqnuyd0fsZqhm_cCEOS30';
const prefix = '$';
var web = new Array;
var app = new Array;
var game = new Array;
var video = new Array;
client.on('ready', () =>{
    console.log('CodeName: Edith\nStatus: Connected');
})
const webChannel = "701450115809935541";
const appChannel = "701450598578520114";
const gameChannel = "701450308815028405";
const videoChannel = "701450486603186206";
client.on('message', msg=> {
    function isSome (nb)
    {
        return nb == msg.member.id;
    }
    if(msg.content[0]===prefix)
        {
           let args = msg.content.substring(prefix.length).split(" ");
            switch (args[0])
            {
                case 'Help':
                    msg.channel.send("Please visit the Bots-Command channel located at <#701471892841955378>!")
                    break;
                case 'help':
                    msg.channel.send("Please visit the Bots-Command channel located at <#701471892841955378>!")
                    break; 
                case 'info': 
                    msg.channel.send("Bot coded by <@415933111428448257>"+"\n"+"Version: 0.9")
                    break;
                case 'Info': 
                    msg.channel.send("Bot coded by <@415933111428448257>"+"\n"+"Version: 0.9")
                    break;
                case 'Web':
                    var channel = client.channels.cache.get(webChannel);
                    if (args[1]==='queue')
                    {
                        if (web.some(isSome))
                        {
                            if (web.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.reply('You have '+web.findIndex(isSome)+ ' behind you!')
                        }
                        else 
                        {
                            msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (web.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            web.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (web.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'web':
                    if (args[1]==='queue')
                    {
                        if (web.some(isSome))
                        {
                            if (web.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.reply('You have '+web.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                            msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                     }
                    else 
                    {
                        if (web.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            web.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (web.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'App':
                    if (args[1]==='queue')
                    {
                        if (app.some(isSome))
                        {
                            if (app.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.channel.send('You have '+app.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                            msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (app.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            app.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (app.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'app':
                    if (args[1]==='queue')
                    {
                        if (app.some(isSome))
                        {
                            if (app.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.channel.send('You have '+app.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                             msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (app.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            app.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (app.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'Game':
                    if (args[1]==='queue')
                    {
                        if (game.some(isSome))
                        {
                            if (game.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.channel.send('You have '+game.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                             msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (game.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            game.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (game.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'game':
                    if (args[1]==='queue')
                    {
                        if (game.some(isSome))
                        {
                            if (game.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            
                            }
                            else
                            msg.channel.send('You have '+game.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                             msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (game.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            game.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (game.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'video':
                    if (args[1]==='queue')
                    {
                        if (video.some(isSome))
                        {
                            if (video.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.channel.send('You have '+video.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                             msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (video.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            video.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (video.length ) + ' persons in this queue')
                        }
                    }
                    break;
                case 'Video':
                    if (args[1]==='queue')
                    {
                        if (video.some(isSome))
                        {
                            if (video.findIndex(isSome)==0)
                            {
                                msg.reply('it is your turn just wait for the coach to let you in!')
                            }
                            else
                            msg.channel.send('You have '+video.findIndex(isSome)+ ' behind you!')
                        }
                        else
                        {
                             msg.reply('you are not in the queue, you can register using the following command: $<the channel you want to register for>')
                        }
                    }
                    else 
                    {
                        if (video.some(isSome))
                        {
                            msg.reply('you are already in the queue. Use the following command to see your plave in the queue:  $<the channel you are joining> queue.')
                        }
                        else
                        {
                            var ms = msg.member.id;
                            video.push(msg.member.id)
                            msg.channel.send('Succesfullly added <@' + ms + '> to the queue!  Use the following command to see your plave in the queue:  $<the channel you are joining> queue. There is currently '+ (video.length ) + ' persons in this queue')
                        }
                    }
                    break;
                    case 'Next':
                        if(msg.member.roles.cache.find(r => r.name === "Web"))
                        {
                            const webChannel = client.channels.cache.get("701450115809935541");
                            const mem = msg.guild.members.cache.get(web[0]);
                            console.log(web.length)
                            if (web == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (web.length!=1)
                            {
                                webChannel.join();
                                mem.voice.setChannel(null);
                                web.shift();
                                webChannel.leave();
                            }
                            webChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    mem.send(invite.url)
                                    );
                                    mem.voice.setChannel(webChannel);
                                    msg.channel.send('<@'+web[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+web[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    web.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "App"))
                        {
                            const appChannel = client.channels.cache.get("701450598578520114");
                            const mem = msg.guild.members.cache.get(app[0]);
                            console.log(app.length)
                            if (app == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (app.length!=1)
                            {
                                appChannel.join();
                                mem.voice.setChannel(null);
                                app.shift();
                                appChannel.leave();
                            }
                            appChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(app[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(appChannel);
                                    msg.channel.send('<@'+app[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+app[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    app.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "Game"))
                        {
                            const gameChannel = client.channels.cache.get("700836390832832614");
                            const mem = msg.guild.members.cache.get(game[0]);
                            console.log(game.length)
                            if (game == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (game.length!=1)
                            {
                                gameChannel.join();
                                mem.voice.setChannel(null);
                                game.shift();
                                gameChannel.leave();
                            }
                            gameChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(game[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(gameChannel);
                                    msg.channel.send('<@'+game[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+game[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    game.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "Video"))
                        {
                            const videoChannel = client.channels.cache.get("700836443836383232");
                            const mem = msg.guild.members.cache.get(video[0]);
                            console.log(video.length)
                            if (video == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (video.length!=1)
                            {
                                videoChannel.join();
                                mem.voice.setChannel(null);
                                video.shift();
                                videoChannel.leave();
                            }
                            videoChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(video[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(videoChannel);
                                    msg.channel.send('<@'+video[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+video[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    video.shift();
                        }
                    break;
                    case 'Next':
                        if(msg.member.roles.cache.find(r => r.name === "Web"))
                        {
                            const webChannel = client.channels.cache.get("701450115809935541");
                            const mem = msg.guild.members.cache.get(web[0]);
                            console.log(web.length)
                            if (web == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (web.length!=1)
                            {
                                webChannel.join();
                                mem.voice.setChannel(null);
                                web.shift();
                                webChannel.leave();
                            }
                            webChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    mem.send(invite.url)
                                    );
                                    mem.voice.setChannel(webChannel);
                                    msg.channel.send('<@'+web[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+web[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    web.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "App"))
                        {
                            const appChannel = client.channels.cache.get("701450598578520114");
                            const mem = msg.guild.members.cache.get(app[0]);
                            console.log(app.length)
                            if (app == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (app.length!=1)
                            {
                                appChannel.join();
                                mem.voice.setChannel(null);
                                app.shift();
                                appChannel.leave();
                            }
                            appChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(app[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(appChannel);
                                    msg.channel.send('<@'+app[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+app[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    app.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "Game"))
                        {
                            const gameChannel = client.channels.cache.get("700836390832832614");
                            const mem = msg.guild.members.cache.get(game[0]);
                            console.log(game.length)
                            if (game == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (game.length!=1)
                            {
                                gameChannel.join();
                                mem.voice.setChannel(null);
                                game.shift();
                                gameChannel.leave();
                            }
                            gameChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(game[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(gameChannel);
                                    msg.channel.send('<@'+game[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+game[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    game.shift();
                        }
                        if(msg.member.roles.cache.find(r => r.name === "Video"))
                        {
                            const videoChannel = client.channels.cache.get("700836443836383232");
                            const mem = msg.guild.members.cache.get(video[0]);
                            console.log(video.length)
                            if (video == 0)
                            {
                                msg.channel.send('There is no one in the queue!');
                                break;
                            }
                            if (video.length!=1)
                            {
                                videoChannel.join();
                                mem.voice.setChannel(null);
                                video.shift();
                                videoChannel.leave();
                            }
                            videoChannel.createInvite({ maxUses: 1,
                                unique: true,
                                maxAge: 180}).then(invite =>
                                    client.users.cache.get(video[0]).send(invite.url)
                                    );
                                    mem.voice.setChannel(videoChannel);
                                    msg.channel.send('<@'+video[0]+'>, it is your turn check your Dms for the invite link!');
                                    msg.channel.send('<@'+video[0]+'>, If you are in a voice channel you will be automatically switched to the one you queued in otherwise you will recieve an invite link in your Dms for it');
                                    video.shift();
                        }
                    break;
            }
        }
})
client.login(token);