import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ThumbnailComponent,
	],
	exports: [
		ThumbnailComponent,
	]
})
export class UtilsModule { }
