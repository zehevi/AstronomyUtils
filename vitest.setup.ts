import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Cleans up the DOM after each test run
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
