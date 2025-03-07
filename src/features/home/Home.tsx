import ListCards from "../../components/ListCard";
import Map from "../../components/Map";

export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <ListCards />
        <Map />
      </div>
    </div>
  );
}
