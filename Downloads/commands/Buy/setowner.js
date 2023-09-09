const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
    name: "addo",
        permissions: 'ADMINISTRATOR',
    run: async (client, message, args) => {
 if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`You need the ADMINISTRATOR permission in order to use this command.`);
let user = client.users.cache.get(args[0]);
    if (!user) return message.reply("Please Type ID")
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setColor("9e1c36").setDescription(`Done has been Add Onwer ${user}`))
     
  db.set(`owner_${message.guild.id}`, user);
}
  
}
  