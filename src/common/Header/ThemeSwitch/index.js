import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectIsDarkTheme } from "./themeSlice";
import { Button, Info, SwitchBody, IconBody, Icon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
        <Info>
          Dark mode {isDarkTheme ? "on" : "off"}
        </Info>
        <SwitchBody>
          <IconBody
            active={isDarkTheme}
          >
            <Icon />
          </IconBody>
        </SwitchBody>
      </Button>
  );
};