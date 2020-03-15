import { ITravelItem } from '../utils/travel-item.model';

export interface IActivity extends ITravelItem {
	id: string;
	name: string;
	description: string;
	thumbnail: string;
}
