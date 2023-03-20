import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss']
})
export class EntriesComponent implements OnInit {
  displayedColumns : string[] = ['Description', 'IsExpense', 'Value', 'Actions']
  constructor(private service:EntryService,
             private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data)=>{
      console.log('Result -', data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    }
  }
  updateEntry(entry){
    console.log(entry);
    this.dialog.open(UpdateEntryComponent, {
      data: {
        Id:entry.Id,
        Description: entry.Description, 
        IsExpense: entry.IsExpense,
        Value: entry.Value
      }
    }
    
  }

}
