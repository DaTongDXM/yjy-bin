const Questions = [
  {
    name: 'name',
    message: 'package name:',
    type: 'input',
    default: null,
    validate(val) {
      if (val) return true;
      return '请输入packageName!'
    }
  },
  {
    name: 'version',
    message: 'version:',
    type: 'input',
    default: '1.0.0',
    validate(val) {
      const reg = /(([0-9]{1,})\.?){3}/
      if (val && reg.test(val)) return true;
      return '版本号格式不正确!'
    }
  },
  {
    name: 'description',
    message: 'description:',
    type: 'input',
    default: '',
  },
  {
    name: 'author',
    message: 'author:',
    type: 'input',
    default: '',
  }
]
const Warning = [
  {
    name: 'warning',
    message: '应用已存在，是否删除重建？',
    type: 'confiem',
    default: false
  }
]

const PkgDefault = {
  main: "app.ts",
  scripts: {
    dev: "cross-env NODE_ENV=dev nodemon --ignore '*.d.ts' -e ts,ejs --exec ts-node -T ./app.ts"
  },
  dependencies: {
    "cross-env": "^7.0.3",
    "koa": "^2.14.1",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.3",
    "yjy-koa-core": "^1.0.0"
  },
  devDependencies: {
    "@types/koa": "^2.13.5",
    "@types/node": "^18.14.2",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5"
  }
}


module.exports = {
  Questions,
  PkgDefault,
  Warning
}