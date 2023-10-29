# preact-hooks-jest-ts-esm-repro

## The Goal

I have been trying to set up a Jest test suite for a personal project which uses TypeScript, ESM module syntax, and Preact.

I would like to test custom Preact hooks using `@testing-library/preact-hooks`.

## The Issue

I've run into errors when attempting to run tests on Preact hooks.

I have set up a simple test suite that uses Preact's `useState` hook, which can be run via `npm test`.

When running this test suite, it fails with the following error:

> `TypeError: Cannot read properties of undefined (reading '__H')`
