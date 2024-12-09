import Image from "next/image";
import { Card, CardHero } from "./components/Card";
import { RadioNav } from "./components/Radionav";
import { Button2 } from "./components/Button";

export default function Home() {
  return (
    <div className="bg-[#F6F7F9] w-[1440px] h-[2724px] relative top-[124px]">
      <div className="relative flex justify-around">
        <CardHero
          heading="The Best Platform for Car Rental"
          paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
          image="/car.svg"
          bgImage="/background/pickup_bg.png"
          positionTop="top-[32px]"
          // positionLeft="left-[64px]"
          color="#54A6FF"
          buttonColor="bg-[#3563E9]"
        />
        <CardHero
          heading="Easy way to rent a car at a low price"
          paragraph="Providing cheap car rental services and safe and comfortable facilities."
          image="/NissanGT-R.svg"
          bgImage="/background/dropoff_bg.png"
          positionTop="top-[32px]"
          // positionLeft="left-[736px]"
          color="#3563E9"
          buttonColor="bg-[#54A6FF]"
        />
      </div>
      <div className="flex absolute">
      <RadioNav
        label="Pick-up"
        />
      <Button2 
        bgcolor="bg-[#3563E9]"
        positionLeft=" left-[690px] top-[520px]" />
      <RadioNav 
      label="Drop-Off"
      />
      </div>
      
      <Card heading="Koenigsegg" paragraph="Sport" image="" />
    </div>
  );
}
