import { CdkDragDrop, copyArrayItem, moveItemInArray,} from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { NestedTreeControl } from '@angular/cdk/tree';
import { of as observableOf } from 'rxjs';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS,} from '@angular/material/tooltip';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DarkModeService } from 'angular-dark-mode';
import { BehaviorSubject } from 'rxjs';
import { Tree, projectDetails } from 'src/models/tree';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { ProjectDetailsService } from 'src/service/project-details.service';
import { UserManagementService } from 'src/service/user-management.service';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 0,
  touchendHideDelay: 0,
};

interface Projectdetails {
  projectName?: string;
  framework?: string;
  helper?: string;
  backend?: string;
  database: string;
}

export interface addColumnData {
  id?: number;
  tableName?: string;
  addColumn?: string;
  datatype?: string;
}
export interface addTableData {
  id?: number;
  addTable?: string;
  addDescription?: string;
}

const COLUNM_DATA: addColumnData[] = [];
const TABLE_DATA: addTableData[] = [];

const COLUMNS_SCHEMA = [
  {
    key: 'tableName',
    type: 'text',
    label: 'Table Name',
  },
  {
    key: 'addColumn',
    type: 'text',
    label: 'Add Colunm',
  },
  {
    key: 'addColumnType',
    type: 'date',
    label: 'Add Colunm Type',
  },
  {
    key: 'foriegnKeyColumnName',
    type: 'text',
    label: 'Foriegn key column name',
  },
  {
    key: 'primaryForiegnkey',
    type: 'text',
    label: 'Primary key/ Foriegn key',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Action',
  },
];

const TABLE_SCHEMA = [
  {
    key: 'addTable',
    type: 'text',
    label: 'Add Table',
  },
  {
    key: 'addDescription',
    type: 'date',
    label: 'Add Description',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Action',
  },
];

 declare const require: any;
 var custOrient:any='LR';




