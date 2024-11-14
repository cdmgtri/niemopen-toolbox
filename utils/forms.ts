
import type { FormError } from "#ui/types";

export function initFormErrors(): FormError<string>[] {
  return [];
}

export function validateRequiredFormField(errors: FormError<string>[], name: string, value: any) {
  if (name && !value) {
    errors.push({
      name,
      message: "Required"
    });
  }
}

type StateType = {
  [key: string]: any;
};

export function getFormBody(state: StateType): FormData {
  const formData = new FormData();

  for (const key in state) {
    formData.append(key, state[key]);
  }

  return formData;
}
