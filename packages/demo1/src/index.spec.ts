import { ApiPromise, WsProvider } from '@polkadot/api';

import { sum } from './index';

describe('Demo', (): void => {
  beforeAll(async () => {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    //    const api = await ApiPromise.create({ provider: wsProvider });
    //    const runtimeVersion = await api.rpc.state.getRuntimeVersion('3500000');
    //    console.log(runtimeVersion.toString());
  });

  it('Sum', (): void => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});
