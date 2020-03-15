import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationGalleryComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivityService } from '../activity/activity.service';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
	imports: [
		DestinationRoutingModule,
		CommonModule,
		HttpClientModule,
		ApiModule,
		UtilsModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
		ActivityService,
	],
	declarations: [
		DestinationComponent,
		DestinationGalleryComponent,
	],
	exports: [
	]
})
export class DestinationModule {}
