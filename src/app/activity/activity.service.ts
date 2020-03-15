import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IActivity } from './activity.model';

@Injectable({
	providedIn: 'root'
})
export class ActivityService {

	constructor(protected http: HttpClient) { }

	getActivitiesByDestination(destinationId: string): Observable<IActivity[]> {
		const params = { destinationId: destinationId };
		return this.http.get<IActivity[]>(`/api/activities`, {params});
	}
}
