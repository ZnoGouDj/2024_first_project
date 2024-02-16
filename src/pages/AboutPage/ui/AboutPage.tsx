import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation('about');

    return (
        <div>
            {t('Сайт')}
        </div>
    );
};

export default AboutPage;