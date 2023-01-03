/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TradesCreateFormInputValues = {
    scriptName?: string;
    quantity?: number;
    price?: number;
    amount?: number;
    buyDate?: string;
    sellDate?: string;
    profit?: string;
    actions?: string;
};
export declare type TradesCreateFormValidationValues = {
    scriptName?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    amount?: ValidationFunction<number>;
    buyDate?: ValidationFunction<string>;
    sellDate?: ValidationFunction<string>;
    profit?: ValidationFunction<string>;
    actions?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TradesCreateFormOverridesProps = {
    TradesCreateFormGrid?: FormProps<GridProps>;
    scriptName?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    amount?: FormProps<TextFieldProps>;
    buyDate?: FormProps<TextFieldProps>;
    sellDate?: FormProps<TextFieldProps>;
    profit?: FormProps<TextFieldProps>;
    actions?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TradesCreateFormProps = React.PropsWithChildren<{
    overrides?: TradesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TradesCreateFormInputValues) => TradesCreateFormInputValues;
    onSuccess?: (fields: TradesCreateFormInputValues) => void;
    onError?: (fields: TradesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TradesCreateFormInputValues) => TradesCreateFormInputValues;
    onValidate?: TradesCreateFormValidationValues;
} & React.CSSProperties>;
export default function TradesCreateForm(props: TradesCreateFormProps): React.ReactElement;
