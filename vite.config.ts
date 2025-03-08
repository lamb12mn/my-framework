// vite.config.ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'
// 引入vite-plugin-eslint

export default defineConfig({
	plugins: [
		vue(),
        tailwindcss(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: true,
			eslintrc: {
				enabled: false, // 启用与 Eslint 集成，生成后设置为false，需要重新生成才可打开
				filepath: './.eslintrc-auto-imports.json', // 生成 EsLint 配置文件的路径，需要配置在eslint中避免eslint检查错误
				globalsPropValue: true, // 用于覆盖 globals 属性，
			},
			resolvers: [AntDesignVueResolver()], // 路径解析器列表
		}),
	],
	// less支持
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		extensions: ['.js', '.json', '.vue', '.ts'],
		alias: {
			'@': resolve(__dirname, 'src'),
			components: resolve(__dirname, 'src/components'),
			views: resolve(__dirname, 'src/views'),
			utils: resolve(__dirname, 'src/utils'),
            styles: resolve(__dirname, 'src/styles'),
            enum: resolve(__dirname, 'src/enum'),
		},
	},
	// vite.config.ts中添加
	server: {
		host: true, // 可以以IP访问
		port: 8080, // 端口
		open: true, // 自动打开游览器
		cors: true, // 允许跨域
		proxy: {
			'/api': {
				// 这里配置真实的后端环境地址
				target: 'http://aiot',
				changeOrigin: true,
				rewrite: path => path.replace('/api/', '/'),
			},
		},
	},
	// 修改后项目访问端口随之变更才可访问
	// vite.config.ts中添加
	build: {
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 2000,
		// 在生产环境移除console.log
		terserOptions: {
			compress: {
				drop_console: false,
				pure_funcs: ['console.log', 'console.info'],
				drop_debugger: true,
			},
		},
		assetsDir: 'static/assets',
		// 静态资源打包到dist下的不同目录
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
		},
	},
})
// 别名配置需注意：如是ts项目需在tsconfig.app.json中paths相对应添加别名，否则无法通过ts检查
