import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataservicesModule } from '@teiid/beetle-lib';
import { ViewEditorComponent } from '@teiid/beetle-lib';
import { TestDataserviceComponent } from '@teiid/beetle-lib';

const routes: Routes = [
  {
    path: 'data/view',
    component: ViewEditorComponent,
  },
  {
    path: 'data/test-virtualization',
    component: TestDataserviceComponent,
  }
];

@NgModule({
  imports: [ DataservicesModule,
             RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
