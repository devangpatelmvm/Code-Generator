import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/service/interceptor.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { HtmlpipePipe } from '../pipes/htmlpipe.pipe';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ProjectDeleteDialogboxComponent } from './project-delete-dialogbox/project-delete-dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { SidebarModule } from 'primeng/sidebar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { DndIconsPipe } from '../pipes/dnd-icons.pipe';
import { AuthService } from 'src/service/auth.service';
import { ProgressBarModule } from 'angular-progress-bar';
import { ProjectCreationsComponent } from './project-creations/project-creations.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    HtmlpipePipe,
    ProjectDisplayComponent,
    NavBarComponent,
    ProjectDeleteDialogboxComponent,
    LoginComponent,
    RegisterComponent,
    ProjectDashboardComponent,
    CreateNewProjectComponent,
     ProjectCreationsComponent,
    DndIconsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatTreeModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    SidebarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    DragDropModule,
    MatChipsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSlideToggleModule,
    AngularSvgIconModule.forRoot(),
    NgxSpinnerModule,
    LayoutModule,
    CdkAccordionModule,
    MdbCheckboxModule,
    ProgressBarModule, 
    NgxEchartsModule.forRoot({
      echarts,
    }), 
    AvatarModule

  ],
  providers: [
    AuthService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
