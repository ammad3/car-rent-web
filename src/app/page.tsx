import { CardHero } from "./components/Card";
import { RadioNav } from "./components/Radionav";
import { Button2, Button } from "./components/Button";
import { PopularCar } from "./components/Popularcar";
import { RecomendCar } from "./components/Recomendcar";
export default function Home() {
  return (
    <div className="bg-[#F6F7F9] w-[1440px] h-[2724px] relative">
      <div className="absolute top-8 left-16 ">
        <CardHero
          heading="The Best Platform for Car Rental"
          paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
          image="/cars/Koenigsegg.svg"
          bgImage="/background/pickup_bg.png"
          color="#54A6FF"
          buttonColor="bg-[#3563E9]"
          imgTop="top-[234px]"
          imgLeft="left-[137px]"
          imgWidth={406}
          imgHeight={116}
        />
      </div>
      <div className="absolute top-8 left-[736px]">
        <CardHero
          heading="Easy way to rent a car at a low price"
          paragraph="Providing cheap car rental services and safe and comfortable facilities."
          image="/cars/NissanGT-R.svg"
          bgImage="/background/dropoff_bg.png"
          color="#3563E9"
          buttonColor="bg-[#54A6FF]"
          imgTop="top-[232px]"
          imgLeft="left-[167px]"
          imgWidth={340}
          imgHeight={108}
        />
      </div>

      {/* Radio Nav */}
      <div className="flex absolute left-16 gap-12 justify-between top-[424px]">
        <RadioNav label="Pick-up" />
      </div>
      <div className="flex absolute top-[502px] left-[690px] gap-12 justify-between px-0 py-0 m-0 ">
      <Button2
        bgcolor="bg-[#3563E9]"
        positionLeft=" left-[690px] top-[520px]"
      />

      </div>
      <div className="flex absolute left-[49.625rem] gap-12 justify-between top-[26.5rem]">
        <RadioNav label="Drop-Off" />
      </div>

      {/* cars grid */}
      <div className="absolute flex flex-col gap-8 left-16 top-[592px]">
        <PopularCar />
        <RecomendCar />
      </div>
      <div className="absolute flex top-[2012px] left-[642px] gap-[438px] w-[734px] h-[44px]">
        <Button
          text="Show more car"
          textColor="text-[#ffffff]"
          bgcolor="bg-[#3563E9]"
        />

        <div className="text-[black] w-[140px] h-[24px] font-medium text-[16px] leading-[21px] tracking-[-2%]">
          120 Car
        </div>
      </div>
    </div>
  );
}
