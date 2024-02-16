import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('Сайт')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
