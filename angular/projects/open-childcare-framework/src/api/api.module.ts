import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AdminService } from './api/admin.service';
import { AuthenticationService } from './api/authentication.service';
import { ClassroomService } from './api/classroom.service';
import { CrecheService } from './api/creche.service';
import { FinanceService } from './api/finance.service';
import { SalesService } from './api/sales.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AdminService,
    AuthenticationService,
    ClassroomService,
    CrecheService,
    FinanceService,
    SalesService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
