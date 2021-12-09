const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` *Whatsapper*

Доброго времени суток ${salam} ${pushname}, Приятного пользования :)

*📚 Всего команд : 137*
*🪀 Owner* : @${configs.ownerList[0].split('@')[0]}
*🖊️ Prefix* : Multi

*Команды для групп*
*${p+=1}.* ${prefix}Закрытьгруппу _open|close_
*${p+=1}.* ${prefix}антиссылка _on|off_
*${p+=1}.* ${prefix}antitagall _on|off_
*${p+=1}.* ${prefix}antiviewonce _on|off_
*${p+=1}.* ${prefix}приветствие _on|off_
*${p+=1}.* ${prefix}leave _on|off_
*${p+=1}.* ${prefix}сменитьлого _replyImage_
*${p+=1}.* ${prefix}сменитьимя _text_
*${p+=1}.* ${prefix}сменитправила _text_
*${p+=1}.* ${prefix}hidetag _text_
*${p+=1}.* ${prefix}датьадмина _@tag_
*${p+=1}.* ${prefix}снятьадмина _@tag_
*${p+=1}.* ${prefix}удалить _@tag_
*${p+=1}.* ${prefix}добавить _number_
*${p+=1}.* ${prefix}getpp _@tag_
*${p+=1}.* ${prefix}внимание
*${p+=1}.* ${prefix}ссылкагруппы
*${p+=1}.* ${prefix}сброситьссылку
*${p+=1}.* ${prefix}leave

*Загрузка*
*${p+=1}.* ${prefix}песня _query_
*${p+=1}.* ${prefix}видео _query_
*${p+=1}.* ${prefix}youtubedl _query_
*${p+=1}.* ${prefix}ytmp3 _link_
*${p+=1}.* ${prefix}ytmp4 _link_

*Стикеры*
*${p+=1}.* ${prefix}stickerwm _pack|author_
*${p+=1}.* ${prefix}takestick _pack|author_
*${p+=1}.* ${prefix}toimg _replySticker_
*${p+=1}.* ${prefix}togif _replySticker_
*${p+=1}.* ${prefix}semoji _emoji_
*${p+=1}.* ${prefix}стикерпл
*${p+=1}.* ${prefix}стикергиф
*${p+=1}.* ${prefix}стикер

*Анимэ*
*${p+=1}.* ${prefix}anime _query_
*${p+=1}.* ${prefix}manga _query_
*${p+=1}.* ${prefix}chara _query_
*${p+=1}.* ${prefix}waifu

*Образование*
*${p+=1}.* ${prefix}nulis _text_
*${p+=1}.* ${prefix}brainly _query_
*${p+=1}.* ${prefix}kbbi _query_
*${p+=1}.* ${prefix}wiki _query_

*Поиск*
*${p+=1}.* ${prefix}плеймаркет _apk_
*${p+=1}.* ${prefix}happymod _apk_
*${p+=1}.* ${prefix}iguser _username_
*${p+=1}.* ${prefix}igstalk _username_
*${p+=1}.* ${prefix}ютуб _query_
*${p+=1}.* ${prefix}ytplaylist _query_
*${p+=1}.* ${prefix}ytchannel _channel_
*${p+=1}.* ${prefix}shoope _product_
*${p+=1}.* ${prefix}spotify _song_
*${p+=1}.* ${prefix}gsmarena _hp_
*${p+=1}.* ${prefix}searchmusic _replyAudio_
*${p+=1}.* ${prefix}wallpaper _query_
*${p+=1}.* ${prefix}pinterest _query_
*${p+=1}.* ${prefix}googleimage _query_
*${p+=1}.* ${prefix}jagokata _kata_

*PRIMBON*
*${p+=1}.* ${prefix}jodoh _kamu|dia_
*${p+=1}.* ${prefix}artinama _nama_
*${p+=1}.* ${prefix}artimimpi _mimpi_

*Случайное*
*${p+=1}.* ${prefix}meme
*${p+=1}.* ${prefix}nickepep
*${p+=1}.* ${prefix}estetikpic

*Создание картинки с надписью*
*${p+=1}.* ${prefix}wolflogo _text1|text2_
*${p+=1}.* ${prefix}logoaveng _text1|text2_
*${p+=1}.* ${prefix}phlogo _text1|text2_
*${p+=1}.* ${prefix}marvellogo _text1|text2_
*${p+=1}.* ${prefix}gtext _text1|text2_
*${p+=1}.* ${prefix}pubglogo _text1|text2_
*${p+=1}.* ${prefix}snowwrite _text1|text2_
*${p+=1}.* ${prefix}watercolour _text1|text2_
*${p+=1}.* ${prefix}harta _text_
*${p+=1}.* ${prefix}thundertext _text_
*${p+=1}.* ${prefix}flametext _text_
*${p+=1}.* ${prefix}glowtext _text_
*${p+=1}.* ${prefix}smoketext _text_
*${p+=1}.* ${prefix}lithgtext _text_
*${p+=1}.* ${prefix}flowertext _text_
*${p+=1}.* ${prefix}bneon _text_
*${p+=1}.* ${prefix}matrix _text_
*${p+=1}.* ${prefix}breakwall _text_
*${p+=1}.* ${prefix}gneon _text_
*${p+=1}.* ${prefix}dropwater _text_
*${p+=1}.* ${prefix}tfire _text_
*${p+=1}.* ${prefix}sandw _text_
*${p+=1}.* ${prefix}epep _text_
*${p+=1}.* ${prefix}gplaybutton _text_
*${p+=1}.* ${prefix}splaybutton _text_
*${p+=1}.* ${prefix}text3dbox _text_
*${p+=1}.* ${prefix}text3d _text_
*${p+=1}.* ${prefix}logobp _text_
*${p+=1}.* ${prefix}leavest _text_
*${p+=1}.* ${prefix}tlight _text_
*${p+=1}.* ${prefix}naruto _text_
*${p+=1}.* ${prefix}crosslogo _text_
*${p+=1}.* ${prefix}cslogo _text_
*${p+=1}.* ${prefix}crismes _text_

*Фоторедактор*
*${p+=1}.* ${prefix}missing _text1|text2|text3|@tag_
*${p+=1}.* ${prefix}calender _replyImage / @tag_
*${p+=1}.* ${prefix}drawing _replyImage / @tag_
*${p+=1}.* ${prefix}sketch _replyImage / @tag_

*Разное*
*${p+=1}.* ${prefix}tomp3 _replyVideo_
*${p+=1}.* ${prefix}removebg _replyImage / @tag_
*${p+=1}.* ${prefix}tts _code|text_
*${p+=1}.* ${prefix}qrencode _text_
*${p+=1}.* ${prefix}barcode _text_
*${p+=1}.* ${prefix}jadwalsholat _daerah_
*${p+=1}.* ${prefix}jadwaltv _channel_
*${p+=1}.* ${prefix}tebakgambar

*Информация*
*${p+=1}.* ${prefix}stickermenu
*${p+=1}.* ${prefix}owner
*${p+=1}.* ${prefix}limit
*${p+=1}.* ${prefix}info
*${p+=1}.* ${prefix}listvn

*Команды для владельца*
*${p+=1}.* ${prefix}setpp _replyImage_
*${p+=1}.* ${prefix}eval _text_
*${p+=1}.* ${prefix}term _code_
*${p+=1}.* ${prefix}block _@tag_
*${p+=1}.* ${prefix}unblock _@tag_
*${p+=1}.* ${prefix}join _link_
*${p+=1}.* ${prefix}bc _text_
*${p+=1}.* ${prefix}addvn _replyAudio/vn_
*${p+=1}.* ${prefix}delvn _name_
*${p+=1}.* ${prefix}premium add _@tag_
*${p+=1}.* ${prefix}premium del _@tag_
*${p+=1}.* ${prefix}premium list
*${p+=1}.* ${prefix}clearall
*${p+=1}.* ${prefix}resetlimit
*${p+=1}.* ${prefix}self
*${p+=1}.* ${prefix}public
`
}

const ingfo = `Всем привет!Бот написан нашей группой разработчиков.
По всем вопросам о боте вы можете обратиться в нашу группу
ватсап https://chat.whatsapp.com/HCvg8u86t8u8o0nFq3x44B

С уважением ZloiAdmin!
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Подождите минутку!',
			 group: 'Эту команду можно использовать только в группе!',
			 admin: 'Команду может использовать только администратор!',
			 botAdmin: 'Эту команду можно использовать только в том случае, если бот является администратором группы!',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'Эту команду может использовать только мой хозяин!Свалил с раздела нах!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
