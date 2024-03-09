import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { InputHTMLAttributes, MutableRefObject, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    autofocus?: boolean;
    onChange?: (value: string) => void;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        type = 'text',
        placeholder,
        autofocus,
        onChange,
        ...otherProps
    } = props;
    const ref = useRef() as MutableRefObject<ReturnType<any>>;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                /> 
                {isFocused && (
                    <span 
                        className={cls.caret}
                        style={{left: `${caretPosition * 9}px`}}
                    />
                )}
            </div>
        </div>
    );
});

export default Input;