import { AddAndSellModule } from './add-and-sell.module';

describe('AddAndSellModule', () => {
  let addAndSellModule: AddAndSellModule;

  beforeEach(() => {
    addAndSellModule = new AddAndSellModule();
  });

  it('should create an instance', () => {
    expect(addAndSellModule).toBeTruthy();
  });
});
