export class CreateCryptocurrencyDto {
  readonly name: string;
  readonly shortForm: string;
  readonly price: number;
  readonly icon: string;
  readonly changePercentage: number;
  readonly history: Array<number>;
}
