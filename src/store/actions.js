export const ACTIONS_TYPES = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

export const openModal = (data) => ({
  type: ACTIONS_TYPES.OPEN_MODAL,
  payload: data,
});

export const closeModal = () => ({
  type: ACTIONS_TYPES.CLOSE_MODAL,
});
