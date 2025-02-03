# NoJira: No Meetings, No Standups, Just Problem Solving.

## Install
```bash
yarn install
```

## Development
```bash
yarn dev
```

## Build
```bash
yarn build
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
