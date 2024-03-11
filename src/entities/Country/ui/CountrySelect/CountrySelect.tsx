import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Gemany, content: Country.Gemany},
    {value: Country.Italy, content: Country.Italy},
    {value: Country.Poland, content: Country.Poland},
    {value: Country.Spain, content: Country.Spain},
    {value: Country.Ukraine, content: Country.Ukraine},
];

export const CountrySelect = memo(({
    className, value, onChange, readonly
}: CountrySelectProps) => {
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
