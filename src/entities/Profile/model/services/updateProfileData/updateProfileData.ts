import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile, 
    void, 
    ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData',
    // !todo check types below
    // eslint-disable-next-line
    // @ts-ignore
    async(_, thunkApi) => {
        const {extra, rejectWithValue, getState} = thunkApi;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if (errors.length) {
            return rejectWithValue;
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);
            
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);