module.exports = {
    rootDir: process.cwd(),
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    collectCoverageFrom: ['src/**/*.+(ts|tsx)'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    coverageReporters: ['json', 'html', 'cobertura'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
      ],
    testMatch: [
      '**/__tests__/**/*.+(ts|tsx|js)',
      '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/test/(fixtures|tmp|__data__)/',
    ],
    globals: {
        'ts-jest': {
            tsConfig: "tsconfig.test.json"
        }
    }
  }