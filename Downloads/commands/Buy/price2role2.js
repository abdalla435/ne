const Discord = require("discord.js")
const db = require('quick.db')

module.exports = {
    name: "addp2",
    run: async (client, message, args) => {
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`You need the manage guild permission in order to use this command.`);
    let price2role1 = args.join(` `)
    if(!price2role1) {
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
  .setDescription("ضيف السعر")
  .setColor("9e1c36")
  
  

return message.channel.send(embed)

}
message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`).setColor("9e1c36").setDescription(`تم اضافت السعر النهائي ${price2role1} `))
          console.log(`Done ${price2role1}`)
  db.set(`price2role2_${message.guild.id}`, price2role1);

}
  
}
  