import { Card } from "./Card";

const RecomendCar = () => {
  return (
    <>
      <div className="container relative sm:w-[1312px] sm:h-[872px] flex flex-col gap-5">
        <div className="flex gap-8 rounded-[4px] px-5 ">
          <div className="w-[196px] h-[44px] text-[#90A3BF]">Recomendation Car</div>
        </div>
        <div className="sm:grid flex-col gap-5 grid-cols-4 grid-rows-2 sm:gap-8 h-auto sm:w-[1312px]">
          <Card heading="All New Rush" paragraph="SUV" image="/cars/All-New-Rush.svg" />
          {/* <Card heading="MG ZX Exclusice" paragraph="Hatchback" image="/cars/MG-ZX-Exclusice.svg" />
          <Card heading="CR  - V" paragraph="SUV" image="/cars/CR-V.svg" />
          <Card heading="New MG ZS" paragraph="SUV" image="/cars/New-MG-ZS.svg" />
          <Card heading="All New Terios" paragraph="SUV" image="/cars/All-New-Terios.svg" />
          <Card heading="MG ZX Excite" paragraph="Hatchback" image="/cars/MG-ZX-Excite.svg" />
          <Card heading="CR  - V" paragraph="SUV" image="/cars/CR-V.svg" />
          <Card heading="New MG ZS" paragraph="SUV" image="/cars/New-MG-ZS.svg" /> */}
        </div>
      </div>
    </>
  );
};

export { RecomendCar };
