const Discord = require("discord.js");



var bot = new Discord.Client();
var prefix = ("/");
var randnum = 0;
var randnum2 = 0;


bot.on("ready", function(){
    bot.user.setGame("❤Xoruo❤");
    console.log("Le bot a bien été connecté");
})

//bot.login(process.env.TOKEN)
//bot.login(process.env.TOKEN);
bot.login(process.env.TOKEN)

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
    }else if (message.content === ("/tg Arkange")){
        message.channel.send ("Dis donc Arkange,tu pourrais pas fermer ta geule?")
    //FTG
    }else if (message.content === ("/ftg")) {
        message.channel.send ("Ferme ta geule twa un peu")
    //}else if (message.content === ("/roll")) {
        //message.channel.send (":game_die:")
    }if (message.content === "/roll"){
        random();
    
        if (randnum2 == 3){
            message.reply(":game_die: 3");
            //console.log(randnum);
            console.log("roll3")
        }
    
        if (randnum2 == 1){
            message.reply(":game_die: 1");
            //console.log(randnum);
            console.log("roll1")
        }
    
        if (randnum2 == 2){
            message.reply(":game_die: 2");
            //console.log(randnum);
            console.log("roll2")
            
        }
        if (randnum2 == 4){
            message.reply(":game_die: 4");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 5){
            message.reply(":game_die: 5");
            //console.log(randnum);
            console.log("roll5")
            
        }
        if (randnum2 == 6){
            message.reply(":game_die: 6");
            //console.log(randnum);
            console.log("roll6")
            
        }
        if (randnum2 == 7){
            message.reply(":game_die: 7");
            //console.log(randnum);
            console.log("roll7")
            
        }
        if (randnum2 == 8){
            message.reply(":game_die: 8");
            //console.log(randnum);
            console.log("roll8")
            
        }
        if (randnum2 == 9){
            message.reply(":game_die: 9");
            //console.log(randnum);
            console.log("roll9")
            
        }
        if (randnum2 == 10){
            message.reply(":game_die: 10");
            //console.log(randnum);
            console.log("roll10")
            
        }if (randnum2 == 11){
            message.reply(":game_die: 11");
            //console.log(randnum);
            console.log("roll11")
            
        }
        if (randnum2 == 12){
            message.reply(":game_die: 12");
            //console.log(randnum);
            console.log("roll12")
            
        }
        if (randnum2 == 13){
            message.reply(":game_die: 13");
            //console.log(randnum);
            console.log("roll13")
            
        }
        if (randnum2 == 14){
            message.reply(":game_die: 14");
            //console.log(randnum);
            console.log("roll14")
            
        }
        if (randnum2 == 15){
            message.reply(":game_die: 15");
            //console.log(randnum);
            console.log("roll15")
            
        }
        if (randnum2 == 16){
            message.reply(":game_die: 16");
            //console.log(randnum);
            console.log("roll16")
            
        }
        if (randnum2 == 17){
            message.reply(":game_die: 17");
            //console.log(randnum);
            console.log("roll17")
            
        }
        if (randnum2 == 18){
            message.reply(":game_die: 18");
            //console.log(randnum);
            console.log("roll18")
            
        }
        if (randnum2 == 19){
            message.reply(":game_die: 19");
            //console.log(randnum);
            console.log("roll19")
            
        }
        if (randnum2 == 20){
            message.reply(":game_die: 20");
            //console.log(randnum);
            console.log("roll20")
            
        }
        if (randnum2 == 21){
            message.reply(":game_die: 21");
            //console.log(randnum);
            console.log("roll21")
            
        }
        if (randnum2 == 22){
            message.reply(":game_die: 22");
            //console.log(randnum);
            console.log("roll22")
            
        }
        if (randnum2 == 23){
            message.reply(":game_die: 23");
            //console.log(randnum);
            console.log("roll23")
            
        }
        if (randnum2 == 24){
            message.reply(":game_die: 24");
            //console.log(randnum);
            console.log("roll24")
            
        }
        if (randnum2 == 25){
            message.reply(":game_die: 25");
            //console.log(randnum);
            console.log("roll25")
            
        }
        if (randnum2 == 26){
            message.reply(":game_die: 26");
            //console.log(randnum);
            console.log("roll26")
            
        }
        if (randnum2 == 27){
            message.reply(":game_die: 27");
            //console.log(randnum);
            console.log("roll27")
            
        }
        if (randnum2 == 28){
            message.reply(":game_die: 28");
            //console.log(randnum);
            console.log("roll28")
            
        }
        if (randnum2 == 29){
            message.reply(":game_die: 29");
            //console.log(randnum);
            console.log("roll29")
            
        }
        if (randnum2 == 30){
            message.reply(":game_die: 30");
            //console.log(randnum);
            console.log("roll30")
            
        }
        if (randnum2 == 31){
            message.reply(":game_die: 31");
            //console.log(randnum);
            console.log("roll31")
            
        }
        if (randnum2 == 32){
            message.reply(":game_die: 32");
            //console.log(randnum);
            console.log("roll32")
            
        }
        if (randnum2 == 33){
            message.reply(":game_die: 33");
            //console.log(randnum);
            console.log("roll33")
            
        }
        if (randnum2 == 34){
            message.reply(":game_die: 34");
            //console.log(randnum);
            console.log("roll34")
            
        }
        if (randnum2 == 35){
            message.reply(":game_die: 35");
            //console.log(randnum);
            console.log("roll35")
            
        }
        if (randnum2 == 36){
            message.reply(":game_die: 36");
            //console.log(randnum);
            console.log("roll36")
            
        }
        if (randnum2 == 37){
            message.reply(":game_die: 37");
            //console.log(randnum);
            console.log("roll37")
            
        }
        if (randnum2 == 38){
            message.reply(":game_die: 38");
            //console.log(randnum);
            console.log("roll38")
            
        }
        if (randnum2 == 39){
            message.reply(":game_die: 39");
            //console.log(randnum);
            console.log("roll39")
            
        }
        if (randnum2 == 40){
            message.reply(":game_die: 40");
            //console.log(randnum);
            console.log("roll40")
            
        }
        if (randnum2 == 41){
            message.reply(":game_die: 41");
            //console.log(randnum);
            console.log("roll41")
            
        }
        if (randnum2 == 42){
            message.reply(":game_die: 42");
            //console.log(randnum);
            console.log("roll42")
            
        }
        if (randnum2 == 43){
            message.reply(":game_die: 43");
            //console.log(randnum);
            console.log("roll43")
            
        }
        if (randnum2 == 44){
            message.reply(":game_die: 44");
            //console.log(randnum);
            console.log("roll44")
            
        }
        if (randnum2 == 45){
            message.reply(":game_die: 45");
            //console.log(randnum);
            console.log("roll45")
            
        }
        if (randnum2 == 46){
            message.reply(":game_die: 46");
            //console.log(randnum);
            console.log("roll46")
            
        }
        if (randnum2 == 47){
            message.reply(":game_die: 47");
            //console.log(randnum);
            console.log("roll47")
            
        }
        if (randnum2 == 48){
            message.reply(":game_die: 48");
            //console.log(randnum);
            console.log("roll48")
            
        }
        if (randnum2 == 49){
            message.reply(":game_die: 49");
            //console.log(randnum);
            console.log("roll49")
            
        }
        if (randnum2 == 50){
            message.reply(":game_die: 50");
            //console.log(randnum);
            console.log("roll50")
            
        }
        if (randnum2 == 51){
            message.reply(":game_die: 51");
            //console.log(randnum);
            console.log("roll51")
            
        }
        if (randnum2 == 52){
            message.reply(":game_die: 52");
            //console.log(randnum);
            console.log("roll52")
            
        }
        if (randnum2 == 53){
            message.reply(":game_die: 53");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 54){
            message.reply(":game_die: 54");
            //console.log(randnum);
            console.log("roll54")
            
        }
        if (randnum2 == 55){
            message.reply(":game_die: 55");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 56){
            message.reply(":game_die: 56");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 57){
            message.reply(":game_die: 57");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 58){
            message.reply(":game_die: 58");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 59){
            message.reply(":game_die: 59");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 60){
            message.reply(":game_die: 60");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 61){
            message.reply(":game_die: 61");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 62){
            message.reply(":game_die: 62");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 63){
            message.reply(":game_die: 63");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 64){
            message.reply(":game_die: 64");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 65){
            message.reply(":game_die: 65");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 66){
            message.reply(":game_die: 66");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 67){
            message.reply(":game_die: 67");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 68){
            message.reply(":game_die: 68");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 69){
            message.reply(":game_die: 69");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 70){
            message.reply(":game_die: 70");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 71){
            message.reply(":game_die: 71");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 72){
            message.reply(":game_die: 72");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 73){
            message.reply(":game_die: 73");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 74){
            message.reply(":game_die: 74");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 75){
            message.reply(":game_die: 75");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 76){
            message.reply(":game_die: 76");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 77){
            message.reply(":game_die: 77");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 78){
            message.reply(":game_die: 78");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 79){
            message.reply(":game_die: 79");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 80){
            message.reply(":game_die: 80");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 81){
            message.reply(":game_die: 81");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 82){
            message.reply(":game_die: 82");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 83){
            message.reply(":game_die: 83");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 84){
            message.reply(":game_die: 84");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 85){
            message.reply(":game_die: 85");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 86){
            message.reply(":game_die: 86");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 87){
            message.reply(":game_die: 87");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 88){
            message.reply(":game_die: 88");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 89){
            message.reply(":game_die: 89");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 90){
            message.reply(":game_die: 90");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 91){
            message.reply(":game_die: 91");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 92){
            message.reply(":game_die: 92");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 93){
            message.reply(":game_die: 93");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 94){
            message.reply(":game_die: 94");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 95){
            message.reply(":game_die: 95");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 96){
            message.reply(":game_die: 96");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 97){
            message.reply(":game_die: 97");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 98){
            message.reply(":game_die: 98");
            //console.log(randnum);
            console.log("roll4")
            
        }
        if (randnum2 == 99){
            message.reply(":game_die: 99");
            //console.log(randnum);
            console.log("roll4")
            
        }
    }

    if (message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#56FE02")
        .addField("Commandes du bot !", "  -/help : Affiche les commandes du bot !")
        .addField("Interaction", "ping : Le bot répond pong !")
        .addField("LOVE", "love : réponds 'moi aussi je t'aime' ")
        .addField("JEUX", "/roll: donne un nombre entre 1 et 99")
        .setFooter("C'est tout pour ce embed !")
        message.channel.sendEmbed(help_embed);
       // message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
        console.log("Commande Help demandée!");
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








function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(99);
    randnum2 = Math.floor(Math.random() * (max - min +1) + min);
}

