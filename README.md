# eslint-config-bryanberger

This package provides my personal .eslintrc as an extensible shared config.

## Usage

I export five ESLint configurations for your usage.

### eslint-config-bryanberger

My default export contains most of my ESLint rules, including ECMAScript 6+, TypeScript and React. It requires `eslint`, `eslint-plugin-import`, `@stylistic/eslint-plugin`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-import-resolver-typescript`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.

#### Install the correct versions of each package

```sh
npx install-peerdeps --dev eslint-config-bryanberger
```

or

```sh
npm i -D eslint eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @stylistic/eslint-plugin
```

or with pnpm:

```sh
pnpm add -D eslint eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @stylistic/eslint-plugin
```

#### Extends config

Add `"extends": "bryanberger"` to your `.eslintrc` to extend the entire configuration.

If you only want to extend one of my configurations, your can only add `"extends": "bryanberger/$CONFIG_NAME"` to your `.estlinrc`. Here is the configurations list:

*   `bryanberger/javascript`
*   `bryanberger/typescript`
*   `bryanberger/imports`
*   `bryanberger/react`

You can extend multiple selected configs with the following syntax:

```json
{
	"extends": [
		"bryanberger/javascript",
		"bryanberger/react"
	]
}
```