@Component({
  selector: 'app-project-creations',
  templateUrl: './project-creations.component.html',
  styleUrls: ['./project-creations.component.css'],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
  ],
})
export class ProjectCreationsComponent implements OnInit {
TREE_OPTION : any = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    
    series: [
      {
        orient:custOrient,
        type: 'tree',
        name: 'tree1',
        data: [],
        top: '2%',
        left: '12%',
        bottom: '1%',
        right: '30%',
        symbolSize: 10,
        symbol:'emptyCircle',
        lineStyle: {
            color: '#ffcd00',
            opacity:1,
        },
        label: {
          normal: {  
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
  
            fontSize: 16, 
            fontFamily: 'Roboto',      
            color:'#ffffff',
  
            opacity:1,
            borderRadius:1,
            borderWidth: 15,
            gapWidth: 5,
            borderColor: '#ffcd00',          
            backgroundColor: '#ffcd00',
          }   
        },
        emphasis: {
            label: {
                show: true
            }
        },
  
        leaves: {
          label: {
            normal: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left',
  
              fontSize: 16, 
              fontFamily: 'Roboto',
              color:'#ffffff',
  
              borderWidth: 15,
              gapWidth: 3,
              opacity:1,
            }
          },
          lineStyle: {
            color: '#95cb03',
            opacity:1
        }
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };
  


  darkMode$ = this.darkModeService.darkMode$;
  sidenavWidth = 5;
  DroppedListLength: any;
  message: any;
  sideMenuContext: any;
  panelOpenState = false;
  toggle = true;
  status = 'Enable';
  scale: number = 1;
  transform: any;
  screenSize = ['mobileSize', 'tabletSize', 'desktopSize'];
  selectedScreen = this.screenSize[0];
  value1: any;

  isLinear = true;
  isEditable = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  nestedTreeControl: NestedTreeControl<any>;
  nestedDataSource: MatTreeNestedDataSource<Tree>;
  dataChange: BehaviorSubject<Tree[]> = new BehaviorSubject<Tree[]>([]);

  @Input() size: any;
  @ViewChild('drawer1') public drawer1: any;
  @Input() darkModecolor: any;
  @ViewChild('input') input: ElementRef;

  projectDetail: any;
  projectName: string;
  rowAdd: boolean = false;
  rowAddTable: boolean = false;
  data: any[];
  constructor(
    private darkModeService: DarkModeService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar, 
    private projectDetailsService: ProjectDetailsService,
    private userManagementService: UserManagementService
  ) {}

  private _getChildren = (node: any) => {
    return observableOf(node.children);
  };
  hasNestedChild = (_: number, nodeData: Tree) => {
    return !nodeData.type;
  };
  // options: any;
  options = this.TREE_OPTION;
  mergeData: any;
  userManagementList: string[];
  ngOnInit(): void {
    this.darkModeToken();
    this.styleObject();
    this.sideMenuContext = 'section_1';
    this.RemoveElementFromArray();
    this.DroppedListLength = this.done.length;
    this.treeData();
    this.stepperForm();
    this.projectDetail = JSON.parse(
    localStorage.getItem('projectDetail') || '{}'
    );
    this.projectName = this.projectDetail.projectName;
    this.userManagementService.getUsers().subscribe((res: any) => {
      let data :any = []
      res.data.forEach((element: any ) => {
        data.push(element.first_name);
      });
      this.userManagementList = data
    });

  }
  selectedOption: any;
  selectedOptions: any;
  userListData: any 
  getUserData($event: any){
    this.userManagementService.getUsers().subscribe((res: any) => {
      this.userListData = res.data.filter((a: any) => { return a.first_name === $event[0]; });
      console.log(this.userListData);
      this.userListData = this.userListData[0].first_name
      // this.userListData = JSON.stringify(this.userListData);
    });
    let data = {
      userId: this.userListData[0].id
   }
    this.projectDetailsService.projectList().subscribe((res: any) => {
      console.log(res);
     })
  }

  getProject(){
    let data = {
      userId: 1
  }
  this.projectDetailsService.projectList().subscribe((res: any) => {
   console.log(res);
  })
  }

  tableColumns: string[] = TABLE_SCHEMA.map((col) => col.key);
  dataSourceTable = TABLE_DATA;
  tableSchema: any = TABLE_SCHEMA;
  addRowTable(){
    if (this.tableName.valid && this.tableName.value.length !== '') {
      const newRow = {
        id: Date.now(),
        addTable: this.tableName.value,
        addDescription: this.description.value,
      };
      this.dataSourceTable = [newRow, ...this.dataSourceTable];
      if(this.dataSourceTable.length !== 0 ) {
        this.tableName.clearValidators();
        this.nextButton = true;
      }
      this.firstFormGroup.reset();
      this.rowAddTable = true;
    }
  }
  rowDisplayTable(){
    if (this.tableName.valid) {
    this.rowAddTable = true;
    }
  }
  nextButton: boolean = false;
  removeRowTable(id: number) {
    this.dataSourceTable = this.dataSourceTable.filter((u) => u.id !== id);
    if(this.dataSourceTable.length === 0){
      this.nextButton = false;
      this.rowAddTable = false;
    }
  }
  tableData(){
  let tableNameObject: any = [];
  let descriptionObject: any = [];
   const tableNames = this.dataSourceTable
   tableNames.forEach(element => {
    tableNameObject.push(element.addTable);
   });
   tableNames.forEach(element => {
    descriptionObject.push(element.addDescription);
   });
    let requent = {
      projectId: 2, 
      tableName: tableNameObject,
      description: descriptionObject
    }
    console.log(requent);
    // this.projectDetailsService.createTables(requent).subscribe((res: any) => {
    //      console.log(res);
    //       alert('TableCrated');
    //   });
  }

  a: any = [];
  b: any = [];
  x: any;
  TREE_DATA_2:any;
  graphDisplay() {
    const tableNames = this.dataSourceColumn
    let uniqueTable: any[] = [];
    tableNames.map((x: any) => uniqueTable.filter(a => a.tableName == x.tableName).length > 0 ? null : uniqueTable.push(x));

    this.TREE_DATA_2 = {
      itemStyle: { color: '#ffcd00', borderColor: '#ffcd00' },
      'name': this.projectName,
      'children': [],
    };
    uniqueTable.forEach(element => {
      console.log("Element", element);
      let collist = tableNames.filter((a) => { return a.tableName === element.tableName; });
      this.x = {
        'name': element.tableName, lineStyle: { color: '#95cb03', opacity: 1 }, label: { position: 'right', verticalAlign: 'middle', align: 'left', backgroundColor: '#95cb03', borderColor: '#95cb03' }, itemStyle: { color: '#95cb03', borderColor: '#95cb03' },
        'children': [{ 'name': element.addColumn, lineStyle: { color: '#1dade2', opacity: 1 }, label: { position: 'right', verticalAlign: 'middle', align: 'left', backgroundColor: '#1dade2', borderColor: '#1dade2' }, itemStyle: { color: '#1dade2', borderColor: '#1dade2' } }]
      }
      var c=0;
      if (collist.length > 1) {
        collist.forEach(col => {
          if(c>0)
            this.x.children.push({ 'name': col.addColumn, lineStyle: { color: '#1dade2', opacity: 1 }, label: { position: 'right', verticalAlign: 'middle', align: 'left', backgroundColor: '#1dade2', borderColor: '#1dade2' }, itemStyle: { color: '#1dade2', borderColor: '#1dade2' } })
          c++;
        })
        
      }
      this.TREE_DATA_2.children.push(this.x);

    })

    this.TREE_OPTION.series[0].data = [this.TREE_DATA_2];
    this.mergeData = {
      series: this.TREE_OPTION.series
    };
  }

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSourceColumn = COLUNM_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  selectedTableOption: any;
  addRowColumn() {
    if (this.columnName.value.length && this.dataType.value.length 
           && this.foriegnKeyColumnName.value.length && this.primaryForiegnkey.value.length ) {
      const newRow = {
        id: Date.now(),
        tableName: this.selectTable.value,
        addColumn: this.columnName.value,
        addColumnType: this.dataType.value,
        foriegnKeyColumnName: this.foriegnKeyColumnName.value,
        primaryForiegnkey: this.primaryForiegnkey.value,
      };
      this.dataSourceColumn = [newRow, ...this.dataSourceColumn];
      this.thirdFormGroup.reset();
      this.rowAdd = true;
    }
  }

  columnData(){
    // console.log(this.dataSourceColumn);
    // let columnNameObject: any = [];
    // let dataTypeObject: any = [];
    // let foriegnKeyColumnNameObject: any = [];
    // let primaryForiegnkeyObject: any = [];
    // const columnData = this.dataSourceColumn;
    // columnData.forEach(element => {
    //   columnNameObject.push(element.addColumn);
    //  });
    //  columnData.forEach(element => {
    //   dataTypeObject.push(element);
    //  });
    //  columnData.forEach(element => {
    //   foriegnKeyColumnNameObject.push(element);
    //  });
    //  columnData.forEach(element => {
    //   primaryForiegnkeyObject.push(element);
    //  });
    // console.log(columnNameObject);
    // console.log(dataTypeObject);
    // console.log(primaryForiegnkeyObject);
  }

  rowDisplay() {
    if (this.dataSourceColumn.length) {
      this.rowAdd = true;
    }
  }
  removeRow(id: number) {
    this.dataSourceColumn = this.dataSourceColumn.filter((u) => u.id !== id);
    if(this.dataSourceColumn.length === 0){
    this.rowAdd = false;
    }
  }
  
  stepperForm() {
    this.firstFormGroup = this.formBuilder.group({
      tableName: ['', [Validators.required, Validators.minLength(3)]],
      description: [],
    });

    this.secondFormGroup = this.formBuilder.group({
      selectTable: ['', Validators.required],
    });

    this.thirdFormGroup = this.formBuilder.group({
      columnName: ['', Validators.required],
      dataType: ['', Validators.required],
      foriegnKeyColumnName: ['', Validators.required],
      primaryForiegnkey: ['', Validators.required],
    });
  }

 
  get tableName() {
    return this.firstFormGroup.get('tableName') as FormControl;
  }
  get description() {
    return this.firstFormGroup.get('description') as FormControl;
  }
  get selectTable() {
    return this.secondFormGroup.get('selectTable') as FormControl;
  }
  get columnName() {
    return this.thirdFormGroup.get('columnName') as FormControl;
  }
  get dataType() {
    return this.thirdFormGroup.get('dataType') as FormControl;
  }
  get foriegnKeyColumnName() {
    return this.thirdFormGroup.get('foriegnKeyColumnName') as FormControl;
  }
  get primaryForiegnkey() {
    return this.thirdFormGroup.get('primaryForiegnkey') as FormControl;
  }

  matColor: any;
  mat1: any;
  darkModeToken() {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === true) {
      // Light
      this.darkModecolor = 'background-color: #dfe6e9; color: #2d3436;';
      this.matColor = 'light';
    } else {
      // Dark
      this.darkModecolor = 'background-color: #272936; color: #ffffff;';
      this.matColor = 'dark';
    }
  }

