import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Book')
export class BookResolver {
  @Query('books')
  getAllBooks() {
    return [
      { id: 1, title: 'harry one', price: 20 },
      { id: 2, title: 'Harry one', price: 30 },
      { id: 3, title: 'Harry Two', price: 30 },
    ];
  }
}
