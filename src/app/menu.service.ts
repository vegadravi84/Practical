import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173';

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<any> {
    return this.http.get(this.apiUrl);

    //If you change api response using a JSON file
    //return this.http.get('./assets/response.json');
  }
}
