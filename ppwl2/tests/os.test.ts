import {describe, it, expect} from 'bun:test';
import * as os from "node:os";

describe('Node JS API', () => {
    it('should support os', async () => {
        const arch = os.arch();
        expect(arch).toBe("x64");

        const type = os.type();
        expect(type).toBe("Linux");
    })
})