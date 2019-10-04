import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Review } from '../book';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[] = [];

  name: string;
  username: string;
  comment: string;

  newReview: Review;
  constructor(private svc: DataService) { }

  ngOnInit() {
  }

  reviewBook() {
    this.newReview = new Review(this.name, this.username, this.comment);
    console.log(this.newReview);
    console.log(this.reviews.length);
    this.reviews.push(this.newReview);
    this.reset();
  }
  reset(){
    this.name="";
    this.username="";
    this.comment="";
  }
}
