import create from 'zustand';
import { FieldState, State } from './types';
import { getDefaultField, getDefaultStep } from './utils/form.utils';

const isFormValid = (fields: FieldState[]): boolean =>
  fields.every(
    (field) =>
      !field?.errors?.length &&
      !field?.asyncErrors?.length &&
      !field?.externalErrors?.length,
  );

export const createStore = (id: string) =>
  create<State>((set, get) => ({
    form: {
      id,
      resetKey: 0,
      isValid: true,
      isValidating: false,
      isSubmitted: false,
      initialStepName: null,
      navigatedStepName: null,
    },
    steps: [],
    fields: [],
    internalActions: {
      registerStep: (name, step) => {
        set((state) => {
          const steps = [
            ...state.steps,
            {
              ...getDefaultStep(name),
              ...step,
            },
          ];
          return {
            steps,
          };
        });
      },
      unregisterStep: (name) => {
        set((state) => {
          const steps = state.steps.filter((s) => s.name !== name);
          return {
            steps,
          };
        });
      },
      registerField: (name, field) => {
        set((state) => {
          const fields = [
            ...state.fields,
            {
              ...getDefaultField(name),
              ...(field || {}),
            },
          ];
          const form = {
            ...state.form,
            isValid: isFormValid(fields),
          };
          return {
            form,
            fields,
          };
        });
      },
      unregisterField: (id) => {
        set((state) => {
          const fields = state.fields.filter((f) => f.id !== id);
          const form = {
            ...state.form,
            isValid: isFormValid(fields),
          };
          return {
            form,
            fields,
          };
        });
      },
      updateField: (id, field) => {
        set((state) => {
          if (!id) return {};

          const oldField = state.fields.find((f) => f.id === id);

          if (!oldField) return {};

          const otherFields = state.fields.filter((f) => f.id !== id);
          const fields = [
            ...otherFields,
            {
              ...(oldField || {}),
              ...field,
            },
          ];
          const form = {
            ...state.form,
            isValid: isFormValid(fields),
          };
          return {
            form,
            fields,
          };
        });
      },
    },
    exposedActions: {
      submit: (event) => {},
      setFieldsValues: (objectOfValues) => {},
      invalidateFields: (objectOfErrors) => {},
      getFieldStepName: (fieldName) => null,
      submitStep: (event) => {},
      goToStep: (stepName) => {},
      nextStep: () => {},
      prevStep: () => {},
      reset: () => {},
    },
  }));
