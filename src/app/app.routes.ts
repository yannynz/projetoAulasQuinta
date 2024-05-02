import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotasComponent } from './components/rotas/rotas.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nova-rota', component: RotasComponent },
    { path: 'cliente/:id', component: ClienteDetailComponent },
    {path: 'cliente', component:ClienteDetailComponent},
    { path: '**', component: HomeComponent },
];