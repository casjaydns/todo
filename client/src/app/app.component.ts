import {Component, OnInit} from '@angular/core';
import {StorageService} from "./services/storage.service";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.storage.removeAuthData();
    this.router.navigate(['login'])
  }

}
