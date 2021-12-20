// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技术文档',
    link: '/technology/',
    items: [
      {
        text: '数据结构',
        items: [
          {
            text: '线性表',
            link: '/pages/f5f7be/'
          }
        ]
      },
    ]
  },
  {
    text: '开发笔记',
    link: '/note/',
    items: [
      {
        text: '工具',
        items: [
          {
            text: 'JSDelivr(免费 CDN) ',
            link: '/pages/9ed0eb/'
          },
          {
            text: 'Mac 调试 Web 页',
            link: '/pages/21039e/'
          },
          {
            text: 'NPM 版本号详解',
            link: '/pages/478dcc/'
          },
        ]
      },
      {
        text: '开发经验',
        items: [
          {
            text: 'H5 键盘',
            link: '/pages/17425e/'
          }
        ]
      }
    ]
  }
]
