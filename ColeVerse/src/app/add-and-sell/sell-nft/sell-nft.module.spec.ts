import { SellNFTModule } from './sell-nft.module';

describe('SellNFTModule', () => {
  let sellNFTModule: SellNFTModule;

  beforeEach(() => {
    sellNFTModule = new SellNFTModule();
  });

  it('should create an instance', () => {
    expect(sellNFTModule).toBeTruthy();
  });
});
