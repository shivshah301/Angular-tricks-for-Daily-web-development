import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratingTypeOfDataAutomaticallyComponent } from './generating-type-of-data-automatically.component';

const routes: Routes = [
  {
    path: '',
   component: GeneratingTypeOfDataAutomaticallyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneratingTypeOfDataAutomaticallyRoutingModule {}
