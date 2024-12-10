import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { useMemo } from "react";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "@/shared-theme/themePrimitives";
import { dataDisplayCustomizations } from "@/shared-theme/customizations/dataDisplay";
import { feedbackCustomizations } from "@/shared-theme/customizations/feedback";
import { inputsCustomizations } from "@/shared-theme/customizations/inputs";
import { navigationCustomizations } from "@/shared-theme/customizations/navigation";
import { surfacesCustomizations } from "@/shared-theme/customizations/surfaces";

interface AppThemeProps {
  children: React.ReactNode;
}

export default function AppTheme({ children }: AppThemeProps) {
  const theme = useMemo(() => {
    return createTheme({
      // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
      cssVariables: {
        colorSchemeSelector: "data-mui-color-scheme",
        cssVarPrefix: "template",
      },
      colorSchemes,
      typography,
      shadows,
      shape,
      components: {
        // ...inputsCustomizations,
        ...dataDisplayCustomizations,
        ...feedbackCustomizations,
        // ...navigationCustomizations,
        ...surfacesCustomizations,
      },
    });
  }, []);
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
