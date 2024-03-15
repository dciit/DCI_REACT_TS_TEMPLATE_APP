# DCI_REACT_TS_TEMPLATE_APP
react typescript template + library 3rd + router + redux

npm --proxy http://192.168.226.244:8080  create vite@latest
npm --proxy http://192.168.226.244:8080 i
npm --proxy http://192.168.226.244:8080 i @mui/material @emotion/react @emotion/styled
npm --proxy http://192.168.226.244:8080 i moment
npm --proxy http://192.168.226.244:8080 i @mui/icons-material @mui/material @emotion/styled @emotion/react

npm --proxy http://192.168.226.244:8080 i react-router-dom
npm --proxy http://192.168.226.244:8080 i react
npm --proxy http://192.168.226.244:8080 i react-redux
npm --proxy http://192.168.226.244:8080 i react-redux redux-persist redux-thunk
npm --proxy http://192.168.226.244:8080 i axios




npm --proxy http://192.168.226.244:8080 i -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

3) เอาใส่ใน tailwind.config.js
  
export default {
      content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }


4) ใส่ใน src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

#root,body,html {
  height: 100%;
  width: 100%;
  padding: 0;
}

vite.config.ts 
export default defineConfig({
  plugins: [react()],
  base : 'projectname/'
})


 npm run dev
