import { Mutation, Store } from 'vuex';

import { RootStore } from '../model/rootstore';

export const NOTIFY_ERROR_MUTATION = "notify-error"
export const CLEAR_ERROR_MUTATION = "clear-error"

export interface NotifyErrorPayload {
  type: "notify-error"
  message: string
}

export interface ClearErrorPayload {
  type: "clear-error"
}

export const notifyErrorMutation: Mutation<RootStore> = (state, payload: NotifyErrorPayload) => {
  state.hasError = true;
  state.message = payload.message;
}

export const clearErrorMutation: Mutation<RootStore> = (state, payload: ClearErrorPayload) => {
  state.hasError = false;
  state.message = null;
}

export const commitClearError = (store: Store<any>) => {
  store.commit<ClearErrorPayload>({ type: CLEAR_ERROR_MUTATION });
}