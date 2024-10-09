import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProductType } from '../enum/product-type.enum';

export class CreateProductDTO {
  @IsNumber()
  categoryId: number;

  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  length?: number;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  width?: number;

  @IsOptional()
  @IsNumber()
  diameter?: number;

  @IsEnum(ProductType, { message: 'O tipo deve ser "product" ou "service".' })
  type: ProductType;


}
