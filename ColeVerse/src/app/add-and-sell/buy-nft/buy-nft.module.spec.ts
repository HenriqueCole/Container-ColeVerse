import { BuyNftModule } from './buy-nft.module';

describe('BuyNftModule', () => {
  let buyNftModule: BuyNftModule;

  beforeEach(() => {
    buyNftModule = new BuyNftModule();
  });

  it('should create an instance', () => {
    expect(buyNftModule).toBeTruthy();
  });
});
