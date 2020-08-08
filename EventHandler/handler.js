module.exports.run = async(bot, message, args, queue, command, prefix) => {
 
     // Categoria Miscelanea
      // => comando Ajuda 
      try {
      if (command === 'ajuda' || command === 'help') {
        const Ajuda = require('../Commands/Miscelanea/ajuda')
        delete require.cache[require.resolve(`../Commands/Miscelanea/ajuda`)];
        return Ajuda.run(bot, message, args)
      }
      // fetch
      // => comando Avatar
        if (command === 'avatar' || command === 'av') {
        const Av = require('../Commands/Miscelanea/avatar')
        delete require.cache[require.resolve(`../Commands/Miscelanea/avatar`)];
        return Av.run(bot, message, args)
      }
     // fetch
     // => comando Botinfo
       if (command === 'botinfo' || command === 'bi') {
       const us = require('../Commands/Miscelanea/botinfo')
       delete require.cache[require.resolve(`../Commands/Miscelanea/botinfo`)];
       return us.run(bot, message, args, prefix)
    }
    // fetch
    // => comando djs 
    if(command === 'djs' || command === 'discord.js' || command === 'discordjs') {
      const us9 = require('../Commands/Miscelanea/djs')
      delete require.cache[require.resolve(`../Commands/Miscelanea/djs`)];
      return us9.run(bot, message, args)
    }
    // fetch
    // => comando Donate
    if (command === 'donate' || command === 'doar') {
      const us1 = require('../Commands/Miscelanea/donate')
      delete require.cache[require.resolve(`../Commands/Miscelanea/donate`)];
      return us1.run(bot, message, args)
    }
    // fetch
    // => comando Invite
    if (command === 'invite' || command === 'convite') {
      const us2 = require('../Commands/Miscelanea/invite')
      delete require.cache[require.resolve(`../Commands/Miscelanea/invite`)];
      return us2.run(bot, message, args)
    }
    // fetch
    // => comando Ping
    if (command === 'ping' || command === 'latency' || command === 'latencia' || command === 'pingando') {
      const us3 = require('../Commands/Miscelanea/ping')
      delete require.cache[require.resolve(`../Commands/Miscelanea/ping`)];
      return us3.run(bot, message, args)
    }
    // fetch
    // => comando Say
    if (command === 'say' || command === 'falar') {
      const us4 = require('../Commands/Miscelanea/say')
      delete require.cache[require.resolve(`../Commands/Miscelanea/say`)];
      return us4.run(bot, message, args)
    }
    // fetch
    // => comando Serverinfo
    if (command === 'serverinfo' || command === 'si') {
      const us5 = require('../Commands/Miscelanea/serverinfo')
      delete require.cache[require.resolve(`../Commands/Miscelanea/serverinfo`)];
      return us5.run(bot, message, args)
    }
    // fetch
    // => comando setAfk
    if(command === 'setAFK' || command === 'setarAFK') {
      const u9 = require('../Commands/Miscelanea/setAfk')
      delete require.cache[require.resolve(`../Commands/Miscelanea/setAfk`)];
      return u9.run(bot, message, args)
    }
    // fetch
    // => comando SetNick
    if (command === 'setNick' || command === 'setNickname' || command === 'setarNick' || command === 'setarNickname') {
      const us6 = require('../Commands/Miscelanea/setNick')
      delete require.cache[require.resolve(`../Commands/Miscelanea/setNick`)];
      return us6.run(bot, message, args)
    }
    // fetch
    // => comando uptime
    if (command === 'uptime' || command === 'TimeOn' || command === 'tempoDeAtividade') {
      const us7 = require('../Commands/Miscelanea/uptime')
      delete require.cache[require.resolve(`../Commands/Miscelanea/uptime`)];
      return us7.run(bot, message, args)
    }  
    // fetch
    // => comando UserInfo
    if (command === 'userinfo' || command === 'us') {
      const us8 = require('../Commands/Miscelanea/userinfo')
      delete require.cache[require.resolve(`../Commands/Miscelanea/userinfo`)];
      return us8.run(bot, message, args)
    }
    // fetch
    // fetch category
  
   //
   //
    // Categoria Moderação
    // => comando ban
    if (command === 'ban' || command === 'banir') {
      const fr = require('../Commands/Mod/ban')
      delete require.cache[require.resolve(`../Commands/Mod/ban`)];
      return fr.run(bot, message, args)
    }
    // fetch
    // => comando Kick
    if (command === 'kick' || command === 'kickar' || command === 'expulsar') {
      const fr1 = require('../Commands/Mod/kick')
      delete require.cache[require.resolve(`../Commands/Mod/kick`)]
      return fr1.run(bot, message, args)
    }
    // fetch
    // => comando Mute
    if (command === 'mute' || command === 'mutar' || command === 'silenciar') {
      const fr2 = require('../Commands/Mod/mute')
      delete require.cache[require.resolve(`../Commands/Mod/mute`)];
      return fr2.run(bot, message, args)
    }
    // fetch
    // => comando SoftBan (não funciona ainda)
   if (command === 'softban' || command === 'ban&unban') {
     const fr3 = require('../Commands/Mod/softban')
     delete require.cache[require.resolve(`../Commands/Mod/softban`)];
     return fr3.run(bot, message, args)
   }
   // fetch
   // => comando UnBan (não funciona ainda)
   if (command === 'unban' || command === 'desbanir') {
     const fr4 = require('../Commands/Mod/unban')
     delete require.cache[require.resolve(`../Commands/Mod/unban`)];
     return fr4.run(bot, message, args)
   }
   // fetch
   // => comando UnMute
   if (command === 'unmute' || command === 'desmutar' || command === 'desmute' || command === 'dessilenciar') {
     const fr5 = require('../Commands/Mod/unmute')
     delete require.cache[require.resolve(`../Commands/Mod/unmute`)];
     return fr5.run(bot, message, args)
   }
   // fetch
   // fetch category




   // Categoria Administração
   // => comando lock
   if (command === 'lock' || command === 'bloqueiar' || command === 'travar') {
     const uk = require('../Commands/Admin/lock')
     delete require.cache[require.resolve(`../Commands/Admin/lock`)];
     return uk.run(bot, message, args)
   } 
   // fetch 
   // => comando UnLock
   if (command === 'unlock' || command === 'desbloqueiar' || command === 'destravar') {
     const uk1 = require('../Commands/Admin/unlock')
     delete require.cache[require.resolve(`../Commands/Admin/unlock`)];
     return uk1.run(bot, message, args)
   }
   // fetch 
   // => do Clear 
   if (command === 'clear' || command === 'limpar') {
     const uk2 = require('../Commands/Admin/clear')
     delete require.cache[require.resolve(`../Commands/Admin/clear`)];
     return uk2.run(bot, message, args)
   }
   // fetch category





   // Categoria Developer
   // => comando BlackListAdd 
   if (command === 'BlackListAdd' || command === 'asunaban') {
     const dev = require('../Commands/Developer/blacklistAdd')
     delete require.cache[require.resolve(`../Commands/Developer/blacklistAdd`)];
     return dev.run(bot, message, args)
   }
   // fetch
   // => comando BlackList Remove  
   if (command === 'blacklistRemove' || command === 'asunaunban') {
     const dev1 = require('../Commands/Developer/blacklistRemove')
     delete require.cache[require.resolve(`../Commands/Developer/blacklistRemove`)];
     return dev1.run(bot, message, args)
   }
   // fetch
   // => comando Eval
   if (command === 'eval' || command === 'ev') {
     const dev2 = require('../Commands/Developer/eval')
     delete require.cache[require.resolve(`../Commands/Developer/eval`)];
     return dev2.run(bot, message, args)
  }
  // fetch
  // => comando Passar Comando no Terminal do Bot
  if (command === 'passarComando' || command === 'useCommand') {
    const dev3 = require('../Commands/Developer/passarComando')
    delete require.cache[require.resolve(`../Commands/Developer/passarComando`)];
    return dev3.run(bot, message, args)
  }
  // fetch
  // => comando Terminal
  if (command === 'terminal' || command === 'cmd' || command === 'logs') {
    const dev4 = require('../Commands/Developer/terminal')
    delete require.cache[require.resolve(`../Commands/Developer/terminal`)];
    return dev4.run(bot, message, args)
  }

  if(command === 'desligar' || command === 'stop') {
    const dev5 = require('../Commands/Developer/desligar')
    delete require.cache[require.resolve('../Commands/Developer/desligar')];
    return dev5.run(bot, message, args)
  }
  // fetch category




  // Categoria Diversão
  // => comando Hug
  if (command === 'hug' || command === 'abraçar') {
    const div = require('../Commands/Fun/hug')
    delete require.cache[require.resolve(`../Commands/Fun/hug`)];
    return div.run(bot, message, args)
  }
  // fetch 
  // => comando Kiss
  if (command === 'kiss' || command === 'beijar') {
      const div1 = require('../Commands/Fun/kiss')
      delete require.cache[require.resolve(`../Commands/Fun/kiss`)];
      return div1.run(bot, message, args)
  }
  // fetch category

  if(command === 'slap' || command === 'tapa') {
    const div2 = require('../Commands/Fun/slap')
    delete require.cache[require.resolve(`../Commands/Fun/slap`)];
    return div2.run(bot, message, args)
  }


  if(command === 'meow' || command === 'gato') {
    const div3 = require('../Commands/Fun/meow')
    delete require.cache[require.resolve(`../Commands/Fun/meow`)];
    return div3.run(bot, message, args)
  }


if(command === 'pat' || command === 'cafune' || command === 'cafuné') {
  const div4 = require('../Commands/Fun/pat')
  delete require.cache[require.resolve(`../Commands/Fun/pat`)];
  return div4.run(bot, message, args)
}




  if(command === 'coins') {
    const eco = require('../Commands/Economia/coins')
    delete require.cache[require.resolve(`../Commands/Economia/coins`)];
    return eco.run(bot, message, args)
  }
  if(command === 'daily') {
    const eco1 = require('../Commands/Economia/daily')
    delete require.cache[require.resolve(`../Commands/Economia/daily`)];
    return eco1.run(bot, message, args)
  } 
 if(command === 'pay' || command === 'pagar') {
    const eco2 = require('../Commands/Economia/pay')
    delete require.cache[require.resolve(`../Commands/Economia/pay`)];
    return eco2.run(bot, message, args)
 }




 if (command === 'lyrics' || command === 'letras') {
   const music = require('../Commands/Music/lyrics')
   delete require.cache[require.resolve(`../Commands/Music/lyrics`)];
   return music.run(bot, message, args, queue)
 }

 if(command === 'play' || command === 'p') {
   const music1 = require('../Commands/Music/play')
   delete require.cache[require.resolve(`../Commands/Music/play`)];
   return music1.run(bot, message, args, queue)
 }
 if(command === 'queue' || command === 'q') {
   const music2 = require('../Commands/Music/queue')
   delete require.cache[require.resolve(`../Commands/Music/queue`)];
   return music2.run(bot, message, args, queue)
 }
 if(command === 'skip' || command === 'pular') {
   const music3 = require('../audio/sistema')
   delete require.cache[require.resolve(`../audio/sistema`)];
   return music3.run(bot, message, args, queue)
 }
 if(command === 'stop' || command === 'parar') {
   const music4 = require('../audio/sistema')
   delete require.cache[require.resolve('../audio/sistema')];
   return music4.run(bot, message, args, queue)
 }


 // NSFW

 if(command === '4k') {
  const nsfw2 = require('../Commands/Nsfw/4k')
  delete require.cache[require.resolve(`../Commands/Nsfw/4k`)];
  return nsfw2.run(bot, message, args)
}


if(command === 'anal') {
 const nsfw32 = require('../Commands/Nsfw/anal')
 delete require.cache[require.resolve(`../Commands/Nsfw/anal`)];
 return nsfw32.run(bot, message, args)
}


if(command === 'ass') {
  const nsfw321 = require('../Commands/Nsfw/ass')
  delete require.cache[require.resolve(`../Commands/Nsfw/ass`)];
  return nsfw321.run(bot, message, args)
}

if(command === 'gif') {
  const nsfw921 = require('../Commands/Nsfw/gif')
  delete require.cache[require.resolve(`../Commands/Nsfw/gif`)];
  return nsfw921.run(bot, message, args)
}


 if(command === 'hentai') {
   const nsfw = require('../Commands/Nsfw/hentai')
   delete require.cache[require.resolve(`../Commands/Nsfw/hentai`)];
   return nsfw.run(bot, message, args)
 }

 
 if(command === 'holo') {
  const nsfw123 = require('../Commands/Nsfw/holo')
  delete require.cache[require.resolve(`../Commands/Nsfw/holo`)];
  return nsfw123.run(bot, message, args)
 }


 if(command === 'lewd') {
  const nsfw98 = require('../Commands/Nsfw/lewd')
  delete require.cache[require.resolve(`../Commands/Nsfw/lewd`)];
  return nsfw98.run(bot, message, args)
 }


 if(command === 'pussy') {
  const nsgw654 = require('../Commands/Nsfw/pussy')
  delete require.cache[require.resolve(`../Commands/Nsfw/pussy`)];
  return nsgw654.run(bot, message, args)
}

if(command === 'thigh') {
  const nsfw18 = require('../Commands/Nsfw/thigh')
  delete require.cache[require.resolve(`../Commands/Nsfw/thigh`)];
  return nsfw18.run(bot, message, args)
}

if(command === 'trap') {
  const nsfw19 = require('../Commands/Nsfw/trap')
  delete require.cache[require.resolve(`../Commands/Nsfw/trap`)];
  return nsfw19.run(bot, message, args)
}
 

if(command === 'yuri') {
  const nsfw20 = require('../Commands/Nsfw/yuri')
  delete require.cache[require.resolve(`../Commands/Nsfw/yuri`)];
  return nsfw20.run(bot, message, args)
}



if(command === 'start') {
  const giveaway = require('../Commands/Sorteio/startGiveaway')
  delete require.cache[require.resolve(`../Commands/Sorteio/startGiveaway`)];
  return giveaway.run(bot, message, args)
}

} catch (err) {
  console.error("Erro:  " + err)
  const logs = require('./logs')
  const dc = require('discord.js')
  return logs.run(bot, message, args, dc, err)
  }


}