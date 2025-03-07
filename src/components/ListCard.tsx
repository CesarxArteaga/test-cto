import { items } from "../data/list.items";
import Card from "./Card";

export default function ListCards() {
  return (
    <div className="lg:w-full">
      <div className="md:grid grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
