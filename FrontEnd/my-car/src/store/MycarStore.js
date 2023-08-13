import { USER_CAR_ACTIONS } from '../constant';

export function UserCarReducer(state, action) {
  switch (action.type) {
    case USER_CAR_ACTIONS.MODEL:
      return { ...state, trim: action.select, price: action.price };
    case USER_CAR_ACTIONS.ENGINE:
      return { ...state, engine: action.select, price: action.price };
    case USER_CAR_ACTIONS.BODY:
      return { ...state, bodyType: action.select, price: action.price };
    case USER_CAR_ACTIONS.WHEEL:
      return { ...state, wheelDrive: action.select, price: action.price };
    case USER_CAR_ACTIONS.EXCOLOR:
      return { ...state, outerColor: action.select, price: action.price };
    case USER_CAR_ACTIONS.INCOLOR:
      return { ...state, innerColor: action.select };
    case USER_CAR_ACTIONS.ADD_SELECT:
      const SelectOptions = [...state.selectedOptions];
      SelectOptions.push(action.select);

      const price = action.select.price;
      const OptionPrice = [...state.optionPrice];
      OptionPrice.push(price);
      return {
        ...state,
        selectedOptions: SelectOptions,
        optionPrice: OptionPrice,
      };
    case USER_CAR_ACTIONS.REMOVE_SELECT:
      const optionPrice = [...state.optionPrice];
      const prevOption = [...state.selectedOptions];

      const indexToRemove = prevOption.findIndex(
        (option) => option.id === action.select.id,
      );
      optionPrice.splice(indexToRemove, 1);

      const newOption = prevOption.filter(
        (option) => option.id !== action.select.id,
      );
      return { ...state, selectedOptions: newOption, optionPrice: optionPrice };
    default:
      return state;
  }
}
