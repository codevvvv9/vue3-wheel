// @ts-nocheck
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export function demo() {
  return {
    name: 'demo',
    transform(code, id) {
      if (
        !/\/src\/components\/.*\.demo\.vue/.test(id) ||
        !/vue&type=demo/.test(id)
      ) {
        return;
      }

      let path = `.${id.match(/\/src\/components\/.*\.demo\.vue/)[0]}`;
      const file = fs.readFileSync(path).toString();
      // demo文件解析必须以demo标签开头的文件才能被解析成源码
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      // 解析的源码标题 即<demo>标签中间的内容
      const title = parsed.children[0].content
      // 解析的源码主体
      const main = file.split(parsed.loc.source).join('').trim()

      return `export default function (Component) {
  Component.__sourceCode = ${JSON.stringify(main)}
  Component.__sourceCodeTitle = ${JSON.stringify(title)}
}`.trim()
    }
  }
}