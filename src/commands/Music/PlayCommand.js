/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')
const { MessageEmbed } = require('discord.js');
const { Utils } = require('erela.js');

module.exports = class PlayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'play',
      aliases: ['tocar', 'p'],
      usage: '<prefix>play <args>',
      description: 'Ouça músicas em algum canal de voz',
      category: 'Music'
    })
  }

  async run ({ channel, args, member, guild, author, lavalink }) {
   
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')
    if (!guild.me.permissions.has("CONNECT")) return channel.send("Eu não tenho a Permissão `Conectar` para fazer isso");
    if (!guild.me.permissions.has("SPEAK")) return channel.send("Eu não tenho a Permissão `Falar` para fazer isso");

    if (!args.join(' ')) return channel.send(":x: | Diga um nome para mim pesquisar ou url");

    const player = lavalink.players.spawn({
        guild: guild,
        textChannel: channel,
        voiceChannel
    });
   lavalink.search(args.join(' '), author).then(async res => {
        switch (res.loadType) {
            case "TRACK_LOADED":
                player.queue.add(res.tracks[0]);
              channel.send(`Adicionando **${res.tracks[0].title}** \`${Utils.formatTime(res.tracks[0].duration, true)}\``).then(msg => { if (msg.deletable) msg.delete({ timeout: 5000 }) });
                if (!player.playing) player.play()
                break;
            
            case "SEARCH_RESULT":
                let index = 1;
                const tracks = res.tracks.slice(0, 8);
                const embed = new MessageEmbed()
                    .setColor('#66dbff')
                    .setAuthor("Selecione a Música", author.displayAvatarURL({ dynamic: true, size: 2048 }))
                    .setDescription(tracks.map(video => `**${index++} -** ${video.title}⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                    ⠀⠀⠀⠀`))
                    .setFooter("Seu tempo vai acabar daqui 1 minuto. Use cancel ou cancelar para cancelar a ação.")

                const deleteEmbed = await channel.send(embed)

                const collector = channel.createMessageCollector(m => {
                    return m.author.id === author.id

                }, { time: 60000, max: 1 });

                collector.on("collect", m => {
                    if (m.content.toLowerCase() === '1' || m.content.toLowerCase() === '2' || m.content.toLowerCase() === '3' || m.content.toLowerCase() === '4' || m.content.toLowerCase() === '5' || m.content.toLowerCase() === '6' || m.content.toLowerCase() === '7' || m.content.toLowerCase() === '8') {
                      deleteEmbed.delete({ timeout: 3000 })
                      m.delete({ timeout: 3000 })
                      let msg = m.content;
                    if (msg.toLowerCase() === 'cancel' || msg.toLowerCase() === 'cancelar') return collector.stop('Cancelado');

                    const track = tracks[Number(m.content) - 1];
                    player.queue.add(track)
                    channel.send(`Adicionando \`${track.title}\` \`${Utils.formatTime(track.duration, true)}\` a Lista de Reprodução`).then(msg => { if (msg.deletable) msg.delete({ timeout: 5000 }) });
                    if (!player.playing) player.play();
                    }
                });

                collector.on("end", (_, reason) => {
                    if (["time", "Cancelado"].includes(reason)) return channel.send("Seleção de Música cancelada")
                });
                break;
                
            case "PLAYLIST_LOADED":

                res.playlist.tracks.forEach(track => player.queue.add(track));
                const duration = Utils.formatTime(res.playlist.tracks.reduce((acc, cur) => ({duration: acc.duration + cur.duration})).duration, true);
                channel.send(`Adicionando \`${res.playlist.tracks.length}\` \`${duration}\` Músicas na Playlist \`${res.playlist.info.name}\``).then(msg => { if (msg.deletable) msg.delete({ timeout: 5000 }) });
                if(!player.playing) player.play()
            break;
            
        }
    
    }).catch(err => channel.send(err))
  }
}
