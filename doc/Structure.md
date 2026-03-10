# 项目结构

```
├─.github/	GitHub 平台配置文件目录，存放 GitHub 特有的配置
	└PULL_REQUEST_TEMPLATE.md	PR 模板文件，规范团队成员提交 Pull Request 的格式
├─.vscode/	VS Code 编辑器配置文件目录，存放工作区设置、推荐插件等
├─build/	构建输出目录，存放项目打包编译后生成的文件
├─doc/	项目文档目录，存放技术文档、说明文档等
	├Structure.md	项目结构说明文档
	└Installation.md	项目安装部署指南文档
├─public/	静态资源目录，存放不需要编译的公共资源文件（如 favicon、字体等）
├─src/	源代码目录，存放项目主要开发代码
	├─common	公共模块目录，存放通用配置、常量、工具类等
	├─components	组件目录，存放可复用的 UI 组件
	├─hooks	自定义 Hooks 目录，存放 React 自定义 Hook 函数
	├─md	Markdown 文件目录，存放项目相关的 MD 文档或内容
	├─pages	页面目录，存放各路由页面对应的组件
	├─styles	样式文件目录，存放全局或模块化的 CSS/SCSS 样式
	└─utils	工具函数目录，存放通用的辅助函数
	└main.jsx	应用入口文件，React 应用的启动入口
├.gitignore	Git 忽略文件配置，指定哪些文件不需要提交到版本控制
├eslint.config.js	ESLint 配置文件，定义代码规范和检查规则
├Igem-logo.png	iGEM Logo 图片文件
├index.html	HTML 入口文件，浏览器加载的首页模板
├LICENSE	开源许可证文件，声明项目的使用和分发条款
├package-lock.json	依赖锁定文件，记录安装依赖的确切版本，保证团队环境一致
├package.json	项目配置文件，定义项目信息、依赖包、脚本命令等
├README.m	项目说明文档，介绍项目功能、使用方法等
└vite.config.js Vite 构建工具配置文件，定义打包、代理、插件等构建选项
```
