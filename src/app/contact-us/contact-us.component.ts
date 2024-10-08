import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideToastr, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,HttpClientModule,],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
  })
export class ContactUsComponent {

  contactForm: FormGroup

  url: string = "https://script.google.com/macros/s/AKfycbygbZEhgAoVuGZ3bf4cShZ96Kiewx_XhScvc-hn7bgmSQLRxq6UO9IMUREKLbImgTRSvg/exec"

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient
  ){
    this.contactForm = this.fb.group({
      c_fname:['',[Validators.required]],
      c_lname:['',[Validators.required]],
      c_email:['',[Validators.required]],
      c_subject:['',[Validators.required]],
      c_message: ['',[Validators.required]]
    });
  }


  submitForm(){
    const formData = this.contactForm.getRawValue();

   if(this.contactForm.invalid){
    this.toastr.error('Ensure all fields are entered');
   }else{
    const payload = {
      name: formData.c_fname+' '+formData.c_lname,
      email: formData.c_email,
      subject: formData.c_subject,
      message: formData.c_message
    }

    this.http.post(this.url, payload)
      .subscribe(response => {
        this.contactForm.reset();
        this.toastr.success('Request submitted');
      }, error => {
        this.contactForm.reset();
        this.toastr.success('Request submitted');
        // this.toastr.error('Error: ');
      });
   }


  }
}
