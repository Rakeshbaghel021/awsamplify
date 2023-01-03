/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Trades } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TradesUpdateFormInputValues = {
    scriptName?: string;
    quantity?: number;
    price?: number;
    amount?: number;
    buyDate?: string;
    sellDate?: string;
    profit?: string;
    actions?: string;
};
export declare type TradesUpdateFormValidationValues = {
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
export declare type TradesUpdateFormOverridesProps = {
    TradesUpdateFormGrid?: FormProps<GridProps>;
    scriptName?: FormProps<TextFieldProps>;
    quantity?: FormProps<TextFieldProps>;
    price?: FormProps<TextFieldProps>;
    amount?: FormProps<TextFieldProps>;
    buyDate?: FormProps<TextFieldProps>;
    sellDate?: FormProps<TextFieldProps>;
    profit?: FormProps<TextFieldProps>;
    actions?: FormProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TradesUpdateFormProps = React.PropsWithChildren<{
    overrides?: TradesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    trades?: Trades;
    onSubmit?: (fields: TradesUpdateFormInputValues) => TradesUpdateFormInputValues;
    onSuccess?: (fields: TradesUpdateFormInputValues) => void;
    onError?: (fields: TradesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TradesUpdateFormInputValues) => TradesUpdateFormInputValues;
    onValidate?: TradesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TradesUpdateForm(props: TradesUpdateFormProps): React.ReactElement;
