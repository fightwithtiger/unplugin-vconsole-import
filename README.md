# unplugin-vconsole-import

[![NPM version](https://img.shields.io/npm/v/unplugin-vconsole-import?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vconsole-import)

Dynamically generate routes based on the pages that can be viewed by the role. Used it in vue、vue-router program.

## Install

`pnpm install vconsole`

`pnpm install unplugin-vconsole-import -D`

## Usage

```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteVConsole from 'unplugin-vconsole-import/vite';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteVConsole({
      entry: path.resolve('src/main.ts'), // or you can use entry: [path.resolve('src/main.ts')]
      enabled: true,
      config: {
        maxLogNumber: 1000,
        theme: 'dark'
      }
    })
  ]
});
```

## Options
```javascript
{
  entry: string | string[]; // entry file require
  enabled?: boolean;
  config?: { // vconsole options
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
