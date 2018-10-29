import * as factory from '../factories/rakutenpay.factory';
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
}
