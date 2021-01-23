import { API_TEST_WLX } from '../config/constants';

export const registerUser = async userData => {
  try {
    const response = await fetch(`${API_TEST_WLX}signup`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });

    return await response.json();

  } catch (error) {

    return { error, token: null };
  }
};