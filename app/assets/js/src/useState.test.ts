import {
	describe,
	expect,
	test,
} from '@jest/globals';

import { renderHook } from '@testing-library/preact-hooks';

import { useState } from 'preact/hooks';

describe('useState', () => {
	test('returns the correct initial value', () => {
		const { result } = renderHook(() => useState(true));

		expect(result.current?.[0]).toBe(true);
	});
});
