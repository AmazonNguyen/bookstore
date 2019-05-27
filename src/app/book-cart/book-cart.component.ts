import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookService } from '../book.service';
import * as models from '../book.model';

@Component({
  selector: 'app-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.scss']
})
export class BookCartComponent implements OnInit {
  BookDetailList: Array<models.BookDetailModel>;
  arrayBook: Array<models.BookDetailModel> = [];
  bookList:Array<models.BookDetailModel> = [];
  item:models.BookDetailModel;
  isHave: boolean = false;
  subscription:any;
 

  constructor(private bookservice: BookService, public dialog: MatDialog, ) {
   }

  getBookDetailList() {
   this.isHave = false;
  }

  dialogDeleteProduct(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }

  deleteDialog(item) {
    for (let i of this.arrayBook) {
      if (item.id === i.id) {
        this.arrayBook.splice(this.arrayBook.indexOf(item), 1);
      }
    }
  }
 

  ngOnInit() {
    this.getBookDetailList();
  }

}
