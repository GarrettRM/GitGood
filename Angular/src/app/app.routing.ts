import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './main/main.component';
import { AboutComponent } from './about.component';
import { LoginComponent} from './login/login.component';
const appRoutes: Routes = [
    {path: '', component: MainComponent},
    { path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent},
    // otherwise redirect to home
];

export const routing = RouterModule.forRoot(appRoutes);
