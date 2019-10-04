export class Book {

    id:number;
    author:string;
    title:string;
    price:number;
    review:string;
    //comments:Comment[]=[];

    constructor(id:number,author:string,title:string,price:number){
        this.id=id;
        this.author=author;
        this.title=title;
        this.price=price;
       
    }
}
export class Review{
    name:string;
    username:string;
    comment:string;

    constructor(name:string,username:string,comment:string){
        this.name=name;
        this.username=username;
        this.comment=comment;

    }
}
