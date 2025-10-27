import { Routes } from '@angular/router';

import { HomeComponent } from './componentes/home-component/home-component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent

    },
    {
        path: 'clientes',
        loadComponent: () =>
            import('./componentes/clientes-component/clientes-component')
                .then(c => c.ClientesComponent),
    },
    

];
