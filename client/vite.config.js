import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    //anytime we find "@" configuration, it will replace with our current folder directory that leads to our source directory
    alias : [{find: "@" , replacement: path.resolve(__dirname, "src")}]
  }
})
