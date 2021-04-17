import { Component, OnInit,ViewChild } from '@angular/core';
import { users } from 'app/_models/user';
import { UsersService } from 'app/_services/users.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public users: users[];
  public user: users;
  dataSource: MatTableDataSource<users>;
  displayedColumns: string[] = ['name', 'country','actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

/*
  * Gets the list of people from the web service
 */
  getUsers() {
    this.userService.getUsers().subscribe(
      (  users: users[] ) => {
        this.users = users;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

/*
* Apply a filter to the people table.
 */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*
  * Capture the selected user to the modal form.
  */
  showInfo(user: users) {
       this.user = user;
  }

}
