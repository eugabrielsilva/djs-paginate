const {MessageActionRow, MessageButton} = require("discord.js");

const paginate = async (message, pages, timeout = 60, prevText = "⏪ Anterior", nextText = "Próxima ⏩", pageText = "📄 Página") => {

    if(!pages || pages.length === 0) return;

    let navBtn1 = new MessageButton({
        customId: "previousbtn",
        label: prevText,
        style: "SECONDARY"
    });

    let navBtn2 = new MessageButton({
        customId: "nextbtn",
        label: nextText,
        style: "SECONDARY"
    });

    let page = 0;

    const row = new MessageActionRow({components: [navBtn1, navBtn2]});
    const curPage = await message.channel.send({
        embeds: [pages[page].setFooter({text: `${pageText} ${page + 1} / ${pages.length}`})],
        components: [row],
    });

    const filter = (i) =>
        i.customId === navBtn1.customId ||
        i.customId === navBtn2.customId;

    const collector = curPage.createMessageComponentCollector({
        filter,
        time: timeout * 1000,
    });

    collector.on("collect", async (i) => {
        switch(i.customId) {
            case navBtn1.customId:
                page = page > 0 ? --page : pages.length - 1;
                break;
            case navBtn2.customId:
                page = page + 1 < pages.length ? ++page : 0;
                break;
            default:
                break;
        }
        await i.deferUpdate();
        await i.editReply({
            embeds: [pages[page].setFooter({text: `${pageText} ${page + 1} / ${pages.length}`})],
            components: [row],
        });
        collector.resetTimer();
    });

    collector.on("end", (_, reason) => {
        if(reason !== "messageDelete") {
            const disabledRow = new MessageActionRow({
                components: [navBtn1.setDisabled(true), navBtn2.setDisabled(true)]
            });
            curPage.edit({
                embeds: [pages[page].setFooter({text: `${pageText} ${page + 1} / ${pages.length}`})],
                components: [disabledRow],
            }).catch(console.log);
        }
    });

    return curPage;
};

module.exports = paginate;