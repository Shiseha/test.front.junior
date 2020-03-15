import { ITravelItem } from '../utils/travel-item.model';

export interface IDestination extends ITravelItem {
	id: string;
	name: string;
	description: string;
	country: string;
	priceRange: string;
	rating: number;
	tags: string[];
	img: string;
	bg: string;
	thumbnail: string;
	gallery: string[];
}
