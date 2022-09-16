import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "800",
    humidity: 13,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
        wind={validProps.wind}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
