import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrl: './conformation.component.css',
})
export class ConformationComponent implements OnInit {
  userName: string = '';
  userTotalPrice: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['fullName'];
      this.userTotalPrice = params['totalPrice'];
    });
    console.log(this.userName);
  }
}
