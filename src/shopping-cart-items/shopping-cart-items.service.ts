import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ShoppingCartItemsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createShoppingCartItemDto: Prisma.ShoppingCartItemCreateInput) {
    return this.databaseService.shoppingCartItem.create({
      data: createShoppingCartItemDto,
    });
  }

  async findAll() {
    return this.databaseService.shoppingCartItem.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.shoppingCartItem.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateShoppingCartItemDto: Prisma.ShoppingCartItemUpdateInput,
  ) {
    return this.databaseService.shoppingCartItem.update({
      where: { id },
      data: updateShoppingCartItemDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.shoppingCartItem.delete({
      where: { id },
    });
  }
}
