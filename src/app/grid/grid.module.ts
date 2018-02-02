import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridRowComponent } from './grid-row/grid-row.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent, GridItemComponent, GridRowComponent],
  exports: [GridComponent, GridItemComponent, GridRowComponent]

})
export class GridModule {}
