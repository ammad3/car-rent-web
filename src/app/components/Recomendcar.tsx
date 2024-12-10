import { Card } from "./Card";

const RecomendCar = () => {
  return (
    <>
      <div className="container relative w-[1312px] h-[872px] flex flex-col gap-5">
        <div className="flex gap-8 rounded-[4px] px-5 ">
          <div className="w-[196px] h-[44px] text-[#90A3BF]">Recomendation Car</div>
        </div>
        <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-8 w-[1312px]">
          <Card heading="All New Rush" paragraph="SUV" image="/cars/All-New-Rush.svg" />
          <Card heading="MG ZX Exclusice" paragraph="Hatchback" image="/cars/MG-ZX-Exclusice.svg" />
          <Card heading="CR  - V" paragraph="SUV" image="/cars/CR-V.svg" />
          <Card heading="New MG ZS" paragraph="SUV" image="/cars/New-MG-ZS.svg" />
          <Card heading="All New Terios" paragraph="SUV" image="/cars/All-New-Terios.svg" />
          <Card heading="MG ZX Excite" paragraph="Hatchback" image="/cars/MG-ZX-Excite.svg" />
          <Card heading="CR  - V" paragraph="SUV" image="/cars/CR-V.svg" />
          <Card heading="New MG ZS" paragraph="SUV" image="/cars/New-MG-ZS.svg" />
        </div>
      </div>
    </>
  );
};

export { RecomendCar };
