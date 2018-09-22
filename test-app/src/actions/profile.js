const addProfiles = profiles => ({
  type: "ADD_PROFILES",
  payload: { profiles }
});

export const getProfiles = () => async (dispatch, getState) => {
  const res = await fetch("http://localhost:3001/users");
  const profiles = await res.json();
  dispatch(addProfiles(profiles));
};
