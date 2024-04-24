import { Module } from '@nestjs/common';
import { BookResolver } from './books.resolver';
@Module({
  imports: [],
  controllers: [],
  providers: [BookResolver],
})
export class BooksModule {}
