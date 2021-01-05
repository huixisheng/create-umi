---
# 文档参考 https://d.umijs.org/zh-CN/config/frontmatter
title: <%= name %> 组件
nav:
  title: <% if (packageCate === 'biz') { %>业务组件<% } %><% if (packageCate === 'common') { %>通用组件<% } %>
  # 导航菜单的分组
  path: <% if (packageCate === 'biz') { %>/packages-biz<% } %><% if (packageCate === 'common') { %>packages-common<% } %>
# 以下配置先自行选择是否添加
# group:
#   title: 左侧菜单组件分组标题
#   # 左侧菜单组件分组路径
#   path: /
#   order: 1
---

# <%= packageName %> 组件
> <%= description %>

## 何时使用
<!-- 说明组件的使用场景 -->

## 代码演示

### 基本示例

<code src="./examples/basic.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

## FAQ
