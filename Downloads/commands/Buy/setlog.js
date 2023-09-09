const Discord = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "setl",
    timeout: 10000,

    run: async(bot, message, args) =>{
        if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`You need the manage guild permission in order to use this command.`);

        if(!args[0]) return message.channel.send({ embed: {
            description: `\`$setl [on|off] [channel id/mention/name]\``,
            color: "RANDOM",

        }});
        async function it(){
            if(args[0].toLowerCase()==="on"){
                if(!args[1]) return message.channel.send(`Please specify a channel!`)
                const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.startsWith(args[1]));
                if(typeof channel === "undefined") return message.channel.send(`Invalid Channel try again.`);
                var ar = ['MANAGE_WEBHOOKS', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY']
                if(!channel.permissionsFor(message.guild.me).has([`READ_MESSAGE_HISTORY`, 'MANAGE_WEBHOOKS', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'])) return message.channel.send(`I need the following permissions \`${ar.map(a => `${a.split("_").map(aa=>aa[0].toUpperCase() + aa.slice(1).toLowerCase().replace(/_/g, " ")).join(" ")}`).join(", ")}\` in <#${channel.id}> `)

                db.set(`logschannel2_${message.guild.id}`, channel.id);
                
                
            await message.channel.send(`Setup logging in <#${channel.id}>!`);

            } else if(args[0].toLowerCase()==="off"){
                db.delete(`logschannel2_${message.guild.id}`);
                await message.channel.send(`Turned off logging!`)
            }
        }
        if(args[0]){
            try{
                await it();
            }catch(Err){
                console.log(Err)
            }
        }

    }
}