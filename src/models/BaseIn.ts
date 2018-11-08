import * as factory from '../factories/rakutenpay.factory';
/**
 * BaseIn
 */
export abstract class BaseIn {
    public serviceId: string;
    public isTmode: factory.isTMode;
    public authMethod: factory.authMethod;

    constructor (authMethod: factory.authMethod) {
        this.setServiceId();
        this.setIsTmode();
        this.authMethod = authMethod;
    }

    protected setServiceId () {
        if (typeof process.env.RAKUTEN_PAY_SERVICE_ID === undefined) {
            this.serviceId = '';
        } else {
            this.serviceId = <string>process.env.RAKUTEN_PAY_SERVICE_ID;
        }
    }

    protected setIsTmode () {
        this.isTmode =  factory.isTMode.ProductionMode;

        if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
            this.isTmode =  factory.isTMode.TestMode;
        }
    }
}
