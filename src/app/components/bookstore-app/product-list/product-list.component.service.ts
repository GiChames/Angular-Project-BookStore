import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()

export class BooksService {
    private url= 'https://sheet.best/api/sheets/19b5a687-7d60-421c-8134-98e4e6dd1557';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){
    }

    getBook(){
        return this.http.get(this.url)
    }
}