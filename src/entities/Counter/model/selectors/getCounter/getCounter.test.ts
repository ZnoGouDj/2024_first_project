import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from '../getCounterValue/getCounterValue';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('SHOULD_DO_THIS', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        };

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});