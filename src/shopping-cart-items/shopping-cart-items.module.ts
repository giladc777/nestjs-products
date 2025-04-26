import { Module } from '@nestjs/common';
import { ShoppingCartItemsService } from './shopping-cart-items.service';
import { ShoppingCartItemsController } from './shopping-cart-items.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ShoppingCartItemsController],
  providers: [ShoppingCartItemsService],
})
export class ShoppingCartItemsModule {}
