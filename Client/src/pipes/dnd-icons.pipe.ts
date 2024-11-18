import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dndIcons'
})
export class DndIconsPipe implements PipeTransform {

  transform(value: any): any {
  
    
    if( 'Mat input field' === value){
       return "<img src='/assets/Drop&DragIcons/input-field.png' /> Input Feild "
    }
    if( 'Mat Toolbar' === value){
       return "<img src='/assets/Drop&DragIcons/Tool-bar.svg'/> Toolbar "
    }
    if( 'Mat select' === value){
       return "<img src='/assets/Drop&DragIcons/dropdown.png' /> Select"
    }
    if( 'Mat Chips' === value){
       return "<br><img src='/assets/Drop&DragIcons/chip.svg' /><br><br>Chips"
    }
    if( 'Mat slider' === value){
       return "<img src='/assets/Drop&DragIcons/slider.png' /> slider"
    }
    if( 'Datepicker' === value){
       return "<img src='/assets/Drop&DragIcons/calendar.png'/> Datepicker";
    }
    if( 'Mat spinner' === value){
       return "<img src='/assets/Drop&DragIcons/spiner.svg'/> spinner"
    }
    if( 'Paginator' === value){
       return "<br><br><img src='/assets/Drop&DragIcons/paginator.svg'/><br><br>Paginator";
    }
    if( 'Mat Checkbox' === value){
       return "<img src='/assets/Drop&DragIcons/check-box.png'/> Checkbox";
    }
    if( 'Mat Multiple Checkbox' === value){
       return "<img src='/assets/Drop&DragIcons/multi-checkbox.png'/>Multi Checkbox ";
    }
    if( 'Mat List' === value){
       return "<img src='/assets/Drop&DragIcons/list-view.png'/>List View ";
    }

  }
}
