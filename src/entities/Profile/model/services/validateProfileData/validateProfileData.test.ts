import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Gemany,
    lastname: 'admin',
    first: 'asd',
    city: 'asf',
    currency: Currency.EUR,
};

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]); 
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({ });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});