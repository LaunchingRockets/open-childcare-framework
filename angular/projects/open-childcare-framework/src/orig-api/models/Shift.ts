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

    export interface Shift {
      id?: number;

      staffId?: number;

      locationId?: number;

      groupId?: number;

      commonlyUsed?: boolean;

      startTime?: string;

      break1Start?: string;

      break1Finish?: string;

      break1Duration?: string;

      break1Paid?: boolean;

      lunchStart?: string;

      lunchFinish?: string;

      lunch?: string;

      lunchPaid?: boolean;

      break2Start?: string;

      break2Finish?: string;

      break2Duration?: string;

      break2Paid?: boolean;

      finishTime?: string;

      comments?: string;

      date?: string;

      updatedTime?: string;

      checked?: boolean;

      initials?: string;

    }
