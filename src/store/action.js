export const ActionType = {
  OPEN_POPUP: `popup/openPopup`,
  CLOSE_POPUP: `popup/closePopup`
};

export const ActionCreator = {
  openPopup: () => ({
    type: ActionType.OPEN_POPUP
  }),
  closePopup: () => ({
    type: ActionType.CLOSE_POPUP
  })
};