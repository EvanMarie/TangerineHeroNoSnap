import type { V2_MetaFunction } from "@remix-run/node";
import PageOne from "./main";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Tangerine Hero" },
    {
      name: "Video Editing and Motion Graphics",
      content: "Welcome to Tangerine Hero!",
    },
  ];
};

export default function Index() {
  return (
    <>
      <PageOne />
    </>
  );
}
