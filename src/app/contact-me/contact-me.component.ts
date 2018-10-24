import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MailContent } from '../MailContent';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  mailContent: MailContent;
  mailEdit: FormGroup;
  emailSend: boolean = false;
  constructor(private emailService: EmailService, private fb: FormBuilder) {
    this.mailContent = new MailContent();
    this.mailEdit = fb.group({
      name: new FormControl(this.mailContent.name),
      email: new FormControl(this.mailContent.email),
      title: new FormControl(this.mailContent.title),
      content: new FormControl(this.mailContent.content)
    })
  }

  ngOnInit() {
  }
  sendMailHandler() {
    console.log(this.mailEdit.value)
    this.mailContent.edit(this.mailEdit.value)
    this.emailService.sendEmail(this.mailContent).subscribe(() => {
      this.mailEdit.reset()

      this.changeStatus(true)

    })
  }

  changeStatus(bool) {
    this.emailSend = bool

  }

}
