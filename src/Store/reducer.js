const initialState = {
  shoes: 0,
  wallet: 0,
  camera: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SHOES":
      let newShoesCount = state.shoes + 1;
      return {
        ...state,
        shoes: newShoesCount,
      };
    case "ADD_WALLET":
      let newWalletCount = state.wallet + 1;
      return {
        ...state,
        wallet: newWalletCount,
      };
    case "ADD_CAMERA":
      let newCameraCount = state.camera + 1;
      return {
        ...state,
        camera: newCameraCount,
      };
    default:
      return state;
  }
};

export default reducer;
