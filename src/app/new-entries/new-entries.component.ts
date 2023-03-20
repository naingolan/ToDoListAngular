import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-entries',
  templateUrl: './new-entries.component.html',
  styleUrls: ['./new-entries.component.scss']
})
export class NewEntriesComponent implements OnInit {

  types: Type[] = [
    {value: true, display: 'Expense'},
    {value: false, display: 'Income'}
  ]
  constructor(private service: EntryService) { }

  entryForm = new FormGroup({
    desccription: new FormControl('', Validators.requred),
    isExpense: new FormControl('', Validators.required),
    value : new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')])
  })
onSubmit(){
  console.log(this.entryform.value);
  this.service.createEntry(this.entryForm.value).subscribe((data))=>{
    console.log('Data = ', data);
  }
}
}
