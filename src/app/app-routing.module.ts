import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  {
    path: 'inicio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) 
  },
  { path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  { path: 'libros',
  loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
},
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', redirectTo: 'inicio' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
