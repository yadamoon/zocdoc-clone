// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
    },

    {
        path: 'patient', // After login
        loadChildren: () =>
            import('./patient/patient.module').then((m) => m.PatientModule),
    },
    {
        path: 'auth', // Authentication module (login, register, etc.)
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'admin', // Admin module
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: '**', // Wildcard route for 404
        redirectTo: '',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

