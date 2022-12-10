import dynamic from "next/dynamic";

const DynamicFrontEnd = dynamic(
  () => import("../components/RootComponent"),
  { ssr: false }
);
export default DynamicFrontEnd;
