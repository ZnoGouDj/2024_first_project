import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User, 
    LoginByUsernameProps, 
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async(authData, thunkApi) => {
        const {dispatch, extra, rejectWithValue} = thunkApi;

        try {
            // eslint-disable-next-line
            // @ts-ignore
            const response = await extra.api.post<User>('http://localhost:8000/login', authData);
            
            if (!response.data) {
                throw new Error();
            } 

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            // eslint-disable-next-line
            // @ts-ignore
            extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);