/* tslint:disable */
/* eslint-disable */
/**
 * only-bu-BE
 * BE
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    STOCKTXNACTION,
    STOCKTXNACTIONFromJSON,
    STOCKTXNACTIONFromJSONTyped,
    STOCKTXNACTIONToJSON,
    UpdateStocksArr,
    UpdateStocksArrFromJSON,
    UpdateStocksArrFromJSONTyped,
    UpdateStocksArrToJSON,
} from './';

/**
 * 
 * @export
 * @interface StockTxnDTO
 */
export interface StockTxnDTO {
    /**
     * 
     * @type {STOCKTXNACTION}
     * @memberof StockTxnDTO
     */
    action: STOCKTXNACTION;
    /**
     * 
     * @type {Array<UpdateStocksArr>}
     * @memberof StockTxnDTO
     */
    updateStocks: Array<UpdateStocksArr>;
}

export function StockTxnDTOFromJSON(json: any): StockTxnDTO {
    return StockTxnDTOFromJSONTyped(json, false);
}

export function StockTxnDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): StockTxnDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': STOCKTXNACTIONFromJSON(json['action']),
        'updateStocks': ((json['updateStocks'] as Array<any>).map(UpdateStocksArrFromJSON)),
    };
}

export function StockTxnDTOToJSON(value?: StockTxnDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': STOCKTXNACTIONToJSON(value.action),
        'updateStocks': ((value.updateStocks as Array<any>).map(UpdateStocksArrToJSON)),
    };
}


