const fs = require('fs');
const path = require('path');
const Inquirer = require('inquirer');
const { Warning, Questions, PkgDefault } = require('../config/inquirer.js');
const init = async (basePath) => {
  //当前目录是否已经初始化项目
  const exist = fs.existsSync(path.join(basePath, 'package.json'));
  const files = fs.readdirSync(basePath);
  //存在项目判断是否删除
  if (exist) {
    const isExist = await Inquirer.prompt(Warning);
    if (isExist.warning) {
      rmoveDir(files, basePath)
    } else {
      return;
    }
  }
  //初始化文件夹
  // const answers = await Inquirer.prompt(Questions);
  // let fileObj = { ...answers, ...PkgDefault };
  // fs.writeFileSync(path.join(basePath, 'package.json'), JSON.stringify(fileObj, null, 2));
  // fs.cpSync()
}
//删除现有文件
const rmoveDir = (files, basePath) => {
  files.forEach((file, index) => {
    const curPath = path.join(basePath + '/', file);
    if (fs.statSync(curPath).isDirectory()) {
      fs.rmdirSync(curPath)
    } else {
      fs.unlinkSync(curPath, (error) => {
        if (error) throw error;
      })
    }
    console.log(curPath)
  })
}
module.exports = init