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
    private authMethod: number = factory.authMethod.HMAC_SHA1;

    public async createUrl () {
        const uri = '/1.0/stepin';

        return super.createUrl(uri);
    }

    public async getAuthMethod () {
        return this.authMethod;
    }

    public async initialize (orderStep: OrderStepBase) {
        const orderInfo: factory.IDynamicProduct = orderStep.getDinamicProduct();

        await this.createUrl();
        await this.clearXml();
        await this.saveXml(orderInfo);
        await this.setCheckout();
    }
}
