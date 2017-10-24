const defConfig=require('./config.default');



// 克隆一个默认配置
const config=Object.assign({},defConfig);

config.env='prod';
config.basePath={
    "views":[
        path.join(__dirname,"../frontend/themes/itminus/views"),
    ],
    "assets":[
        path.join(__dirname,"../frontend/themes/itminus/static"),
    ],
    "ebooks":"C:/Users/itminus/pdfs",
    "lock":process.cwd(),
};


module.exports = config;