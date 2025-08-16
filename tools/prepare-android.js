
const fs = require('fs'); const path = require('path');
const AND = path.join(__dirname,'..','android'); if(!fs.existsSync(AND)){console.log('android folder not found (run npx cap add android)'); process.exit(0)}
function ensureDir(p){fs.mkdirSync(p,{recursive:true})}
const srcIcon = path.join(__dirname,'..','assets','icon.png')
if(!fs.existsSync(srcIcon)){console.log('assets/icon.png missing'); process.exit(0)}
const sizes = { mipmap_mdpi:48, mipmap_hdpi:72, mipmap_xhdpi:96, mipmap_xxhdpi:144, mipmap_xxxhdpi:192 }
for(const [dir,sz] of Object.entries(sizes)){
  const dstDir = path.join(AND,'app','src','main','res',dir)
  ensureDir(dstDir)
  fs.copyFileSync(srcIcon, path.join(dstDir,'ic_launcher.png'))
}
const strings = path.join(AND,'app','src','main','res','values','strings.xml')
if(fs.existsSync(strings)){
  let s = fs.readFileSync(strings,'utf8'); s=s.replace(/<string name="app_name">.*?<\/string>/, '<string name="app_name">Tiger Monster Run</string>');
  fs.writeFileSync(strings,s,'utf8')
}
console.log('Android assets prepared.')
