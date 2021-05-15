module.exports = {
    verbose:true,
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
        "types/schema": "<rootDir>/types/schema",
        "comments.json": "<rootDir>/__mocks__/comments.json",
        "repo.json": "<rootDir>/__mocks__/repo.json"
    }
}