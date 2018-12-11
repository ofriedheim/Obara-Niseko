const	discord = require("discord.js");
const	client = new discord.Client();
const	settings = require('./settings.json');

var		fortune = [];

client.on('ready',() => {
	console.log('I\'m online\nI\'m online');
})

client.on('message', (message) => {
	if (message.content === 'ping'){
		message.reply('pong');
	}
})

client.on('message', (message) => {
	if (message.content === 'AWAKEN, MY MASTER'){
		message.channel.send("I have awoken.");
	}
})

client.on('message', (message) => {
	if (message.content.includes("hi niseko")){
		message.channel.send("Hello, child.");
	}
})

client.on('message', (message) => {
	if (message.content.includes("!gun")){
		message.channel.send(settings.gun);
		message.channel.send("Try me, bitch.");
	}
})

client.on('message', (message) => {
	if (message.content === 'FLEENSTONES?'){
		message.reply('You have been granted my luck. I wish you well.')
	}
})

client.on('message', (message) => {
	if (message.content.includes("!exorcise")){
		message.channel.send(settings.exorcism);
		message.channel.send("Time to yeet these demons out of you!");
	}
})

client.on('message', (message) => {
	if (message.content.includes('!luciano')){
		message.channel.send(settings.doittoem);
		let num = getRandomInt(2);
		if (num === 1)
			message.channel.send("Oh, should I do it to 'em?");
		else if (num === 0)
			message.channel.send("Pray to any god that will hear your screaming.");
	}
})

client.on('message', (message) => {
	if (message.content.substring(0, 8) === '!fortune'){
		if (message.author.username === "IT'S YEET OR BE YOTE" || message.author.username === "CutieBoop")
			fortune.unshift(getRandomInt(10) + 10);
		else
			fortune.unshift(getRandomInt(20) + 1);
		let string = message.content.substring(8, message.content.length);
		message.reply("You asked: '" + string + "'" + '\n');
		if (!(fortune[0] === 1 && fortune[1] === 1 && fortune[2] === 1)) {
			switch (fortune[0]) {
				case 1:
					message.channel.send("My reply is no.");
					break ;
				case 2:
					message.channel.send("My sources say no.");
					break ;
				case 3:
					message.channel.send("Outlook not so good.");
					break ;
				case 4:
					message.channel.send("Don't count on it.");
					break ;
				case 5:
					message.channel.send("Very doubtful.");
					break ;
				case 6:
					message.channel.send("Reply hazy, try again.");
					break ;
				case 7:
					message.channel.send("Ask again later.");
					break ;
				case 8:
					message.channel.send("Better not tell you now");
					break ;
				case 9:
					message.channel.send("Can't predict now.");
					break ;
				case 10:
					message.channel.send("Concentrate and ask again.");
					break ;
				case 11:
					message.channel.send("Outlook good.");
					break ;
				case 12:
					message.channel.send("Signs point to yes.");
					break ;
				case 13:
					message.channel.send("Most likely.");
					break ;
				case 14:
					message.channel.send("As I see it, yes.");
					break ;
				case 15:
					message.channel.send("You may rely on it.");
					break ;
				case 16:
					message.channel.send("Yes");
					break ;
				case 17:
					message.channel.send("Yes, definitely.");
					break ;
				case 18:
					message.channel.send("It is decidedly so.");
					break ;
				case 19:
					message.channel.send("Without a doubt.");
					break ;
				case 20:
					message.channel.send("I guarantee it, you have my blessing.");
					break ;
				default:
					message.channel.send("Something went wrong, tell Oliver to fix it!");
				}
			}
		else {
			message.channel.send("Uh oh... Looks like you're cursed!\n");
			message.channel.send("Dark energy will surround you for the rest of your life...\n");
			message.channel.send("At least you won't be cursed for very long...");
		}
	}
})


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

client.login(settings.token).catch((error) => console.error(error));