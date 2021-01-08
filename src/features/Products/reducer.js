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
    default:
      return state;
  }
}
