import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}

export function selectCategories(categories) {
  return {
    type: 'selectCategories',
    payload: { categories },
  };
}

export function loadDefaultData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
