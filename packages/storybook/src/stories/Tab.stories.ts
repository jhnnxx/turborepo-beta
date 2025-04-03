import Tab from "@/stories/Tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500
      }
    }
  },
};

export default meta;

export const DefaultTab = {
  args: {
    tab: 1
  }
}
