import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Userdata{
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Table with MatSort';
  displayedColumns: string[] = ['name', 'age', 'city'];

  // Create a MatTableDataSource to hold the data for the table
  dataSource: MatTableDataSource<Userdata>;

  constructor(){
    // initialize the data source
    const userData: Userdata[] = [
      {name: 'John', age: 20, city: 'New York'},
      {name: 'Alice', age: 30, city: 'Los Angeles'},
      {name: 'Bob', age: 27, city: 'Chicago'},
      {name: 'Smith', age: 25, city: 'Atlanta'},
    ];
    // assign the data source
    this.dataSource = new MatTableDataSource<Userdata>(userData);
  }
  
  ngOnInit() {
  }

  // Reference to the MatSort element from the template
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    // Connect the MatSort instance to the dataSource for sorting functionality
    this.dataSource.sort = this.sort;
  }

  // to filter data based on the user's input
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

