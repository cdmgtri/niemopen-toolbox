import type { FormError } from "#ui/types";

type StateType = {
  [key: string]: any;
};

export class ToolboxForm {

  /**
   * Returns an empty FormError<string> array.
   */
  static initFormErrors(): FormError<string>[] {
    return [];
  }

  /**
   * Checks if the given value exists. If not, adds the name
   * of the field and an error message it to the given FormError array.
   */
  static validateRequiredField(errors: FormError<string>[], name: string, value: any) {
    if (!value) {
      errors.push({ name, message: "Required" });
    }
  }

  /**
   * Checks if the given value exists. If not, adds the name
   * of the field and an error message it to the given FormError array.
   */
  static validateFileExtension(errors: FormError<string>[], name: string, validExtensions: string[], extension: string | undefined) {
    let message = ToolboxForm.checkFileExtension(validExtensions, extension);
    if (message) {
      errors.push({ name, message });
    }
  }

  /**
   * Checks if the given value exists. If not, adds the name
   * of the field and an error message it to the given FormError array.
  */
 static checkFileExtension(validExtensions: string[], extension: string | undefined) {
   if (extension) {
      if (!validExtensions.includes(extension)) {
        return `Please select a valid file (${validExtensions.join(", ")})`
      }
    }
  }

  /**
   * Returns a new FormData object load with state data.
   * Note that files should be handled separately.
   */
  static formBody(state: StateType): FormData {
    const formData = new FormData();

    for (const key in state) {
      formData.append(key, state[key]);
    }

    return formData;
  }

  /**
   * Gets the first file from the input element of the event's target.
   */
  static fileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!files || files.length == 0) return;
    return files[0];
  }

  static readonly UPLOAD_WARNING = "Do not upload sensitive or distribution-restricted files.";

  /**
   * Downloads a file from the public folder and adds it to the files array
   * of the given input file element.
   *
   * @param path - Begin with initial desired folder under "public" and no leading "/".
   */
  static async loadPublicFile(path: string | undefined) {
    if (!path) return undefined;
    const response = await fetch(path);
    const blob = await response.blob();
    const filename = path.split("/").pop() || "input";
    const file = new File([blob], filename);
    return file;
  }

}
