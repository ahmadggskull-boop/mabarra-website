import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VisionComponent } from './pages/vision/vision.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { BrochureComponent } from './pages/brochure/brochure.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'brochure', component: BrochureComponent },
  // The 'structure' path has been removed
  { path: '**', redirectTo: '' } // Fallback for any other path
];