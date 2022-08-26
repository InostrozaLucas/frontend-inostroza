import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './componentes/education/education.component';
import { RrSsComponent } from './componentes/rr-ss/rr-ss.component';
import { LogoApComponent } from './componentes/logo-ap/logo-ap.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ImagenfondoComponent } from './componentes/imagenfondo/imagenfondo.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioHomeComponent } from './componentes/porfolio-home/porfolio-home.component';
import { RrSsHomeComponent } from './componentes/rr-ss-home/rr-ss-home.component';
import { LogoApHomeComponent } from './componentes/logo-ap-home/logo-ap-home.component';
import { HeaderHomeComponent } from './componentes/header-home/header-home.component';
import { ImagenfondoHomeComponent } from './componentes/imagenfondo-home/imagenfondo-home.component';
import { AcercadeHomeComponent } from './componentes/acercade-home/acercade-home.component';
import { ExperienciaHomeComponent } from './componentes/experiencia-home/experiencia-home.component';
import { EducationHomeComponent } from './componentes/education-home/education-home.component';
import { HabilidadesHomeComponent } from './componentes/habilidades-home/habilidades-home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './componentes/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    RrSsComponent,
    LogoApComponent,
    AcercadeComponent,
    ImagenfondoComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    PorfolioComponent,
    IniciarSesionComponent,
    PorfolioHomeComponent,
    RrSsHomeComponent,
    LogoApHomeComponent,
    HeaderHomeComponent,
    ImagenfondoHomeComponent,
    AcercadeHomeComponent,
    EducationHomeComponent,
    ExperienciaHomeComponent,
    HabilidadesHomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
