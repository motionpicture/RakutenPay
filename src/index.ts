/**
 * 楽天Payサービス
 * @module
 */

import * as factory from './factory';
import { OrderStepBase } from './models/OrderStepBase';
import { RakutenPayService } from './services/rakutenpay.service';

export import factory = factory;

export namespace service {
    /**
     * 楽天ペイサービス
     */

    export class RakutenPay extends RakutenPayService { }
}

export namespace model {
    /**
     * 注文ステップモデル
     */
    export class OrderStepBaseModel extends OrderStepBase {}
}
