import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0); // Aggregate the total cost of non-filtered
  });
  return <div className='car-value'>Total Cost: ${totalCost}</div>;
}
