const db = require('quick.db')
const Discord = require("discord.js")
module.exports = {
    name: "bhelp",
    cooldown: 5,
    aliases: ["commands"],

    run: async function(client, message, args) {
 if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`You need the manage guild permission in order to use this command.`);
          message.channel.send({
            embed: {
              title: '**Buy Role | Commands**',
              description: `**
                            +addr[1/2/3/4/5/6] | Use : addr1 [اسم الرول]
                            +addt[1/2/3/4/5/6] | Use : addt1 [السعر مع الضريبه]
                            +addp[1/2/3/4/5/6] | Use : addp1 [السعر الصافي]
                            +setl | Use : setl [عشان روم الوق]
                            +addo | Use : addo [الشخص البيتحولو الكردت]
                           **`
              
            }
          })
        }
         
        }
    

