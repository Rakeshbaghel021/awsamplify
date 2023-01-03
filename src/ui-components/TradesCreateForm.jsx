/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Trades } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function TradesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    scriptName: undefined,
    quantity: undefined,
    price: undefined,
    amount: undefined,
    buyDate: undefined,
    sellDate: undefined,
    profit: undefined,
    actions: undefined,
  };
  const [scriptName, setScriptName] = React.useState(initialValues.scriptName);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [price, setPrice] = React.useState(initialValues.price);
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [buyDate, setBuyDate] = React.useState(initialValues.buyDate);
  const [sellDate, setSellDate] = React.useState(initialValues.sellDate);
  const [profit, setProfit] = React.useState(initialValues.profit);
  const [actions, setActions] = React.useState(initialValues.actions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setScriptName(initialValues.scriptName);
    setQuantity(initialValues.quantity);
    setPrice(initialValues.price);
    setAmount(initialValues.amount);
    setBuyDate(initialValues.buyDate);
    setSellDate(initialValues.sellDate);
    setProfit(initialValues.profit);
    setActions(initialValues.actions);
    setErrors({});
  };
  const validations = {
    scriptName: [],
    quantity: [],
    price: [],
    amount: [],
    buyDate: [],
    sellDate: [],
    profit: [],
    actions: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          scriptName,
          quantity,
          price,
          amount,
          buyDate,
          sellDate,
          profit,
          actions,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Trades(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "TradesCreateForm")}
    >
      <TextField
        label="Script name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scriptName: value,
              quantity,
              price,
              amount,
              buyDate,
              sellDate,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.scriptName ?? value;
          }
          if (errors.scriptName?.hasError) {
            runValidationTasks("scriptName", value);
          }
          setScriptName(value);
        }}
        onBlur={() => runValidationTasks("scriptName", scriptName)}
        errorMessage={errors.scriptName?.errorMessage}
        hasError={errors.scriptName?.hasError}
        {...getOverrideProps(overrides, "scriptName")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              quantity: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity: value,
              price,
              amount,
              buyDate,
              sellDate,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              price: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price: value,
              amount,
              buyDate,
              sellDate,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              amount: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price,
              amount: value,
              buyDate,
              sellDate,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label="Buy date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price,
              amount,
              buyDate: value,
              sellDate,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.buyDate ?? value;
          }
          if (errors.buyDate?.hasError) {
            runValidationTasks("buyDate", value);
          }
          setBuyDate(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("buyDate", buyDate)}
        errorMessage={errors.buyDate?.errorMessage}
        hasError={errors.buyDate?.hasError}
        {...getOverrideProps(overrides, "buyDate")}
      ></TextField>
      <TextField
        label="Sell date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price,
              amount,
              buyDate,
              sellDate: value,
              profit,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.sellDate ?? value;
          }
          if (errors.sellDate?.hasError) {
            runValidationTasks("sellDate", value);
          }
          setSellDate(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("sellDate", sellDate)}
        errorMessage={errors.sellDate?.errorMessage}
        hasError={errors.sellDate?.hasError}
        {...getOverrideProps(overrides, "sellDate")}
      ></TextField>
      <TextField
        label="Profit"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price,
              amount,
              buyDate,
              sellDate,
              profit: value,
              actions,
            };
            const result = onChange(modelFields);
            value = result?.profit ?? value;
          }
          if (errors.profit?.hasError) {
            runValidationTasks("profit", value);
          }
          setProfit(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("profit", profit)}
        errorMessage={errors.profit?.errorMessage}
        hasError={errors.profit?.hasError}
        {...getOverrideProps(overrides, "profit")}
      ></TextField>
      <SelectField
        label="Actions"
        placeholder="Please select an option"
        isDisabled={false}
        value={actions}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scriptName,
              quantity,
              price,
              amount,
              buyDate,
              sellDate,
              profit,
              actions: value,
            };
            const result = onChange(modelFields);
            value = result?.actions ?? value;
          }
          if (errors.actions?.hasError) {
            runValidationTasks("actions", value);
          }
          setActions(value);
        }}
        onBlur={() => runValidationTasks("actions", actions)}
        errorMessage={errors.actions?.errorMessage}
        hasError={errors.actions?.hasError}
        {...getOverrideProps(overrides, "actions")}
      >
        <option
          children="Buy"
          value="BUY"
          {...getOverrideProps(overrides, "actionsoption0")}
        ></option>
        <option
          children="Sell"
          value="SELL"
          {...getOverrideProps(overrides, "actionsoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
