export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA';

export const SAVE_PROFISSIONAL_DATA = 'SAVE_PROFISIONAL_DATA';

export const savePersonalDataAction = (personalData) => ({
  type: SAVE_PERSONAL_DATA,
  payload: personalData,
});

export const saveProfissionalDataAction = (profissonalData) => ({
  type: SAVE_PROFISSIONAL_DATA,
  payload: profissonalData,
});
