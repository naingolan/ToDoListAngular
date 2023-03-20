import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.scss']
})
export class UpdateEntryComponent implements OnInit {
  form: FormGroup;
  id:number;
  constructor(private fb: FormBuilder, 
             private dialgoRef: MatDialogRef<UpdateEntryComponent>,
             @Inject(MAT_DIALOG_DATA){Description, IsExpense, Value, Id}, 
             private service:EntryService) {
    this.id = Id;
    this.form = fb.group({
      description: [Description, Validators.required],
      isExpense: [IsExpense, Validators.required],
      value: [Value, Validators.required],
    })
             }
  types: Type[]= [
    {value: true, display:'Expense'},
    {value:false, display:'Income'},
  ]
  close(){
    console.log("Close Clicked");
    this.dialogRef.close();;
  }
  save(){
    this.form.value.id = this.id;
    console.log("Save clicked");
    this.service.updateEntr(this.id, this.form.value).subscribe((data)=>{
      console.log('Data: ', data);
    })
  }

  ngOnInit(): void {
  }

}
