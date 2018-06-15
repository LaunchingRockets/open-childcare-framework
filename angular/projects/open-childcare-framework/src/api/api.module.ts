import * as api from './api/apis';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AdminApi', api.AdminApi)
.service('AuthenticationApi', api.AuthenticationApi)
.service('ClassroomApi', api.ClassroomApi)
.service('CrecheApi', api.CrecheApi)
.service('FinanceApi', api.FinanceApi)
.service('SalesApi', api.SalesApi)
.service('UserApi', api.UserApi)

export default apiModule;
