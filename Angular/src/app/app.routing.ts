import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
