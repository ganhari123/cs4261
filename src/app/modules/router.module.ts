import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from '../loginTemplate/loginTemp.component';
import { RegisterComponent } from '../registerTemplate/register.component';
import { HomeComponent} from '../homeTemplate/home.component';
import { ShoppingKart } from '../shoppingKartListTemplate/shoppingKart.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [
	{	
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'mycart',
        component: ShoppingKart
    },
    {
        path: '',
        redirectTo: '/register',
        pathMatch: 'full'
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [LoginComponent, RegisterComponent, HomeComponent, ShoppingKart];