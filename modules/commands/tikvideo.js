module.exports.config = {
    name: "tikvideo",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tải video từ tiktok không logo",
    commandCategory: "Tiện ích",
    usages: "[url]",
    cooldowns: 5,
    bangfix: "a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0"
    //API_MẶC_ĐỊNH---https://rapidapi.com/AdKT36/api/video-nwm/
};
module.exports.run = async function ({ api, event, args, utils  })  {
const { APIKEY } = global.configModule.tikvideo;
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
const res = await axios.get(`https://raw.githubusercontent.com/D-Jukiee/data/main/keytik.json`);
const length_KEY = res.data.keyTik.length

if (!args[0]){ return api.sendMessage("😾 Không có link video thì bố tao cũng không lấy được!", event.threadID, event.messageID);}
const link = args[0]
try {
  const options = {
    method: 'GET',
    url: 'https://video-nwm.p.rapidapi.com/url/',
    params: {url: link},
    headers: {
      'x-rapidapi-key': '`${bangfix}`',
      'x-rapidapi-host': 'video-nwm.p.rapidapi.com'
    }
    };
    const data = await axios.request(options);
    //const data1 = response.data
    const link1 = data.data.item.video.playAddr[0] || data.data.item.video.playAddr
    //api.sendMessage(`${link1}`, event.threadID);
    path1 = __dirname+`/cache/${event.senderID}.mp4`  
    const getms = (await axios.get(link1,{responseType: "arraybuffer"})).data; 
      fs.writeFileSync(path1, Buffer.from(getms, "utf-8"));
      
    if (fs.statSync(__dirname + `/cache/${event.senderID}.mp4`).size > 26000000) return api.sendMessage('😼 Mark kêu dung lượng thế kia gửi bằng mắt à ?', event.threadID, () => unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID);
    else return api.sendMessage({body : "" , attachment: fs.createReadStream(__dirname + `/cache/${event.senderID}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${event.senderID}.mp4`), event.messageID)
} catch {
            return api.sendMessage('😿 Không thể sử lý yêu cầu này', event.threadID, event.messageID);
        }
}