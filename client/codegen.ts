import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: './src/**/*.graphql',
    generates: {
        './src/graphql-generated/types.ts': { plugins: ['typescript'] },
        './src/graphql-generated/': {
            preset: 'near-operation-file',
            presetConfig: {
                baseTypesPath: 'types.ts',
            },
            plugins: ['typescript-operations', 'typescript-react-apollo'],
        },
    },
}
export default config