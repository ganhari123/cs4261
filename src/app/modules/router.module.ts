import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../loginTemplate/loginTemp.component';
import { RegisterComponent } from '../registerTemplate/register.component';

const routes: Routes = [
	{	
        path: 'api/login',
        component: LoginComponent
    },
    {
        path: 'api/register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/api/register',
        pathMatch: 'full'
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [LoginComponent, RegisterComponent];