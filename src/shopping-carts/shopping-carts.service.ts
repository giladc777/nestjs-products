import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';
// import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
// import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';

@Injectable()
export class ShoppingCartsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createShoppingCartDto: Prisma.ShoppingCartCreateInput) {
    return this.databaseService.shoppingCart.create({
      data: createShoppingCartDto,
    });
  }

  async findAll() {
    return this.databaseService.shoppingCart.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.shoppingCart.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    updateShoppingCartDto: Prisma.ShoppingCartUpdateInput,
  ) {
    return this.databaseService.shoppingCart.update({
      where: { id },
      data: updateShoppingCartDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.shoppingCart.delete({
      where: { id },
    });
  }
}
