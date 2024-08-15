
import {defaultLocale,localeOptions} from '../../constants/defaultValues'

import {
    CHANGE_LOCALE
} from '../actions';

const INIT_STATE = {
	locale: (sessionStorage.getItem('currentLanguage') && localeOptions.filter(x=>x.id===sessionStorage.getItem('currentLanguage')).length>0) ? sessionStorage.getItem('currentLanguage') : defaultLocale,
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case CHANGE_LOCALE:
		return { ...state, locale:action.payload};

		default: return { ...state };
	}
}