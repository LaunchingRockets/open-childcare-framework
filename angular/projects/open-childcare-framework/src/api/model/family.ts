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
import { Child } from './child';
import { FamilyFees } from './familyFees';
import { Guardian } from './guardian';


export interface Family {
    fees?: FamilyFees;
    children?: Array<Child>;
    guardians?: Array<Guardian>;
}
