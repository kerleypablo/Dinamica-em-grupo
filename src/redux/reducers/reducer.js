import { SAVE_PERSONAL_DATA, SAVE_PROFISSIONAL_DATA } from '../actions/action';

const INITIAL_STATE = {
  state: '',
  curriculo: '',
  cargo: '',
  descricao: '',
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  console.log(SAVE_PERSONAL_DATA);
  switch (action.type) {
  case SAVE_PERSONAL_DATA:
    return { ...state, ...action.payload };
  case SAVE_PROFISSIONAL_DATA:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default reducer;
