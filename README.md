# unplugin-vconsole-import

[![NPM version](https://img.shields.io/npm/v/unplugin-vconsole-import?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vconsole-import)

Use the function of VConsole in various environments. 
Use in vite, webpack, rollup, esbuild

## Install

`pnpm install vconsole`

`pnpm install unplugin-vconsole-import -D`

## Usage
- vite

```javascript
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteVConsole from 'unplugin-vconsole-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: resolve(__dirname, './src/main.ts'),
      enabled: false,
    }),
  ],
})

```

- webpack
``` javascript
// 引入插件
import webpackVConsole from 'unplugin-vconsole-import/webpack';

...

{
  ...
  plugins: [
    new webpackVConsole({
      entry: resolve(__dirname, './src/main.ts'),
      enabled: false,
    }),
    ...
  ]
  ...
}
```

## Options
```javascript
{
  entry: string | string[]; // entry file that you want to use vconsole
  enabled?: boolean;
  config?: { // vconsole's options
    defaultPlugins?: string[];
    onReady?: () => void;
    onClearLog?: () => void;
    maxLogNumber?: number;
    disableLogScrolling?: boolean;
    theme?: 'light' | 'dark';
  };
}
```

## License

[MIT](./LICENSE) License © 2022 [fightwithtiger](https://github.com/fightwithtiger)
