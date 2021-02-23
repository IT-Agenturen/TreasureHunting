import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  gold_coins = "400";
  constructor(private formBuilder: FormBuilder
    ,private router :Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required]      
  });
  }

  get regFrmCntrl() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
                
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        localStorage.setItem(environment.username, this.registerForm.value.username);
        localStorage.setItem(environment.gold_coins, this.gold_coins);
        this.router.navigate(['/characters']);
    }

}
