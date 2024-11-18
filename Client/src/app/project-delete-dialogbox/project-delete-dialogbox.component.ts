import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-delete-dialogbox',
  templateUrl: './project-delete-dialogbox.component.html',
  styleUrls: ['./project-delete-dialogbox.component.css'],
})
export class ProjectDeleteDialogboxComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public openDialog: any,
    private dialogRef: MatDialogRef<ProjectDeleteDialogboxComponent>,
    private _snackBar: MatSnackBar,
  ) {}

  message: string = 'Are you sure you want to delete this item?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';

  ngOnInit(): void {}

  onConfirmClick() {
    this.dialogRef.close(true);
    this.deletedProject();

    this.openSnackBar('Project Deleted!!!', ''),
      {
        duration: 5000,
      };
  }

  deletedProject() {
    var request: any = {
      id: this.openDialog,
    };

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['custom-style'],
    });
  }
}
