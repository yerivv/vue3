import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			//컴포넌트 자동 호출
			dirs: ['src/components/app'],
			dts: true, //components.d.ts에 추가
		}),
	],
	mode: '', //기본은 dev
	resolve: {
		alias: {
			//별칭을 만들 때 사용
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		// preprocessorOptions: {// SCSS 전역 사용
		//   scss: {
		//     additionalData: '@import "./src/scss/_variables";'
		//   }
		// }
	},
	server: {
		port: 3030, //기본 3000에서 기본은 5173으로 변경됨
		open: false, //실행할때 오픈할고냐 말고냐 , 경로를 넣어도 됨. ex open: '/docs/index.html',
	},
	preview: {
		port: 8080,
		open: false,
	},
	build: {
		outDir: './dist',
	},
});
