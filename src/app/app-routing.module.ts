import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratingTypeOfDataAutomaticallyComponent } from './generating-type-of-data-automatically/generating-type-of-data-automatically.component';

const routes: Routes = [
  {
    path: 'data-type',
    loadChildren: () =>
      import(
        './generating-type-of-data-automatically/generating-type-automatically.module'
      ).then((m) => m.GeneratingTypeDataAutomaticallyModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
