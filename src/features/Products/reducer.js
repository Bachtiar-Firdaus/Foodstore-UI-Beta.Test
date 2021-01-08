//import semua konstanta yang sudah kita buat pada file src/features/Products/constants.js
import {
  START_FETCHING_PRODUCT,
  ERROR_FETCHING_PRODUCT,
  SUCCESS_FETCHING_PRODUCT,
  SET_PAGE,
  SET_CATEGORY,
  SET_KEYWORD,
  SET_TAGS,
  NEXT_PAGE,
  PREV_PAGE,
  TOGGLE_TAG,
} from "./constants";

// buat konstanta statuslist
const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

//initialState bernilai sesuai dengan yang sudah kita identifikasi pada gambaran umum State Products
const initialState = {
  data: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 6,
  keyword: "",
  category: "",
  tags: [],
  status: statuslist.idle,
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // tangani `START_FETCHING_PRODUCT`
    case START_FETCHING_PRODUCT:
      return { ...state, status: statuslist.process };
    // tangani `ERROR_FETCHING_PRODUCT`
    case ERROR_FETCHING_PRODUCT:
      return { ...state, status: statuslist.error };
    // tangani `SUCCESS_FETCHING_PRODUCT`
    case SUCCESS_FETCHING_PRODUCT:
      return {
        ...state,
        status: statuslist.success,
        data: action.data,
        totalItems: action.count,
      };
    default:
      return state;
  }
}
