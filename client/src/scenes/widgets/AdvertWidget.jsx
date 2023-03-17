import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Suggestions
        </Typography>
        <Typography color={medium}>why this Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Ford mustang</Typography>
        <Typography color={medium}>ford.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        your next car is waiting for you ! The Ford Mustang is an iconic sports
        car that has been in production since 1964. It is a two-door coupe or
        convertible with a long hood and short rear deck, giving it a sleek and
        aggressive appearance.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
