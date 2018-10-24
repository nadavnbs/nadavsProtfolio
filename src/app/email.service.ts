import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MailContent } from './MailContent'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }
  sendEmail(content){
    return this.http.post<MailContent>('sendEmail',content)
  };
}
