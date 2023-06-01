export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/**/*.{spec,test,e2e}.{js,jsx,ts,tsx}'],
  moduleNameMapper: {
    '^@type/(.*)$': '<rootDir>/src/@types/$1',
    '^@apis/(.*)$': '<rootDir>/src/apis/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@assets/(.*)$': '<rootDir>/public/assets/$1',
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};
