# NestJS Starter

## Commands

```
# For start dev
yarn dev

# For build prod
yarn prod

# For format
yarn format

# For lint
yarn lint
```

## Configs

### [please-use-yarn](https://www.freecodecamp.org/news/how-to-force-use-yarn-or-yarn/)

- add `.yarnrc` in the root folder
  ```
  engine-strict = true
  ```
- modify `package.json`
  ```
  "engines": {
    "yarn": "please-use-yarn",
    "yarn": ">= 1.22.4"
  },
  ```

### [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)

- install: `git flow init`

### [Commitizen](https://github.com/commitizen/cz-cli)

- install: `yarn install --dev commitizen`
- making your repo commitizen-friendly `commitizen init cz-conventional-changelog --save-dev --save-exact`
- add the `config.commitizen` key to the root of your package.json as shown here:
  ```
  "config": {
      "commitizen": {
        "path": "cz-conventional-changelog"
      }
  }
  ```
  and yarn command to package.json scripts
  ```
  "commit": "npx git-cz",
  ```

### [Commitlint](https://github.com/conventional-changelog/commitlint)

- install: `yarn add --dev @commitlint/config-conventional @commitlint/cli`,
- add the `commitlint.config.js` in the root folder with:
  ```
  module.exports = {
    extends: ['@commitlint/config-conventional']
  };
  ```

### [Changelog](https://www.yarnjs.com/package/conventional-changelog-cli)

- install: `yarn add --dev conventional-changelog-cli`
- init changelog: `conventional-changelog -p angular -i CHANGELOG.md -s -r 0`,
- add yarn command
  ```
  "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
  ```

### [Pretty-Quick](https://www.yarnjs.com/package/pretty-quick)

- install: `yarn add --dev pretty-quick`

### [Husky](https://github.com/typicode/husky)

- install: `yarn add --dev husky`
- setup hooks in package.json:

  ```
  {
      "husky": {
          "hooks": {
              "pre-commit": "pretty-quick --staged && yarn lint",
              "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
              "pre-push": "yarn build"
          }
      },
  }
  ```

- Environment
  Add this in `.gitignore`
  ```
  # env
  /src/environments/environment.ts
  /src/environments/environment.prod.ts
  ```
  And use `environment.example.ts`, `environment.prod.example.ts` to push git

## Structure

    .
    ├── dist/                                               # Build Folder
    ├── documentation/                                      # Compodoc Documentation Folder
    ├── logs/                                               # Logs: error/combined
    ├── media/                                              # Media Folder
    ├── src/                                                # Source
    │   ├── app/                                            # Application
    │   │   ├── featureName/                                # Feature, etc: Core, Shared, Media, Auth
    │   │   │   ├── configs/                                # Feature configs
    │   │   │   │   └── app-fileName.config.ts
    │   │   │   ├── controller/                             # Feature controllers
    │   │   │   │   └── app-fileName.controller.ts
    │   │   │   ├── database/                               # Feature database
    │   │   │   │   └── app-fileName.enity.ts
    │   │   │   ├── decorators/                             # Feature decorators
    │   │   │   │   └── app-fileName.decoratore.ts
    │   │   │   │── dtos/                                   # Feature dtos
    │   │   │   │   └── app-fileName.dto.ts
    │   │   │   │── endpoints/                              # Feature endpoints
    │   │   │   │   └── app-fileName.endpoint.ts
    │   │   │   │── guards/                                 # Feature guards
    │   │   │   │   └── app-fileName.guard.ts
    │   │   │   │── services/                               # Feature services
    │   │   │   │   └── app-fileName.service.ts
    │   │   │   │── strategies/                             # Feature auth-strategies
    │   │   │   │   └── app-fileName.strategy.ts
    │   │   │   │── swagger/                                # Feature swagger
    │   │   │   │   └── app-fileName.swagger.ts
    │   │   │   │── interceptors/                           # Feature interceptors
    │   │   │   │   └── app-fileName.interceptor.ts
    │   │   │   │── routes/                                 # Feature routes
    │   │   │   │   └── app-fileName.router.ts
    │   │   │   └── app-featureName.module.ts
    │   │   ├── bootstrap/                                  # Bootstrap
    │   │   │   │── plugins/                                # NodeJs plugins
    │   │   │   └── index.ts                                # Main File
    │   │   └── app.module.ts
    │   ├── assets/
    │   └── environemnts/
    │       ├── environment.example.env         # to push
    │       ├── environment.env                 # .gitignore
    │       ├── environment.prod.example.env    # to push
    │       └── environment.prod.env            # .gitignore
    └── ...

## Libraries

- ### UI frameworks

  - [nest-router](https://www.yarnjs.com/package/nest-router) `yarn add nest-router`
