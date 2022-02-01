import { ListarNFTModule } from './listar-nft.module';

describe('ListarNFTModule', () => {
  let listarNFTModule: ListarNFTModule;

  beforeEach(() => {
    listarNFTModule = new ListarNFTModule();
  });

  it('should create an instance', () => {
    expect(listarNFTModule).toBeTruthy();
  });
});
