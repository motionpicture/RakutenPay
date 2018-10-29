/**
 * DigitalSignatue test
 * @ignore
 */

import { } from 'mocha';
import * as assert from 'power-assert';
import * as sinon from 'sinon';
import * as crypto from 'crypto';

import { DigitalSignatue } from './digital.signature';

const KEY = '12345678901234567890';
const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<foods>
    <food>
        <name>バナナ</name>
        <color>黄色</color>
    </food>
    <food>
        <name>リンゴ</name>
        <color>赤</color>
    </food>
</foods>`;

describe('fatch()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('createSignature', async () => {
        const signature = new DigitalSignatue(KEY);

        let expected = '495c6a3c58222bfa5805aaf34ad1bf35e04271ab';
        let sig = signature.createtHmac(xml);

        assert.equal(sig, expected);
    });
});