import { API_TEST_WLX } from '../config/constants';

export const getListTechApi = async () => {
  try {
    const response = await fetch(`${API_TEST_WLX}techs`);

    return await response.json();

  } catch (error) {

    return null;
  }
};