const glob = require('glob');
const { statSync, readdirSync } = require('fs');
const fs = require('fs');
const path = require('path');
const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'name',
        message: `组件名字?`,
        default: this.name,
      },
      {
        name: 'description',
        message: `组件的描述?`,
      },
      {
        name: 'packageCate',
        message: '请选择组件类型',
        type: 'rawlist',
        choices: [{
          value: 'biz',
          name: '业务组件'
        }, {
          value: 'common',
          name: '通用组件',
        }]
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFilesCustom();
  }

  writeFilesCustom() {
    const packageName = require(path.join(process.cwd(), 'package.json')).name;
    this.prompts.packageName = this._.capitalize(this.prompts.name);
    this.prompts.packageName = packageName;

    glob
      .sync('**/*', {
        cwd: this.templatePath(),
        dot: true,
        ignore: ['**/node_modules/**', '**/.DS_Store', '**/.git'],
      })
      .forEach(file => {
        const filePath = this.templatePath(file);
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(
            this.templatePath(filePath),
            this.destinationPath('src', this.prompts.name, file),
            this.prompts,
          );
        }
      });
  }

  end() {
    const src = path.join(process.cwd(), 'src');
    const packageEntryFile = path.join(src, 'index.tsx');
    const files = readdirSync(src);
    let content = `// 脚本自动生成\n${__filename}\n`;
    const ignore = ['.umi', '.DS_Store'];
    files.filter((file) => {
      return statSync(path.join(src, file)).isDirectory() && !ignore.includes(file);
    }).forEach((file) => {
      const { camelCase, upperFirst } = this._;
      content += `export { default as ${upperFirst(camelCase(file))} } from './${file}';\n`;
    });
    fs.writeFileSync(packageEntryFile, content);
    console.log(packageEntryFile, '已自动生成');
  }
}

module.exports = Generator;
