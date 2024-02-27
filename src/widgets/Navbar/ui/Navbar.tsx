import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import Modal from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

const Navbar = ({className}: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. In ornare quam viverra orci sagittis eu volutpat. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Nunc sed id semper risus in. Volutpat odio facilisis mauris sit. Nullam non nisi est sit. Vestibulum lectus mauris ultrices eros in. Nibh nisl condimentum id venenatis a condimentum vitae sapien.')}
            </Modal>
        </div>
    );
};

export default Navbar;
