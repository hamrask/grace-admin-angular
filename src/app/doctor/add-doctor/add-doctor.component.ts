import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
doctorForm  = this.fb.group({
  nameEn: [''],
  nameMl: [''],
  specialty: [''],
  degree: [[]],
  photoUrl: [''],
  consultation: [[]]
});
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
