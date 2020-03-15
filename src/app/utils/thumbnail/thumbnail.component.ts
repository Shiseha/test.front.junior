import { Component, Input } from '@angular/core';
import { ITravelItem } from '../travel-item.model';

@Component({
	selector: 'app-thumbnail',
	templateUrl: './thumbnail.component.html',
	styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
	@Input() travelItem: ITravelItem;
	@Input() routerLink: any;
	get thumbnailImg() {
		return `assets/img/${this.travelItem.img || 'placeholder'}/thumbnail.jpg`;
	}
}
