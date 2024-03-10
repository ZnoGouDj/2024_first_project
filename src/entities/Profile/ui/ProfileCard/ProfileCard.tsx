import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import Loader from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
    className?: string;
    data?: Profile
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname: (value?: string) => void;
    onChangeLastname: (value?: string) => void;
    onChangeCity: (value?: string) => void;
    onChangeAge: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        className, 
        data, 
        error, 
        isLoading, 
        readonly, 
        onChangeFirstname, 
        onChangeLastname,
        onChangeAge,
        onChangeCity,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                <Input 
                    value={data?.first} 
                    placeholder={t('Ваше имя')} 
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input 
                    value={data?.lastname} 
                    placeholder={t('Ваша фамилия')} 
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input 
                    value={data?.age} 
                    placeholder={t('Ваш возраст')} 
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input 
                    value={data?.city} 
                    placeholder={t('Город')} 
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};