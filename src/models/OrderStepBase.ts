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
    public itemInfo: factory.IItemsInfo;
    public items: factory.IItem[];

    public getDinamicProduct (): factory.IDynamicProduct {
        return {
            orderItemsInfo: this.getOrderItemsInfo()
        };
    }

    protected getOrderItemsInfo (): factory.IOrderItemsInfo {
        return {
            serviceId: this.serviceId,
            authMethod: this.authMethod,
            isTMode: this.isTmode,
            orderCompleteUrl: this.orderCompleteUrl,
            orderFailedUrl: this.orderFailedUrl,
            orderCartId: this.orderCartId,
            orderTotalFee: this.orderTotalFee,
            itemsInfo: this.getItemsInfo()
        };
    }

    protected getItemsInfo (): factory.IItemsInfo {
        return { item: this.items };
    }
}
