'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the astounding ${chalk.red('generator-my-project')} generator!`
      )
    );
    
    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: "project"
      },
      {
        type: "input",
        name: "author",
        message: "author",
        default: ""
      },
      {
        type: "input",
        name: "description",
        message: "description",
        default: ""
      }
    ];

    // this.log("app name", prompts.name);
    // this.log("app author", prompts.author);
    // this.log("app description", prompts.description);

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**'),//全部拷贝
      this.destinationPath('./')//目的地路径
    );
    this.initPackage();
  }
  initPackage(){
    let pkJson = this.fs.readJSON(this.templatePath('./package.json'),{});
    const { props } = this;
    Object.assign(pkJson,{
      name: props.name,
      author: props.author,
      description: props.description
    });
    this.fs.extendJSON(this.destinationPath('./package.json'),pkJson)
  }

  install() {
    this.spawnCommand('npm', ['install']);
  }
};
