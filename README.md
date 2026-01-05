## Installation

- Important! Make sure the installed Node version is >= 20.18 and of npm <= 10.8.2

## Quick start

- Clone the repo: `git clone https://github.com/hectorRperez/onefit-website`
- Make sure your Node.js and npm versions are up to date
- Install dependencies: `npm install` or `yarn`
- Create .env file and modify its values: `cp .env.example .env`
- Start the server: `npm run dev` or `yarn dev`
- Open browser: `http://localhost:3000`

## Git branch conventions names

Name flow example

1. For news features

```bash
 $ feature/login-form
```

2. bug fix

```bash
 $ bugfix/fix-login-error
```

3. To fix critical bugs in production

```bash
 $ hotfix/security-patch
```

4. To preparer a new version of the application

```bash
 $ release/v2.0.1
```

5. For maintenance, minor updates, or changes that do not directly affect working code, such as updating dependencies, configurations, or changes to documentation files

```bash
 $ chore/update-dependencies
```

6. test o tests

- Used to experiment or create tests (unit, integration) in the code

```bash
 $ test/improve-unit-tests
```

7. refactor/

- Suitable when working on improving the structure of the code without changing its functionality. Ideal for cases where you want to optimize, clean or reorganize the code

```bash
 $ refactor/optimize-auth-module
```

8. config/

- Useful when making changes to project configuration, such as CI/CD configurations or changes to environment configurations files

```bash
 $ config/ci-setup
```

9. perf/

- Used for perfomance optimizations. Any tweaks that improve system speed or efficiency can be handled here

```bash
 $ perf/cache-optimization
```

10. docs/

- For documentation-related changes. This may include adjustments to project documentation, README files, or any type of technical guide

```bash
 $ docs/update-api-reference
```

11. ci/

- For continuous integration (CI) configuration changes and pipeline automation

```bash
 $ ci/github-actions-pipeline
```


## Steps to follow when creating a new issue

1. Crear la rama según las reglas establecidas
2. Crea una nueva vista en la carpeta src/app o agregar los nuevo en la vista existente
3. Crear un nuevo componente o ajustarlo de ser necesario en la carpeta src/components
4. Agregar al archivo .env.example las variables nuevas que se agreguen
5. Antes de realizar el commit ejecutar el prettier:

```bash
npm run lint
npm run format
npm run format:check
```
