import { Component, Input, Inject, NgModule, TemplateRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SvgIconOverrides } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss', './project-modal.scss']
})
export class ProjectCardsComponent {
  @Input() project;
  @ViewChild("projectModal") projectModal: TemplateRef<any>;
  dialogRef;
  index = 0

  overrides: SvgIconOverrides = {
    arrowBack: 'account_box',
    arrowForward: 'account_box'
  }

  constructor(public dialog: MatDialog) {
  }
  
  openDialog(): void {
    this.dialogRef = this.dialog.open(this.projectModal);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public onChange(index: number) {
    this.index = index
  }

  get caption() {
    return this.project.captions[this.index]
  }
}