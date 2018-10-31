import * as factory from '../factories/rakutenpay.factory';
import { BaseIn } from './BaseIn';

/**
 * OrderStepBase
 */
export class OrderStepBase extends BaseIn {
    public orderCompleteUrl: string;
    public orderFailedUrl: string;
    public orderCartId: string;
    public orderTotalFee: number;
    public items: factory.IItem[];

    public getDinamicProduct (): factory.IDynamicProduct {
        return {
            orderItemInfo: this.getOrderItemInfo()
        };
    }

    protected getOrderItemInfo (): factory.IOrderItemInfo {
        return {
            serviceId: this.serviceId,
            authMethod: this.authMethod,
            isTMode: this.isTmode,
            orderCompleteUrl: this.orderCompleteUrl,
            orderFailedUrl: this.orderFailedUrl,
            orderCartId: this.orderCartId,
            orderTotalFee: this.orderTotalFee,
            itemsInfo: this.getItems()
        };
    }

    protected getItems () {
        return this.items;
    }
}
