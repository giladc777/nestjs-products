import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShoppingCartItemsService } from './shopping-cart-items.service';
import { Prisma } from 'generated/prisma';

@Controller('shopping-cart-items')
export class ShoppingCartItemsController {
  constructor(
    private readonly shoppingCartItemsService: ShoppingCartItemsService,
  ) {}

  @Post()
  create(
    @Body() createShoppingCartItemDto: Prisma.ShoppingCartItemCreateInput,
  ) {
    return this.shoppingCartItemsService.create(createShoppingCartItemDto);
  }

  @Get()
  findAll() {
    return this.shoppingCartItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingCartItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingCartItemDto: Prisma.ShoppingCartItemUpdateInput,
  ) {
    return this.shoppingCartItemsService.update(+id, updateShoppingCartItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingCartItemsService.remove(+id);
  }
}
