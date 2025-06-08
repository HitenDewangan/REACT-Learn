'use client'

import { defineConfig } from 'postcss';


const config = {
  plugins: ["@tailwindcss/postcss"],
  tailwindcss: {
    config: './tailwind.config.js', // Path to your Tailwind CSS configuration file
  },

  
};

export default config;
