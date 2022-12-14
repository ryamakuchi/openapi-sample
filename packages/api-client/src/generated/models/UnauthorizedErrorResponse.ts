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
 * エラーレスポンスを拡張した401用のエラーレスポンス
 * @export
 * @interface UnauthorizedErrorResponse
 */
export interface UnauthorizedErrorResponse {
    /**
     * エラーの識別子（RFC7807準拠）
     * @type {string}
     * @memberof UnauthorizedErrorResponse
     */
    type: string;
    /**
     * 人間が読める形式のエラーの概要（RFC7807準拠）
     * @type {string}
     * @memberof UnauthorizedErrorResponse
     */
    title?: string;
    /**
     * 人間が読める形式のエラーの詳細（RFC7807準拠）
     * @type {string}
     * @memberof UnauthorizedErrorResponse
     */
    detail?: string;
    /**
     * オリジナルAPIサーバが返したHTTPステータスコード（RFC7807準拠）
     * @type {number}
     * @memberof UnauthorizedErrorResponse
     */
    status?: number;
    /**
     * 
     * @type {UnauthorizedErrorResponseAllOfPayload}
     * @memberof UnauthorizedErrorResponse
     */
    payload: UnauthorizedErrorResponseAllOfPayload;
}

/**
 * Check if a given object implements the UnauthorizedErrorResponse interface.
 */
export function instanceOfUnauthorizedErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function UnauthorizedErrorResponseFromJSON(json: any): UnauthorizedErrorResponse {
    return UnauthorizedErrorResponseFromJSONTyped(json, false);
}

export function UnauthorizedErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnauthorizedErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'detail': !exists(json, 'detail') ? undefined : json['detail'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'payload': UnauthorizedErrorResponseAllOfPayloadFromJSON(json['payload']),
    };
}

export function UnauthorizedErrorResponseToJSON(value?: UnauthorizedErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'title': value.title,
        'detail': value.detail,
        'status': value.status,
        'payload': UnauthorizedErrorResponseAllOfPayloadToJSON(value.payload),
    };
}

