/* eslint-disable default-case */
import * as actionTypes from '../actions/actionsTypes';

const initialState = {
	name: null,
	address: null,
	birthday: null,
	sex: null,
	error: null,
	loading: false,
	profiles: [],
	singleProfile: null,
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case actionTypes.ADD_PROFILE:
			newState.name = action.details.name;
			newState.birthday = action.details.birthday;
			newState.age = action.details.age;
			newState.sex = action.details.sex;
			break;
		case actionTypes.ADD_ADDRESS:
			newState.address = action.address;
			break;
		case actionTypes.ADD_OTHER_DETAILS:
			newState.sector = action.details.sector;
			newState.contactNumber = action.details.contactNumber;
			newState.occupation = action.details.occupation;
			newState.birthplace = action.details.birthplace;
			break;
		case actionTypes.SUBMIT_PROFILE_START:
			newState.loading = true;
			break;
		case actionTypes.SUBMIT_PROFILE_FAIL:
			newState.error = action.error;
			newState.loading = false;
			break;
		case actionTypes.SUBMIT_PROFILE_SUCCESS:
			newState.name = null;
			newState.address = null;
			newState.birthday = null;
			newState.sex = null;
			newState.error = null;
			newState.loading = false;
			newState.profiles.push(action.payload);
			break;
		case actionTypes.GET_PROFILES_START:
			newState.loading = true;
			break;
		case actionTypes.GET_PROFILES_SUCCESS:
			newState.profiles = action.profiles.map((profile) => {
				const today = new Date();
				const birthDate = new Date(profile.birthday);
				let age = today.getFullYear() - birthDate.getFullYear();
				const m = today.getMonth() - birthDate.getMonth();
				if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
					age = age - 1;
				}
				return { ...profile, age: age };
			});
			newState.loading = false;
			newState.error = false;
			break;
		case actionTypes.GET_PROFILES_FAIL:
			newState.loading = false;
			newState.error = action.error;
			break;
		case actionTypes.GET_SINGLE_PROFILE_START:
			newState.loading = true;
			break;
		case actionTypes.GET_SINGLE_PROFILE_SUCCESS:
			newState.singleProfile = action.profile;
			newState.loading = false;
			newState.error = false;
			break;
		case actionTypes.GET_SINGLE_PROFILE_FAIL:
			newState.loading = false;
			newState.error = action.error;
			break;
		case actionTypes.DELETE_PROFILE_START:
			newState.loading = true;
			break;
		case actionTypes.DELETE_PROFILE_SUCCESS:
			newState.loading = false;
			newState.profiles = state.profiles.filter((profile) => profile._id !== action.id);
			break;
		case actionTypes.DELETE_PROFILE_FAIL:
			newState.loading = false;
	}
	return newState;
};

export default reducer;
