/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume';

export default defineNavbarConfig([
	{ text: '首页', link: '/' },
	{ text: '申论', link: '/sl/README.md' },
	{ text: '行测', link: '/xc/README.md' },
	{
		text: '我的',
		items: [
			{ text: '博客', link: '/blog/' },
			{ text: '标签', link: '/blog/tags/' },
			{ text: '归档', link: '/blog/archives/' },
		],
	},
]);
