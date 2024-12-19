import { Card } from "./Card";

const PopularCar = () => {
  return (
    <>
      <div className="container relative w-[1312px] h-[452px] flex flex-col gap-5">
        <div className="flex sm:gap-[1076px] w-[327px] sm:w-[1312px] sm:h-11 h-5 justify-between items-center">
          <div className="text-center w-[80px] h-[20px] sm:w-[132px] sm:h-[44px] text-[#90A3BF] font-semibold tracking-[-2%] text-sm sm:text-base">Popular Car</div>
          <div className="flex gap-2 text-center sm:w-[104px] sm:h-[44px] text-[#3563E9] rounded-[4px] px-5">View all</div>
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
