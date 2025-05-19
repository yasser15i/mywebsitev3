import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // تغيير من '/portfolio/' إلى '/' للتشغيل في المجلد الرئيسي
});