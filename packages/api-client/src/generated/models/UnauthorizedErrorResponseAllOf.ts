/* tslint:disable */
/* eslint-disable */
/**
 * api-client
 * 汎用的な API 定義
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UnauthorizedErrorResponseAllOfPayload } from './UnauthorizedErrorResponseAllOfPayload';
import {
    UnauthorizedErrorResponseAllOfPayloadFromJSON,
    UnauthorizedErrorResponseAllOfPayloadFromJSONTyped,
    UnauthorizedErrorResponseAllOfPayloadToJSON,
} from './UnauthorizedErrorResponseAllOfPayload';

/**
 * 
 * @export
 * @interface UnauthorizedErrorResponseAllOf
 */
export interface UnauthorizedErrorResponseAllOf {
    /**
     * 
     * @type {UnauthorizedErrorResponseAllOfPayload}
     * @memberof UnauthorizedErrorResponseAllOf
     */
    payload: UnauthorizedErrorResponseAllOfPayload;
}

/**
 * Check if a given object implements the UnauthorizedErrorResponseAllOf interface.
 */
export function instanceOfUnauthorizedErrorResponseAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function UnauthorizedErrorResponseAllOfFromJSON(json: any): UnauthorizedErrorResponseAllOf {
    return UnauthorizedErrorResponseAllOfFromJSONTyped(json, false);
}

export function UnauthorizedErrorResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnauthorizedErrorResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payload': UnauthorizedErrorResponseAllOfPayloadFromJSON(json['payload']),
    };
}

export function UnauthorizedErrorResponseAllOfToJSON(value?: UnauthorizedErrorResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payload': UnauthorizedErrorResponseAllOfPayloadToJSON(value.payload),
    };
}