  styleObject(): Object {
    let darkModeToken = JSON.parse(localStorage.getItem('dark-mode') || '{}');
    if (darkModeToken.darkMode === false) {
      return { backgroundColor: '#1c1e28', color: '#ffffff' };
    }
    return {};
  }

  cardDarkMode() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    this.screenDarkMode();
  }

  drawerToggle(value: any) {
    this.value1 = value;
    if (value == this.sideMenuContext) {
      this.drawer1.toggle();
    } else {
      this.drawer1.open();
    }
    this.sideMenuContext = value;
  }

  screenDarkMode(): Object {
    if (this.status === 'Disable') {
      return { backgroundColor: '#272936', color: '#ffffff' };
    }
    return {};
  }

  treeData() {
    this.nestedTreeControl = new NestedTreeControl<Tree>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataChange.subscribe((data) => (this.nestedDataSource.data = data));
    this.dataChange.next([
      {
        name: ' Edit Profile',
        type: '',
        children: [
          {
            name: 'AppBar',
            type: '',
            children: [
              {
                name: 'Column',
                type: '',
                children: [
                  {
                    type: 'Row',
                    children: [{ name: 'Icon Button', type: '', children: [] }],
                  },
                  { type: 'Text', children: [] },
                ],
              },
            ],
          },
          {
            name: 'Column',
            children: [
              { name: 'Row', type: '' },
              { name: 'Row', type: '' },
            ],
          },
        ],
      },
    ]);
  }

  

  // Zoom in Zoom out
  zoomOut() {
    this.scale -= 0.1;
    console.log(this.scale);
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }
  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  select(screenViewSize: any) {
    this.selectedScreen = screenViewSize;
  }

  mobileSize() {
    this.size = 'max-width: 15.5rem; height: 22rem';
  }
  tabletSize() {
    this.size = 'max-width: 20rem; height: 22rem';
  }
  desktopSize() {
    this.size = 'max-width: 24rem; max-height: 25.5rem';
  }

  // Drop and Drag
  todo = [
    'Mat input field',
    'Mat Toolbar',
    'Mat select',
    'Mat Chips',
    'Datepicker',
    'Mat slider',
    'Mat spinner',
    'Paginator',
    'Mat Checkbox',
    'Mat Multiple Checkbox',
    'Mat List',
  ];
  done: any = [];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.container.id === 'sliceElement') {
        copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      } else {
        this.done.splice(event.previousIndex, 1);
      }
      this.DroppedListLength = this.done.length;
    }
  }

  RemoveElementFromArray() {
    this.done.forEach((value: any, index: any) => {
      this.done.splice(index, 1);
    });
  }

  removeLastDroppedItem(value: number) {
    this.done.splice(value, 1);
    this.DroppedListLength = this.done.length;
  }

  // chips
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: any[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.fruits.push({ name: value });
    }
    event.chipInput!.clear();
  }
  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  // List view
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  getHtmlData(done: any) {
    let htmlObject: any = [];
    done.forEach((element: any) => {
      if (element === 'Mat input field') {
        htmlObject.push(
          '<mat-form-field appearance="outline"><mat-label>Enter</mat-label><input matInput type="Enter" placeholder="Enter"/></mat-form-field>'
        );
      } else if (element === 'Mat Toolbar') {
        htmlObject.push(
          '<p><mat-toolbar color="primary"><button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon"><mat-icon>menu</mat-icon></button><span>My App</span><span class="example-spacer"></span><button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon"><mat-icon>favorite</mat-icon></button><button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon"><mat-icon>share</mat-icon></button></mat-toolbar></p>'
        );
      } else if (element === 'Mat select') {
        htmlObject.push(
          '<mat-form-field appearance="outline"><mat-label>Choose an option</mat-label><mat-select><mat-option value="option1">Option 1</mat-option><mat-option value="option2">Option 2</mat-option><mat-option value="option3">Option 3</mat-option></mat-select></mat-form-field>'
        );
      } else if (element === 'Mat Chips') {
        htmlObject.push(
          '<mat-form-field class="example-chip-list" appearance="fill"><mat-label>Favorite Fruits</mat-label><mat-chip-list #chipList aria-label="Fruit selection"><mat-chip *ngFor="let fruit of fruits" (removed)="remove(fruit)">{{fruit.name}}<button matChipRemove><mat-icon>cancel</mat-icon></button></mat-chip><input placeholder="New fruit..."[matChipInputFor]="chipList"[matChipInputSeparatorKeyCodes]="separatorKeysCodes"[matChipInputAddOnBlur]="addOnBlur"(matChipInputTokenEnd)="add($event)"></mat-chip-list></mat-form-field>'
        );
      } else if (element === 'Datepicker') {
        htmlObject.push(
          '<mat-form-field appearance="fill"><mat-label>Choose a date</mat-label><input matInput [matDatepicker]="picker"><mat-hint>MM/DD/YYYY</mat-hint><mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle><mat-datepicker #picker></mat-datepicker></mat-form-field>'
        );
      } else if (element === 'Mat slider') {
        htmlObject.push('<mat-slider aria-label="unit(s)"></mat-slider>');
      } else if (element === 'Mat spinner') {
        htmlObject.push('<mat-spinner></mat-spinner>');
      } else if (element === 'Mat checkbox') {
        htmlObject.push(
          '<mat-checkbox class="example-margin" >I am a checkbox</mat-checkbox>'
        );
      } else if (element === 'Mat multi checkbox') {
        htmlObject.push(
          '<mat-card><mat-card-content><h3 class="example-h2">Checkbox configuration</h3><section class="example-section"><mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox><mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox></section><section class="example-section"><label class="example-margin">Align:</label><mat-radio-group [(ngModel)]="labelPosition"><mat-radio-button class="example-margin" value="after">After</mat-radio-button><mat-radio-button class="example-margin" value="before">Before</mat-radio-button></mat-radio-group></section><section class="example-section"><mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox></section></mat-card-content></mat-card><mat-card class="result" [ngStyle]="screenDarkMode()"><mat-card-content><h2 class="example-h2">Result</h2><section class="example-section"><mat-checkboxclass="example-margin"[(ngModel)]="checked"[(indeterminate)]="indeterminate"[labelPosition]="labelPosition"[disabled]="disabled">I am a checkbox</mat-checkbox></section></mat-card-content></mat-card>'
        );
      } else if (element === 'Mat list view') {
        htmlObject.push(
          '<mat-selection-list #shoes><mat-list-option *ngFor="let shoe of typesOfShoes" >{{shoe}}</mat-list-option></mat-selection-list><p>Options selected: {{shoes.selectedOptions.selected.length}}</p>'
        );
      } else if (element === 'Mat paginator') {
        htmlObject.push(
          '<mat-paginator [length]="100" [ngStyle]="screenDarkMode()"[pageSize]="10"[pageSizeOptions]="[5, 10, 25, 100]"aria-label="Select page"></mat-paginator>'
        );
      }
    });
    return htmlObject;
  }

  getCssData(done: any) {
    let cssObject: any = [];
    done.forEach((element: any) => {
      if (element === 'Mat input field') {
        cssObject.push('');
      } else if (element === 'Mat Toolbar') {
        cssObject.push('.example-spacer { flex: 1 1 auto;}');
      } else if (element === 'Mat select') {
        cssObject.push('');
      } else if (element === 'Mat Chips') {
        cssObject.push('');
      } else if (element === 'Datepicker') {
        cssObject.push('');
      } else if (element === 'Mat slider') {
        cssObject.push('');
      } else if (element === 'Mat spinner') {
        cssObject.push('');
      } else if (element === 'Mat checkbox') {
        cssObject.push('');
      } else if (element === 'Mat multi checkbox') {
        cssObject.push('');
      } else if (element === 'Mat list view') {
        cssObject.push('');
      } else if (element === 'Mat paginator') {
        cssObject.push('');
      }
    });
    return cssObject;
  }

  gettsContentData(done: any) {
    let tsContentObject: any = [];
    done.forEach((element: any) => {
      if (element === 'Mat input field') {
        tsContentObject.push('');
      } else if (element === 'Mat Toolbar') {
        tsContentObject.push('');
      } else if (element === 'Mat select') {
        tsContentObject.push('');
      } else if (element === 'Mat Chips') {
        tsContentObject.push('addOnBlur = true;readonly separatorKeysCodes = [ENTER, COMMA] as const;fruits: any[] = [{ name: "Lemon" },{ name: "Lime" }, { name: "Apple" }];add(event: MatChipInputEvent): void {const value = (event.value || "").trim();if (value) {this.fruits.push({ name: value });}event.chipInput!.clear();}remove(fruit: any): void {const index = this.fruits.indexOf(fruit);if (index >= 0) {this.fruits.splice(index, 1);}}');
      } else if (element === 'Datepicker') {
        tsContentObject.push('');
      } else if (element === 'Mat slider') {
        tsContentObject.push('');
      } else if (element === 'Mat spinner') {
        tsContentObject.push('');
      } else if (element === 'Mat checkbox') {
        tsContentObject.push('');
      } else if (element === 'Mat multi checkbox') {
        tsContentObject.push(
          " checked = false; indeterminate = false; labelPosition: 'before' | 'after' = 'after'; disabled = false;"
        );
      } else if (element === 'Mat list view') {
        tsContentObject.push(
          "typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];"
        );
      } else if (element === 'Mat paginator') {
        tsContentObject.push('');
      }
    });
    return tsContentObject;
  }
  frameworkName: string;
  projectSaveDetails() {
    let token = localStorage.getItem('token') || '{}';
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    var projectData: any = {
      id: decodedToken.id,
      projectName: this.projectDetail.projectName,
      description: 'description',
      uiSelection: {
        framework: this.projectDetail.frameworkName,
        helper: this.projectDetail.helper,
        pages: [
          {
            componentName: 'home',
            htmlContent: JSON.parse(
              JSON.stringify(this.getHtmlData(this.done))
            ),
            tsContent: JSON.parse(
              JSON.stringify(this.gettsContentData(this.done))
            ),
            cssContent: JSON.parse(JSON.stringify(this.getCssData(this.done))),
          },
        ],
      },
      packages: {
        name: '@angular/material',
        version: '^14.0.4',
      },
      backendSelection: {
        environment: 'node',
        database: this.projectDetail.database,
      },
      readMeContent:
        'Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files',
    };

    console.log(projectData);
    this.projectDetailsService
      .projectDetailsSave(projectData)
      .subscribe((res: any) => {
        console.log(res);
        this.openSnackBar('Project is saved', 'Cancel'),
          {
            duration: 4000,
          };
      });
  }

  // Notification
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: ['custom-style'],
    });
  }
}

