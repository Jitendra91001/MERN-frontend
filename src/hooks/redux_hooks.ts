import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook ,  } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../redux/app/store";

export const useAppDispatch : () => ThunkDispatch<any, any, any> = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;