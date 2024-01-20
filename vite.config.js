import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.js'),
            name: 'VueFathom',
            fileName: 'vue-fathom'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                }
            }
        }
    }
})
