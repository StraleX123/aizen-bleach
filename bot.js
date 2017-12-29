const Discord = require("discord.js");

const TOKEN = "Mzk0OTU3MDU0MzE1NTkzNzI4.DSa4rw.daUBiXa22BUwywE-HCRlTmiuBPM"; 
const PREFIX = "A!"
const client = new Discord.Client();

var bot = new Discord.Client();





let embed = new Discord.RichEmbed()
.setColor([111, 0, 136])
.setTitle('**HELP**')
.addField("__FUN__", "`attack` `ping` `avatar` `wantlemon` `danceboi`")
.addField("__INFO__", "`userinfo` `serverinfo(not working)`")
.addField("__MUSIC__", "*coming soon*")
bot.on("message", function(message) {
     if (message.author == bot.user) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
	
	if (message.content.startsWith(`${PREFIX}ping`)) {
    return message.channel.send('PING!?!?!YOU ARE THE DEFINITION OF AUTISM!')
}
    if (message.content.startsWith(`${PREFIX}attack`)) {
    return message.channel.send('Kutakero kyouka suigetsu!')
}
    if (message.content.startsWith(`${PREFIX}avatar`)) {
	return message.channel.send(message.author.avatarURL)
	}
    if (message.content.startsWith(`${PREFIX}help`)) {
    return message.channel.send({embed})
}	
    if(message.content.startsWith(`${PREFIX}userinfo`)) {
		let embed = new Discord.RichEmbed()
	        .setAuthor(message.author.username, message.author.displayAvatarURL)
			.setDescription("This is the user's info")
			.setColor([111, 0, 136])
			.addField("Username", message.author.username)
			.addField("ID", message.author.id)
			.addField("Created At", message.author.createdAt);
			
	        message.channel.send({embed});
	
	}
	
	if(message.content.startsWith(`${PREFIX}danceboi`)) {
        message.channel.send("", {
        file: "https://vignette.wikia.nocookie.net/spongebob/images/8/81/The_Two_Faces_of_Squidward_28.jpg/revision/latest/scale-to-width-down/640?cb=20140428214708" 
            });
	
	
	
	}

	if(message.content.startsWith(`${PREFIX}wantlemon`)) {
	    message.channel.send("", {
        file: "https://i.pinimg.com/564x/cf/fb/38/cffb383c6b9295174d6ab2530c1ec8b1--lemon-random-stuff.jpg" 
            });
	
	
	
	}
	
	
	
	
	
	
});

bot.on("ready", async () => {
	bot.user.setGame("A!help")
    console.log(" AIZEN is ready, add him with  https://discordapp.com/api/oauth2/authorize?client_id=394957054315593728&permissions=8&scope=bot")
    });

	
client.login(process.env.BOT_TOKEN);
