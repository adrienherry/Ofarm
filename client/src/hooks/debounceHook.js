import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer } from '../store/actions/searchbar';
// eslint-disable-next-line import/prefer-default-export
export const useDebounce = (value, timeout, callback) => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.searchbar.timer);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      dispatch(setTimer(newTimer));
    }
  }, [value]);
};
