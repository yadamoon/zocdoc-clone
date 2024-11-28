import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
    },
    // {
    //     path: 'admin',
    //     loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    // },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

