/**
 * rakutenpay.factory
 */

// 暗号化方式
export enum authMethod {
    HMAC_SHA1 = 1,
    HMAC_MD5 = 2
}

// テストモードフラグ
export enum isTMode {
    // 本番モード
    ProductionMode,
    // テストモード
    TestMode
}

// 結果コード
export enum result {
    // OK
    Ok,
    // エラー
    Error
}

// APIステータスコード
export enum statusCode {
    // 正常
    Normal,
    // エラー
    Error
}

// 処理ステータス
export enum processStatus {
    // 処理中
    Processing,
    // 処理済
    Processed
}

// 結果フラグ
export enum resultFlg {
    // 成功
    Success,
    // 失敗
    Failure
}

// 決済ステータス
export enum paymentStatus {
    // 未決済（キャンセル済みの状態）
    Outstanding = 1,
    // 仮決済（与信済みの状態）
    ProvisionalSettlement = 2,
    // 決済済（売上確定済みの状態）
    Settled = 3
}

/**
 * 動的商品情報
 */
export interface IDynamicProduct {
    // 注文情報
    orderItemsInfo: IOrderItemsInfo;
}

// 注文情報
export interface IOrderItemsInfo {
    // サービスID
    serviceId: string;
    // 暗号化方式
    authMethod: authMethod;
    // テストモードフラグ
    isTMode?: isTMode;
    // 決済終了時戻りURL
    orderCompleteUrl?: string;
    // 決済失敗時戻りURL
    orderFailedUrl?: string;
    // カートID
    orderCartId: string;
    // 商品合計金額(税込)
    orderTotalFee: number;
    // 商品情報親属性
    itemsInfo: IItemsInfo;
}

export interface IItemsInfo {
    item: IItem[];
}

// 商品
export interface IItem {
    // 商品ID
    itemId: string;
    // 商品名
    itemName: string;
    // 個数
    itemNumbers: number;
    // 商品単価(税込)
    itemFee: number;
}
