// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private searchCriteriaSubject = new BehaviorSubject<any>({});

    setSearchCriteria(searchCriteria: any) {
        this.searchCriteriaSubject.next(searchCriteria);
    }

    getSearchCriteria() {
        return this.searchCriteriaSubject.asObservable();
    }
}
