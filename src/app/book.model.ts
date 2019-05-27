export interface BookCategoryModel{
    id:string;
    type:string;
}

export interface BookDetailModel{
    id_Category:string;
    id:string;
    name:string;
    author:string;
    publish:string;
    numberofpage:number;
    review:string;
    price:number;
    imagePath:string;
}

export interface SeenBookModel{
    id_message:number;
    seenbook:BookDetailModel;
}
