import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookService } from '../book.service';
import * as models from '../book.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  BookCategoryList: Array<models.BookCategoryModel>;
  BookCategoryItem: Array<models.BookDetailModel> = [];
  BookDetailList: Array<models.BookDetailModel>;
  eventBookList: any[];
  promoBookList: any[];
  isOpen: boolean = false;
  title:string = "";
  p: number = 1;
  id_Category:string;
  id_message = 0;
  seenBookList:Array<models.SeenBookModel>=[];



  constructor(
    public dialog: MatDialog,
    private bookservice: BookService,
  ) { }

  getBookCategoryList() {
    this.bookservice.getBookCategoryList().subscribe((response: any) => {
      this.BookCategoryList = response.body;
    })
  }

  getBookDetailList() {
    this.bookservice.getBookDetailList().subscribe((response: any) => {
      this.BookDetailList = response.body;
    })
  }

  openDialogWithTemplateRef(templateRef: TemplateRef<any>, id, title) {
    this.BookCategoryItem = this.BookDetailList.filter(item => item.id_Category === id);
    if (this.BookCategoryItem.length !== 0) {
      this.isOpen = true;
      this.title = title;
    }
    else if (this.BookCategoryItem.length === 0) {
      this.isOpen = false;
      this.title = title;
    }
    this.dialog.open(templateRef);
  }


  getEventBookList() {
    this.eventBookList = this.bookservice.getEventofBookList();
  }

  getPromoBookList() {
    this.promoBookList = this.bookservice.getPromotionBookList()
  }


  ngOnInit() {
    this.getBookCategoryList();
    this.getBookDetailList();
    this.getEventBookList();
    this.getPromoBookList();

  }

}
