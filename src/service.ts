import * as createDebug from 'debug';
import * as fs from 'fs';
import * as os from 'os';
import * as uuid from 'uuid';
import * as xml2js from 'xml2js';

const debug = createDebug('rakuten-pay:service');

/**
 * base service class
 * @export
 * @class Service
 */
export class Service {
    public xml: string;
    private savePath: string;

    // 楽天ペイのエンドポイントは固定
    private ENDPOINT: string = 'https://my.checkout.rakuten.co.jp/myc/cdodl';

    public async createUrl(uri: string) {
        return this.ENDPOINT + uri;
    }

    public async toXml(json: object) {
        const builder = new xml2js.Builder();
        this.xml = builder.buildObject(json);

        return this.xml;
    }

    public async clearXml() {
        this.xml = '';
    }

    public async saveXml(json?: object) {
        if (typeof json === undefined) {
            if (this.xml.length === 0) {
                return false;
            }
        } else {
            await this.toXml(<object>json);
        }

        const filePath = this.getSavePath();
        fs.writeFile(filePath, this.xml, (err) => {
            if (err.message !== undefined) {
                debug('error...', err.message);
                throw err;
            }
        });

        return true;
    }

    public async getCheckout() {
        const checout = '';
        if (this.xml.length > 0) {
            const filePath = this.getSavePath();

            return new Promise<string>((resolve, reject) => {
                fs.readFile(filePath, 'base64', (err, data) => {
                    if (err.message !== undefined) {
                        debug('read error...', err.message);
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
        }

        return checout;
    }

    private getSavePath () {
        if (this.savePath.length === 0) {
            const tmpdir = os.tmpdir();
            const filename = `${uuid.v4().split('-').join('')}.xml`;

            this.savePath = `${tmpdir}/${filename}`;
        }

        return this.savePath;
    }
}
