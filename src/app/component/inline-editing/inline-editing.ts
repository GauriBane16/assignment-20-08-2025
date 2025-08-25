import { Component, OnInit } from '@angular/core';
import { Api } from '../../service/api';
import { FormsModule } from '@angular/forms';
import { SharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-inline-editing',
  imports: [SharedImports,FormsModule],
  templateUrl: './inline-editing.html',
  styleUrl: './inline-editing.css'
})
export class InlineEditing implements OnInit {
  data:any[] = [];
  constructor(private api:Api) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.api.get().subscribe((res) =>{
      this.data = res;
      this.data = this.data.map((item) => {
        item.isEditing = false;
        return item;
      })
    })
  }

enableEdit(item:any){
  item.isEditing = true;
}
saveRow(item:any){
  item.isEditing = false;
  this.api.update(item).subscribe((res) => {
    console.log('Item updated successfully');
  })  
}
}
