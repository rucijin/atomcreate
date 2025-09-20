/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/'},
  { text: '计算技巧', link: '/notes/calculation-tricks/README.md'},
  { text: '理论随笔', link: '/notes/theory-essay/README.md' },
  { text: '英语', link: '/notes/english/README.md'},
  { text: '量子物理', link: '/notes/quantum-physics/README.md'},
  { text: '统计物理', link: '/notes/statistics-physics/README.md'},
  { text: '机器学习', link: '/notes/machine-learning/README.md'},
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [
      { text: 'Demo', link: '/en/notes/demo/README.md' },
      { text: '计算技巧', link: '/en/notes/calculation-tricks/README.md' },
      { text: '理论随笔', link: '/en/notes/theory-essay/README.md' },
    ],
  },
])

