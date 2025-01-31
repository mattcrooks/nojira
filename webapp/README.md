# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


## GraphQL Code Generation

To generate the TypeScript types and Hooks for accessing data in the DGraph database, follow these steps:

1. **Create a GraphQL File**: Create a file with the extension ```.graphql``` containing your queries and/or mutations. This file should be placed alongside the component that will use the query or mutation.

2. **Store the GraphQL File with Your Component**: The pattern to follow is to store the ```.graphql``` file in the same directory as your component. This helps in keeping the related files organized and easy to manage.

3. **Generate TypeScript Types and Hooks**: The code generation tool will read the ```.graphql``` files and generate TypeScript types and React hooks for the queries and mutations defined in those files. The generated type files will be stored in the ```types/*.generated.ts``` file.

4. **Generate the Code**: You need to run the codegen command to generate the code. `pnpm run codegen`

### Example

Consider a component named ```UserAvatar```:

```
/components/UserAvatar
    UserAvatar.tsx
    userAvatar.graphql
```

The ```userAvatar.graphql``` file will contain your query:

```graphql
query GetUserAvatarQuery {
    queryUser {
        name
        github
    }
}
```

After running the code generation tool, the generated file will be:

```
/components/UserAvatar/types
    userAvatar.generated.ts
```

This generated file will include TypeScript types and React hooks for the ```GetUserAvatarQuery``` query, allowing you to use the query in your ```UserAvatar.tsx``` component with type safety and ease.
