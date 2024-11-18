import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DarkModeService } from 'angular-dark-mode';
import { ProjectDetailsService } from 'src/service/project-details.service';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.css']
})

export class CreateNewProjectComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  projectNamepass: string;

  frameworkIndex: any = '';
  selectedData: any;
  selectedIndex: any;

  selectedBackend: any;

  projectNameForm : FormGroup
  matColor: any;
  stepperData: any = {
    dropdown: [
      { name: 'Angular' }, { name: 'React' }
    ],
    framework: [
      {
     Angular: [
           'Angular Material ', 'PrimeNg'
      ],
      React: [
           'React Mui', 'React Prime'
      ],
    },
  ],
    BackendModules: [
    {
      backendList : [
        { name: 'ExpressJS' },
        { name: 'NestJS' },
        { name: 'Spring Boot' },
        { name: 'Django' },
       ],
      databaseList : [
          { name: 'MySQL' },
          { name: 'PostgreSQL', },
          { name: 'MongoDB', },
          ]
      }
    ]
  };

  
  @Input() darkModecolor: any;
  constructor(private _formBuilder: FormBuilder,
               private router: Router,private _snackBar: MatSnackBar,
               private darkModeService: DarkModeService,
               private projectDetailsService: ProjectDetailsService 
               ) { }

  ngOnInit(): void {
    this.darkModeToken();
    this.validationCheck();
  }

  darkModeToken(){
    let darkModeToken =  JSON.parse(localStorage.getItem('dark-mode') || '{}')
    if(darkModeToken.darkMode === true){
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;'
      this.matColor = 'light';
    }else{
      this.darkModecolor = 'background-color: #1c1e28; color: #ffffff;'
      this.matColor = 'dark';
    }

  }

  styleObject(): Object {
    let darkModeToken =  JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === false){
        return { backgroundColor: '#1c1e28' , color: '#ffffff' }
    }
    return {}
}

  validationCheck(){
    this.projectNameForm = this._formBuilder.group({
      projectName: [null, [Validators.required, Validators.minLength(3)]],
      framework: ['', Validators.required],
      helper: ['', Validators.required],
      backend: ['', Validators.required],
      database: ['', Validators.required]
    })
  }


  get projectName() {
    return this.projectNameForm.get('projectName') as FormControl;
  }
  get framework() {
    return this.projectNameForm.get('framework') as FormControl;
  }
  get backend() {
    return this.projectNameForm.get('backend') as FormControl;
  }
  get helper() {
    return this.projectNameForm.get('helper') as FormControl;
  }
  get database() {
    return this.projectNameForm.get('database') as FormControl;
  }
  

  clearAll() {
    this.projectNameForm.reset({
          'projectName': '',
          'framework': '',
          'backend': '',
          'helper': '',
          'database': ''
        });
    }

  selectFramework(index: any) {
    this.frameworkIndex = index;
  }

  selectHelper(item: any, index: number) {
    this.selectedData = item;
    this.selectedIndex = index;
  }

  selectBackend(index: any) {
    this.selectedBackend = index;
  }

  selectBackendDataba(item: any, index: number) {
    this.selectedData = item;
    this.selectedIndex = index;
  }
  
  onNext(){

    let requent = {
      "projectName": this.projectName.value,
      "framework": this.framework.value,
      "helper": this.helper.value,
      "database": this.database.value,
    }

    this.projectDetailsService.createProject(requent).subscribe((res: any) => {
         console.log(res);
         localStorage.setItem('projectDetail',JSON.stringify(this.projectNameForm.value));
         setTimeout(() => {
          this.router.navigate(['./project-creations']);
        }, 2000);
           this.openSnackBar('Project is Created', 'Cancel'),
          {
            duration: 1000,
          };
      });
  }

    // Notification
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['custom-style'],
      });
    }

}
