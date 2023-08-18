import { useContext, useEffect, useState } from 'react';
import {
  UserCarActionContext,
  UserCarValueContext,
} from '../../context/mycar/UserCarProvider';
import {
  OptionActionContext,
  OptionValueContext,
} from '../../context/mycar/selectOption/SelectOptionProvider';

export function useUserCarState() {
  const { userCar } = useContext(UserCarValueContext);
  return userCar;
}
export function useUserCarAction() {
  const { dispatch } = useContext(UserCarActionContext);
  return dispatch;
}

export function useSelectAction() {
  const action = useContext(OptionActionContext);
  return action;
}
export function useSelectValue() {
  const value = useContext(OptionValueContext);
  return value;
}
