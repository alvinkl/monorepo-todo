# Monorepo 

## First initial setup
- Use Yarn instead of NPM
If you don't have Yarn yet, you can run
```bash
$ npm install --global yarn
```

Do clone the repository
then cd to the directory and run `$ yarn`

After yarn finished installing all the dependencies needed for the workspace,
run
```bash
$ yarn bootstrap
```

for linking all the dependencies using lerna instead of manually linking with `$ yarn link` or `$ npm link`

Then you can try out the app by running
```bash
$ yarn dev
```

## Folder structure
```bash
├── packages
│   ├── ui (shared component package - no dependency to other, storybook belongs here)
│   ├── datasources (stores for all the dependency, everything related to fetching and logic, maybe should split in the future)
│   ├── main-app (next js runs here, to orchestrate between feature packages (like r***s, s**, but in this case Todo feature, this package allowed to import the datasource)
│   ├── *features*(this case Todo, this package may import datasource.. Store lives here)
└── root directory (for building the packages, should be only devDependencies like babel, loaders, webpack, etc)
```

## Adding and Removing dependencies
Since we are using yarn workspace as the low level project linking and lerna for high level stuff like bootstrap and exec,
we need to use yarn's way of adding dependency to workspace

- for adding dependency to specific package (like ui package)
```bash
$ yarn workspace <workspace-name> [add|remove] <dependency-name> <dependency2-name> [--dev|--save]
$ yarn workspace @organizations/ui add react react-dom material-css --dev # go to this url (https://github.com/mobxjs/mobx/issues/1082#issuecomment-352409804) to read why use dev and peer Dependencies 
```
- for adding dev dependency to root directory
```bash
$ yarn add <dependency-name> <dependency2-name> --dev -W # -W indicates ignore workspace and just add the dep to this dir
$ yarn add webpack webpack-cli babel-loader --dev -W
```

## Other
  Never add normal dependency to shared packages unless you are sure that main-app won't import it as well! 
just add as `devDependency` and `peerDependency`, since the one who will import the package is the `main-app` 
or the app that use the package. We split the packages as so to make ease unit testing 
due to unit testing is specific to packages/features/component. 

  Also by doing this package-package thing, we can speed up the build phase for deployment later on, since jenkins or other 
CI can cache dependencies, and we only build the dependencies that have changes and bumped up version.


