import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./not-found.component";
import {TestComponent} from "./test/test.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {MusicComponent} from "./music/music.component";
import {AboutComponent} from "./about/about.component";
import {FormComponent} from "./form/form.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent  },
  { path: 'calc', component: CalculatorComponent  },
  { path: 'music', component: MusicComponent  },
  { path: 'about', component: AboutComponent  },
  { path: 'test', component: TestComponent  },
  { path: 'form', component: FormComponent  },
  { path: '**', component: PageNotFoundComponent }




];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
