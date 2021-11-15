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
/**
 * 
 * @export
 * @interface ISafeStockLocation
 */
export interface ISafeStockLocation {
    /**
     * 
     * @type {string}
     * @memberof ISafeStockLocation
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof ISafeStockLocation
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof ISafeStockLocation
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ISafeStockLocation
     */
    updatedAt?: Date;
}

export function ISafeStockLocationFromJSON(json: any): ISafeStockLocation {
    return ISafeStockLocationFromJSONTyped(json, false);
}

export function ISafeStockLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ISafeStockLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
    };
}

export function ISafeStockLocationToJSON(value?: ISafeStockLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'id': value.id,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


