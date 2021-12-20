// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '技术文档',
    link: '/technology/',
    items: [
      // {
      //   text: 'Javascript',
      //   items: [
      //     {
      //       text: 'Js 实现柯里化',
      //       link: '/pages/fb08d4/'
      //     }
      //   ]
      // },
      // {
      //   text: 'Node',
      //   items: [
      //     {
      //       text: '架构',
      //       link: '/pages/668df1/'
      //     },
      //     {
      //       text: '基础',
      //       link: '/pages/4a37a8/'
      //     },
      //     {
      //       text: '全局属性',
      //       link: '/pages/d20b6a/'
      //     },
      //   ]
      // },
      {
        text: '数据结构与算法',
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
        text: '开源CDN jsdelivr',
        link: '/pages/9ed0eb/'
      }
    ]
  }
]
