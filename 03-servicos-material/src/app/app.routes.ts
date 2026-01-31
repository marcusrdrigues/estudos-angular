import { Routes } from '@angular/router';
import { Login } from './components/usuarios/login/login';
import { Dashboard } from './components/servicos/dashboard/dashboard';
import { Cadastro } from './components/servicos/cadastro/cadastro';
import { Consulta } from './components/servicos/consulta/consulta';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path : 'usuarios/login',
        component: Login
    },
    {
        path : 'servicos/dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },
    {
        path : 'servicos/cadastro',
        component: Cadastro,
        canActivate: [authGuard]
    },
    {
        path : 'servicos/consulta',
        component: Consulta,
        canActivate: [authGuard]
    },
    {
        path : '', pathMatch : 'full',
        redirectTo : '/usuarios/login'
    }
];
