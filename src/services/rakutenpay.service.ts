import { DigitalSignatue } from '../digital.signature';
import * as factory from '../factories/rakutenpay.factory';
import { OrderStepBase } from '../models/OrderStepBase';
import { Service } from '../service';

/**
 * 楽天ペイサービス
 * RP1002動的商品情報送信機能
 * @class
 * @extends {Service}
 */

export class RakutenPayService extends Service {
    public signature: string;

    private authMethod: number = factory.authMethod.HMAC_SHA1;

    public async createUrl () {
        const uri = '/1.0/stepin';

        return super.createUrl(uri);
    }

    public async getAuthMethod () {
        return this.authMethod;
    }

    public async initialize (key: string, orderStep: OrderStepBase) {
        const orderInfo: factory.IDynamicProduct = orderStep.getDinamicProduct();

        await this.createUrl();
        await this.clearXml();
        await this.toXml(orderInfo);
        await this.setCheckout();
        await this.createSignature(key);
    }

    public async createSignature (key: string) {
        const digitalSignatue = new DigitalSignatue(key);

        if (this.xml.length > 0) {
            this.signature = digitalSignatue.createtHmac(this.xml);
        }
    }
}
