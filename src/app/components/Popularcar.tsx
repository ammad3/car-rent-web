import { Card } from "./Card";

const PopularCar = () => {
  return (
    <>
      <div className="container relative w-[1312px] h-[452px] flex flex-col gap-5">
        <div className="flex gap-[1076px] justify-between">
          <div className="w-[132px] h-[44px] text-[#90A3BF]">Popular Car</div>
          <div className="w-[104px] h-[44px] text-[#3563E9]">View all</div>
        </div>
        <div className="flex justify-between w-[1312px] h-[388px]">
          <Card heading="Koenigsegg" paragraph="Sport" image="/cars/Koenigsegg.svg" />
          <Card heading="Nissan GT - R" paragraph="Sport" image="/cars/NissanGT-R.svg" />
          <Card heading="Rolls - Royce" paragraph="Sedan" image="/cars/Rolls-Royce.svg" />
          <Card heading="Nissan GT - R" paragraph="Sport" image="/cars/NissanGT-R.svg" />
        </div>
      </div>
    </>
  );
};

export { PopularCar };
