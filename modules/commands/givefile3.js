module.exports.config = {
    name: 'givefile3',
    version: '2.1.0',
    hasPermssion: 2,
    credits: 'BằngVIP',
    /** Dựa trên givefile của NTKhang! */
    description: '',
    commandCategory: 'admin',
    usages: 'givefile',
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};
module.exports.run = async({
    args,
    api,
    event
}) => {
   const permission = ["100005463556532"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Chỉ có làm thì mới có ăn :)", event.threadID, event.messageID);
    var a = function (a) {
        api.sendMessage(a, event.threadID);
    }
    a("Tôi gửi cho bạn rồi đấy 😁");
    const fs = global.nodemodule["fs-extra"];
 
    var path = [],
        pathrn = [],
        pathrntxt = [];
    var msg = '';
    var notfound = "";
    for (let file of args) {
        if (!fs.existsSync(__dirname + "/" + file)) {
            notfound += 'Bạn lú rồi làm J có file: ' + file;
            continue;
        };
        if (file.endsWith('.js')) {
            fs.copyFile(__dirname + '/' + file, __dirname + '/' + file.replace(".js", ".txt"));
            pathrn.push(
                fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
            );
            pathrntxt.push(file.replace('.js', '.txt'));
        } else {
            path.push(fs.createReadStream(__dirname + '/' + file));
        }
    }
    var mainpath = [...path, ...pathrn];
    if (pathrn.length != 0)
        msg += 'Alo cậu chủ. File của cậu chủ đây';
    api.sendMessage({
        body: msg + "\n" + notfound,
        attachment: mainpath
    }, event.messageReply.senderID);
    pathrntxt.forEach(file => {
        if (fs.existsSync(__dirname + '/' + file)) fs.unlinkSync(__dirname + '/' + file);
    });
};