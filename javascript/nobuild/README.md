 This playground features :

- [`packages/lib1/`](packgaes/lib1/)
- [`packages/lib2/`](packgaes/lib2/)
- [`services/app1_node/`](services/app1_node/)
- [`services/app2_sveltekit/`](services/app2_sveltekit/)

`lib1`, `lib2` and `app1_node` don't use any build tools ([babel](https://esbuild.github.io/), [esbuild](https://esbuild.github.io/), [tsc](https://github.com/microsoft/TypeScript)) in this playground.

The [pnpm workspace](https://pnpm.io/fr/workspaces) feature is used, see [`pnpm-workpsace.yaml`](./pnpm-workpsace.yaml):

```
packages:
  - 'packages/*'
  - 'services/*'
```

It's important to include `services/*` in addition to `packages/*`.

```
    "type": "module",
    "main": "./src/index.js"
```

These lines are important in the `packages/lib1/package.json` and `packages/lib2/package.json`.

With `pnpm workpsace` fetaure, executing `pnpm install` from any folder (`packages/lib1/`, `packages/lib2/`, `services/app1_node/`, `services/app2_sveltekit/` creates all these `node_modules`:
```
.
├── node_modules
├── packages
│   └── lib2
│       ├── node_modules
└── services
    ├── app1_node
    │   ├── node_modules
    └── app2_sveltekit
        ├── node_modules
        └── ...
```

Since this project is not a TypeScript project, i.e. a pure Javascript project with no type, I had configured the 

- [`packages/lib1/jsconfig.json`](packages/lib1/jsconfig.json),
- [`packages/lib2/jsconfig.json`](packages/lib2/jsconfig.json),
- [`services/app1_node/jsconfig.json`](services/app1_node/jsconfig.json)
- and [`services/app2_sveltekit/jsconfig.json`](services/app2_sveltekit/jsconfig.json)

files to eliminate error messages of the type `Could not find a declaration file for module` returned by [typescript-language-server](https://github.com/typescript-language-server/typescript-language-server) (LSP) used by my Neovim editor.

I'd like to point out that my jsconfig.json settings are a bit careless, as I don't have complete knowledge of them.

For example, I don't understand why I had to activate `“checkJs”: false` in the Svelte project, to remove errors in the “*.svelte” files.


The [jsconfig.json file can also be named tsconfig.json](https://www.typescriptlang.org/tsconfig/), and I chose jsconfig.json because this playground is a javascript project.

To test the playground, go to:

- [`packages/lib1/README.md`](packgaes/lib1/README.md)
- [`packages/lib2/README.md`](packgaes/lib2/README.md)
- [`services/app1_node/README.md`](services/app1_node/README.md)
- [`services/app2_sveltekit/README.md`](services/app2_sveltekit/README.md)
