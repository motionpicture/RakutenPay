import { Base64 } from 'js-base64';
import * as xml2js from 'xml2js';

/**
 * base service class
 * @export
 * @class Service
 */
export class Service {
    public xml: string = '';
    public checkout: string = '';
    public url: string = '';

    // 楽天ペイのエンドポイントは固定
    private ENDPOINT: string = 'https://my.checkout.rakuten.co.jp/myc/cdodl';

    public async createUrl(uri: string) {
        this.url = this.ENDPOINT + uri;

        return this.url;
    }

    public async toXml(json: object) {
        const builder = new xml2js.Builder();
        this.xml = builder.buildObject(json);

        return this.xml;
    }

    public async clearXml() {
        this.xml = '';
    }

    public async setCheckout() {
        if (this.xml.length > 0) {
            this.checkout = Base64.encode(this.xml);
        }

        return this.checkout;
    }
}
