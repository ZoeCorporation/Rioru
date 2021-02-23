package com.github.mrdroox.projects.utilities

import net.dv8tion.jda.api.EmbedBuilder
import net.dv8tion.jda.api.entities.User
import java.awt.Color

class ZoeEmbed(user: User?, color: EmbedColor): EmbedBuilder() {
    init {
        lateinit var colorToSet: Color;
        when {
            color === EmbedColor.DEFAULT -> colorToSet = Color(255, 10, 247)
            color === EmbedColor.MINECRAFT -> colorToSet = Color(34, 173, 31)
            color === EmbedColor.MODERATION_ACTIONS -> colorToSet = Color(255, 0, 0)
            color === EmbedColor.LOGS -> colorToSet = Color(17, 65, 92)
            color === EmbedColor.ROBLOX -> colorToSet = Color(209, 4, 21)
            color === EmbedColor.GIVEAWAY -> colorToSet = Color(237, 120, 9)
            color === EmbedColor.FUN -> colorToSet = Color(235, 227, 9)
            color === EmbedColor.ECONOMY -> colorToSet = Color(43, 161, 16)
            color === EmbedColor.MUSIC -> colorToSet = Color(84, 17, 92)
            color === EmbedColor.MODERATION -> colorToSet = Color(19, 116, 171)
            color === EmbedColor.SOCIAL -> colorToSet = Color(18, 150, 224)
        }

        setFooter(user?.asTag, user?.avatarUrl)
        setColor(colorToSet)
    }

    constructor(user: User?): this(user, EmbedColor.DEFAULT) {}
}