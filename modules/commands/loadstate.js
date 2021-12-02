module.exports.config = {
    name: "loadstate",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Coppy By Bằng",
    description: "Làm mới appstate.json",
    commandCategory: "Thánh",
    usages: "",
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function ({
    api,
    event,
    args
}) {
    const fs = global.nodemodule["fs-extra"];
         let appstate = api.getAppState();
         const data = JSON.stringify(appstate);
    fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
        if (err) {
                  return api.sendMessage(`Lỗi khi ghi tệp: ${err}`, event.threadID);
          } else {
                  return api.sendMessage(`Áp dụng fbstate mới...`, event.threadID);
    }
  });

}