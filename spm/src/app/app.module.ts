import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
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

//Services
import { AuthentificationService } from './_services/authentification.service';
import { NotificationService } from './_services/notification.service';
import { MenuTeacherComponent } from './menu-teacher/menu-teacher.component';
import { HeaderTeacherComponent } from './header-teacher/header-teacher.component';
import { TeacherMessagerieComponent } from './teacher-messagerie/teacher-messagerie.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TeacherClasseComponent } from './teacher-classe/teacher-classe.component';
import { TeacherClasseCreationComponent } from './teacher-classe-creation/teacher-classe-creation.component';
import { TeacherAnnuaireComponent } from './teacher-annuaire/teacher-annuaire.component';
import { StudentsComponent } from './students/students.component';


//Services

import { ApiService } from './_services/api.service';
import { MailReadComponent } from './mail-read/mail-read.component';


library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    ProfileStudentComponent,
    ProfileTeacherComponent,
    LoginComponent,
    RegisterComponent,
    DirectoryComponent,
    TeacherAreaComponent,
    StudentAreaComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MailServiceComponent,
    CooperativeComponent,
    CalendarComponent,
    TextbookComponent,
    AbilitiesComponent,
    MenuTeacherComponent,
    HeaderTeacherComponent,
    TeacherMessagerieComponent,
    InscriptionComponent,
    TeacherClasseComponent,
    TeacherClasseCreationComponent,
    TeacherAnnuaireComponent,
    StudentsComponent,
    MailReadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FontAwesomeModule
  ],
  providers: [
    AuthentificationService,
    NotificationService,
    ApiService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
