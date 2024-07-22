import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from '../api/services';
import { Person } from '../api/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persons-listing',
  templateUrl: './persons-listing.component.html',
  styleUrl: './persons-listing.component.css'
})
export class PersonsListingComponent implements OnInit {
  peopleService = inject(PeopleService);

  constructor(private router: Router) { }

  ngOnInit() {
    this.peopleService.apiPeopleGet$Json().subscribe((people) => {
      this.dataSource.data = people;
    });
  }
  displayedColumns: string[] = ['name', 'actions', 'astronaut'];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  visualize(id: number) {
    this.router.navigate(["duties", id]);
  }

  edit(id: number) {
    this.router.navigate(["admin", id]);
  }
}
