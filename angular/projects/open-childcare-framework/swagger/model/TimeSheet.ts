/* tslint:disable */
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

    import * as models from './models';
    import GenderEnum = TimeSheet.GenderEnum;

    export interface TimeSheet {
      id?: number;

      name?: string;

      date?: string;

      startTime?: string;

      endTime?: string;

      calcs?: models.TimeCalcs;

      group?: string;

      location?: number;

      gender?: TimeSheet.GenderEnum;

      attendance?: Array<models.TimeSheetEntry>;

    }
      export namespace TimeSheet {
          export enum GenderEnum {
              MALE = <any> 'MALE',
              FEMALE = <any> 'FEMALE'
            }
        }
