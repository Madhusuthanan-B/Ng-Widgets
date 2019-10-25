import { NgModule } from '@angular/core';
import { CdkComponent } from './cdk.component';
import { RadialProgressModule } from './radial-progress/radial-progress.module';

@NgModule({
  declarations: [CdkComponent],
  imports: [
    RadialProgressModule
  ],
  exports: [CdkComponent, RadialProgressModule]
})
export class CdkModule { }
