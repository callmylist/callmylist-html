import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
    { path: 'app', loadChildren: '../app/app.module#AppModule' }
];
	
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class CallMyListRoutingModule { }
