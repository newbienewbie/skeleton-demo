const fs=require('fs');
const path=require('path');
var less = require('less');


const src='./frontend/themes/itminus/less/index.less';
const out='./frontend/themes/itminus/static/css/index.css';
const lessInput=fs.readFileSync(src);
less.render(
  lessInput.toString(),
  { 
    filename:path.resolve(src),
  }
).then(
  output=> {
    fs.writeFileSync(out,output.css);
  },
  err=> console.error(err)
);
    