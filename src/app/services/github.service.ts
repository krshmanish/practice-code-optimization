import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  baseUrl = 'https://api.github.com/search/users';

  constructor(private httpClient: HttpClient) {}

  getData(searchKey: string, pageNo: number, filterValue: string, pageLimit: number) {
    return this.httpClient.get(this.baseUrl + '?page=' + pageNo + '&per_page=' + pageLimit + '&q=' + searchKey + '&' + filterValue);
  }

  getSelectedData(url) {
    return this.httpClient.get(url);
  }
}
