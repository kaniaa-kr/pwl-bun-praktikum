import {describe, it, expect} from 'bun:test';
import {sayHello} from './hello.ts';

describe('Bun Test Runner', () => {
  it('should say hello', async () => {
    const response = sayHello('world');
    expect(response).toBe('Hello, world!');
  })
});
