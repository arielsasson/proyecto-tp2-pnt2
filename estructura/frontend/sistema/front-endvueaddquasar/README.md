# front-end

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

1-Tome el proyecto clase 10
2-Instalar vuecli si corresponde
3-Ejecutar vue add quasar
4-https://stackoverflow.com/questions/58151768/stylus-syntax-where-do-imports-come-from

I just comment out the two lines ( maybe added by vue cli automatically, which is not correct)

in styles/quasar.variables.sass

//@import '~quasar-variables-styl'
and in styles/quasar.sass

// @import '~quasar-styl'
And then add quasar main sass import to main.js

import "quasar/dist/quasar.sass"
And I got fixed.

