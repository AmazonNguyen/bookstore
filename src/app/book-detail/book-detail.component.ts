import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import * as models from '../book.model';




@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {

  constructor(private bookservice: BookService, private activatedRoute: ActivatedRoute) {
  }
  name: string;
  author: string;
  publish: string;
  numberofpage: number;
  review: string;
  price: number;
  img: string;
  id: string;
  id_Category: string;
  subscription: Subscription;
  BookDetailList: Array<models.BookDetailModel> = [];
  BookList: Array<models.BookDetailModel> = [];
  show = false;


  getBookDetailItem() {
    this.bookservice.getBookItem(this.id).subscribe(res => {
      this.name = res.name;
      this.author = res.author;
      this.publish = res.publish;
      this.numberofpage = res.numberofpage;
      this.review = res.review;
      this.price = res.price;
      this.img = res.imagePath;
      this.id_Category = res.id_Category;
    })
  }

  getBooks() {
    this.bookservice.getBookItem(this.id).subscribe(async response => {
      await (this.BookDetailList.push(response));
      this.bookservice.getBookDetailList().subscribe((res: any) => {
        for (let i of this.BookDetailList) {
          this.BookList = res.body.filter(item => item.id_Category === i.id_Category);
          for (let j of this.BookList) {
            if (j.id === i.id) {
              this.BookList.splice(this.BookList.indexOf(j), 1);
            }
          }
        }
      })
    });
  }

  
  getId(id){
    this.id = id;
    this.getBookDetailItem();
    this.getBooks();
  }

 
 

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getBookDetailItem();
    this.getBooks();

  }
 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
