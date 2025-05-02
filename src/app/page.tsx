import BaseLayout from "@/components/BaseLayout";
import BottomCard from "@/components/Card/BottomCard";
import TopCard from "@/components/Card/TopCard";

export default function Home() {
  return (
    <BaseLayout searchBar={false}>
      <p className="px-6 mt-4 font-montserrat font-bold">Last Update : 5 Minute Ago</p>
      <div className="grid grid-cols-4 px-6 my-6 gap-4">
        <TopCard />
      </div>
      <div className="grid grid-cols-5 px-6 gap-4">
        <BottomCard />
      </div>
    </BaseLayout>
  );
}
