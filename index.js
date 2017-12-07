const Discord = require("discord.js");



var bot = new Discord.Client();
var prefix = ("/");
var randnum = 0;


bot.on("ready", function(){
    bot.user.setGame("❤Xoruo❤");
    console.log("Le bot a bien été connecté");
})

bot.login(process.env.TOKEN)
//bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "ping"){
        message.reply("pong")
        console.log("ping pong")
    } else if (message.content === ("ching")) {
        message.reply ("Chang!");
    }else if (message.content === (":hearth:")) {
        message.reply ("Pour qui est ce jolie coeur?");
    }else if (message.content === ("re")){
        message.reply ("Beuh")
    }else if (message.content === ("love")){
        message.reply ("Moi aussi je t'aime")
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#56FE02")
        .addField("Commandes du bot !", "  -/help : Affiche les commandes du bot !")
        .addField("Interaction", "ping : Le bot répond pong !")
        .addField("LOVE", "love : réponds 'moi aussi je t'aime' ")
        .setFooter("C'est tout pour ce embed !")
        message.channel.sendEmbed(help_embed);
       // message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée!");
    }

    if (message.content === "Comment vas-tu LéaBot?"){
        random();

        if (randnum == 3){
            message.reply("3");
            console.log(randnum);
        }

        if (randnum == 1){
            message.reply("(réponsse numéro 1), Merci je vais tres bien");
            console.log(randnum);
        }

        if (randnum == 2){
            message.reply("(réponsse numéro 2), Je ne vais pas tres bien merci de te soucier de moi");
            console.log(randnum);
        }


    }
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(2);
    randnum = Math.floor(Math.random() * (max - min +1) + min);
}


//ban et kick



//bienvenue
bot.on("guildMemberAdd", function (member) {
    member.createDM().then(function (channel) {
        return channel.send("Bienvenue a toi sur le serveur " + member.displayName)
    }).catch(console.error)
})
