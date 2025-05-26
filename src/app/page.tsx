/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseLayout from "@/components/BaseLayout";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <BaseLayout searchBar={false}>
      <Stats />
    </BaseLayout>
  );
}
