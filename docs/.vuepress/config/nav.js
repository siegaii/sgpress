// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技术文档',
    link: '/technology/',
    items: [
      {
        text: 'Javascript',
        items: [
          {
            text: 'Js 实现柯里化',
            link: '/pages/fb08d4/'
          }
        ]
      },
      {
        text: 'Node',
        items: [
          {
            text: 'Node 架构',
            link: '/pages/668df1/'
          }
        ]
      }
    ]
  },
  {
    text: '开发笔记',
    link: '/note/',
    items: [
      {
        text: 'NPM',
        items: [
          {
            text: 'NPM package.json 版本号详解',
            link: '/pages/478dcc/'
          }
        ]
      },
      {
        text: '工具',
        items: [
          {
            text: '开源CDN jsdelivr',
            link: '/pages/9ed0eb/'
          }
        ]
      }
    ]
  }
  // { text: '日常', link: '/live/' }
]
