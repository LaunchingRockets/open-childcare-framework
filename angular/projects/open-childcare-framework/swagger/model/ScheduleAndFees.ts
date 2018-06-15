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

    export interface ScheduleAndFees {
      id?: number;

      name?: string;

      ageGroup?: string;

      time?: string;

      code?: string;

      monthlyFee?: number;

      hourlyRate?: number;

      weeklyFee?: number;

      otherFee?: number;

      otherFrequency?: string;

      startTime?: string;

      endTime?: string;

      days?: number;

    }
