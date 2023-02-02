import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { StressfreetipsComponent } from './pages/stressfreetips/stressfreetips.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Stressfreetips', component: StressfreetipsComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
