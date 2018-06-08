/**
 * Creche YAML
 * This is Vivos Creche API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: smulhall79@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Person } from './person';


export interface Child {
    id?: number;
    name?: string;
    gender?: string;
    birthday?: string;
    info?: any;
    group?: string;
    collectFromSchool?: boolean;
    dropToSchool?: boolean;
}
