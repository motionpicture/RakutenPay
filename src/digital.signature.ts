import * as crypto from 'crypto';

/**
 * DigitalSignatue
 * @exports DigitalSignatue
 */
export class DigitalSignatue {
    public key: any;
    public hashfunction: string;

    constructor(key: string, hashfunction?: string) {
        this.setKey(key);
        this.setHashfunction(hashfunction);
    }

    public createtHmac(data: string) {
        const hmac = crypto.createHmac(this.hashfunction, this.key);
        hmac.update(data);

        return hmac.digest('hex');
    }

    private setKey(key: string) {
        this.key = key;
    }

    private setHashfunction(hashfunction?: string) {
        this.hashfunction = (hashfunction === undefined) ? 'sha1' : hashfunction;
    }
}
