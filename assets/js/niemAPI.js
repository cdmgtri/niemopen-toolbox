
const baseURL = "https://tools.niem.gov/api/v2/";
// const baseURL = "http://localhost:8080/api/v2/";

export default class niemAPI {

  /**
   * @param {FormData} formData - Parameters and file to upload
   */
  static async transform(formData) {
    const url = baseURL + "transforms/models";

    return await fetch(url, {
      body: formData,
      method: "post"
    });
  }

}
