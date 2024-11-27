import type { StorybookConfig } from "@storybook/react-webpack5";
import { jsx } from "react/jsx-runtime";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};
export default config;
