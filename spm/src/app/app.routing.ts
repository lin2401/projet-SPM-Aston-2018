import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileStudentComponent } from './profile-student/profile-student.component';
import { ProfileTeacherComponent } from './profile-teacher/profile-teacher.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DirectoryComponent } from './directory/directory.component';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { StudentAreaComponent } from './student-area/student-area.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MailServiceComponent } from './mail-service/mail-service.component';
import { CooperativeComponent } from './cooperative/cooperative.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TextbookComponent } from './textbook/textbook.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { TeacherMessagerieComponent } from './teacher-messagerie/teacher-messagerie.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TeacherClasseComponent } from './teacher-classe/teacher-classe.component';
import { TeacherClasseCreationComponent } from './teacher-classe-creation/teacher-classe-creation.component';
import { TeacherAnnuaireComponent } from './teacher-annuaire/teacher-annuaire.component';
import { MailReadComponent } from './mail-read/mail-read.component';
import { StudentsComponent } from './students/students.component';

//Services
import { AuthentificationService } from './_services/authentification.service';
import { NotificationService } from './_services/notification.service';
import { ApiService } from './_services/api.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'mail-read', component: MailReadComponent, data: {title: 'ecrire un mail'} },
  { path: 'teacher-annuaire', component: TeacherAnnuaireComponent, data: {title: 'Annuaire de la classe'} },
  { path: 'teacher-classe-creation', component: TeacherClasseCreationComponent, data: {title: 'création de votre classe'} },
  { path: 'teacher-classe', component: TeacherClasseComponent, data: {title: 'Votre classe'} },
  { path: 'inscription', component: InscriptionComponent, data: {title: 'Inscription'} },
  { path: 'teacher-messagerie', component: TeacherMessagerieComponent, data: {title: 'Messagerie'} },
  { path: 'login', component: LoginComponent, data: {title: 'Connexion'} },
  { path: 'register', component: RegisterComponent, data: {title: 'Inscription'} },
  { path: 'teacher-area', component: TeacherAreaComponent, data: {title: 'Espace professeurs'} },
  { path: 'students', component: StudentsComponent, data: {title: 'Elèves'} },
  { path: 'student-area', component: StudentAreaComponent, data: {title: 'Espace élèves'} },
  { path: 'directory', component: DirectoryComponent, data: {title: 'Annuaire'} },
  { path: 'profile-teacher', component: ProfileTeacherComponent, data: {title: 'Profil'} },
  { path: 'profile-student', component: ProfileStudentComponent, data: {title: 'Profil'} },
  { path: 'mail-service', component: MailServiceComponent, data: {title: 'Messagerie'} },
  { path: 'cooperative', component: CooperativeComponent, data: {title: 'Coopérative'} },
  { path: 'calendar', component: CalendarComponent, data: {title: 'Calendrier'} },
  { path: 'textbook', component: TextbookComponent, data: {title: 'Cahier de texte'} },
  { path: 'abilities', component: AbilitiesComponent, data: {title: 'Validation des compétences'}

},


  { path: 'abilities', component: AbilitiesComponent, data: {title: 'Validation des compétences'} },



  // Si l'URL n'appartient pas à la liste de routes définies, rediriger vers la home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
