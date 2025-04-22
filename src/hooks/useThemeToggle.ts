import { useDispatch,useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slice/themeSlice';
import { RootState } from '../redux/store/store';

export const useThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
    const toggle = () => {
      dispatch(toggleTheme());
    };
    return { isDarkMode, toggle };
  };
