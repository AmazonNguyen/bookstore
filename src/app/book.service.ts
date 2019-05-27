import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import * as models from './book.model'

@Injectable()
export class BookService {
  private BookCategoryUrl = "https://5c0e140c7bf0980013785323.mockapi.io/api/BookCategory";
  private BookDetailUrl = "https://5c0e140c7bf0980013785323.mockapi.io/api/BookDetailModel";
  arrayBook:Array<models.BookDetailModel> = [];
  
  
  constructor(private http: HttpClient) { 
  }


  getBookCategoryList(): Observable<HttpResponse<Array<models.BookCategoryModel>>> {
    return this.http.get<any>(
      this.BookCategoryUrl,
      {
        headers: {},
        observe: 'response',
        params: {}
      }
    )
  }

  getBookDetailList(): Observable<HttpResponse<Array<models.BookDetailModel>>> {
    return this.http.get<any>(
      this.BookDetailUrl,
      {
        headers: {},
        observe: 'response',
        params: {}
      }
    )
  }

  getBookItem(id: any): Observable<any> {
    return this.http.get<any>(this.BookDetailUrl + '/' + id)
  }


  getEventofBookList(): any {
    let eventList: any[] = [
      { id: 1, title: 'Ngày hội "Đọc sách cùng con" tại trường Tiểu học Ninh Mỹ', imagePath: 'assets/slideshow/image4.jpg' },
      { id: 2, title: 'Ngày hội sách năm 2019 mở cửa miễn phí', imagePath: 'assets/slideshow/image6.jpg' },
      { id: 3, title: 'Dư âm ngày hội đọc sách', imagePath: 'assets/slideshow/image5.jpg' },
      { id: 4, title: 'Sôi nổi ngày đọc sách tại trường Tiểu học Lê Lợi', imagePath: 'assets/slideshow/image7.jpg' }
    ]
    return eventList
  }

  getPromotionBookList(): any {
    let promoBook: any[] = [
      { id: 1, title: 'Chi tiết...', imagePath: 'assets/uu_dai_trong_ngay/image1.jpg' },
      { id: 2, title: 'Chi tiết...', imagePath: 'assets/uu_dai_trong_ngay/image2.jpg' },
      { id: 3, title: 'Chi tiết...', imagePath: 'assets/uu_dai_trong_ngay/image3.jpg' },
      { id: 4, title: 'Chi tiết...', imagePath: 'assets/uu_dai_trong_ngay/image4.jpg' },
      { id: 5, title: 'Chi tiết...', imagePath: 'assets/uu_dai_trong_ngay/image5.jpg' }
    ]
    return promoBook
  }
 



}