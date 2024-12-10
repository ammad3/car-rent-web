import { Button } from "./Button";
import Image from "next/image";

interface ICardProps {
  heading: string;
  paragraph: string;
  color?: string;
  image: string;
}

export const Card = (props: ICardProps) => {
  const { heading, paragraph, image } = props;
  return (
    <>
      <div className="text-black relative flex flex-col justify-center bg-white w-[304px] h-[388px] rounded-[10px]">
        <div className="flex justify-between">
          <div className="absolute flex flex-col gap-1 top-6 left-6">
            <h1 className="text-[#1A202C] font-bold text-xl tracking-[-3%]">
              {heading}
            </h1>
            <p className="text-[#90A3BF] font-bold text-sm">{paragraph}</p>
          </div>
          <div className="flex absolute top-[24px] left-[256px] ">
            <Image
              className="h-4 w-4"
              src="/icon/heart.svg"
              alt="Product Image"
              width={16} // Set the width of the image
              height={16} // Set the height of the image
            />
          </div>
        </div>
        <div className="absolute top-[136px] left-[36px]">
            <Image
              src={image}
              alt="Product Image"
              width={232}
              height={72}
              
            />
        </div>
        <div className="absolute top-[270px] left-6">
          <ul className="flex text-[#90A3BF] gap-4 w-64 h-6 ">
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
              <Image
                src="/icon/gas-station.svg"
                alt="Product Image"
                width={24} // Set the width of the image
                height={24} // Set the height of the image
              />
              90L
            </li>
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
            <Image
                  src="/icon/car.svg"
                  alt="Product Image"
                  width={24} // Set the width of the image
                  height={24} // Set the height of the image
                />
              Manual
            </li>
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
              <Image
                src="/icon/profile-2user.svg"
                alt="Product Image"
                width={24} // Set the width of the image
                height={24} // Set the height of the image
              />
      
              2 People
            </li>
          </ul>
        </div>
        <div className="absolute top-[320px] left-6 flex items-center gap-4">
          <span className="text-[#1A202C] font-bold text-xl leading-[21px] tracking-[-2%] ">
            $99.00/
            <span className="text-[#90A3BF] font-bold text-xl leading-[21px] tracking-[-2%] ">
              day
            </span>
          </span>
          <Button
          text="Rent Now"
          textColor="text-[#ffffff]"
          bgcolor="bg-[#3563E9]"
          btnWidth="w-[116px]"
          btnHeight="h-[44px]"
        />
        </div>

      </div>
    </>
  );
};

interface ICardHeroProps {
  heading: string;
  paragraph: string;
  color?: string;
  image: string;
  bgImage: string;
  positionLeft?: string;
  positionTop?: string;
  buttonColor?: string;
  imgTop?: string;
  imgLeft?: string;
  imgWidth?: number;
  imgHeight?: number;
}

export const CardHero = (props: ICardHeroProps) => {
  const {
    heading,
    paragraph,
    color,
    image,
    bgImage,
    buttonColor,
    imgTop,
    imgLeft,
    imgWidth,
    imgHeight,
  } = props;

  return (
    <div
      className={`text-white relative w-[640px] h-[360px] rounded-[10px] flex flex-col`}
      style={{
        background: `${color} url(${bgImage}) no-repeat center/contain`,
      }}
    >
      {/* Content Section */}
      <div className="absolute flex flex-col gap-[20px] w-[284px] h-[224px] top-6 left-6">
        <div className="w-[284px] h-[160px]">
          <h1 className="font-semibold text-[32px] leading-[48px] tracking-[-3%]">
            {heading}
          </h1>
          <p className="font-medium text-[16px] leading-[24px] tracking-[-2%]">
            {paragraph}
          </p>
        </div>
        <Button
          text="Rent Now"
          bgcolor={buttonColor}
          textColor="text-[#ffffff]"
          btnWidth="w-[116px]"
          btnHeight="h-[44px]"
        />
      </div>

      {/* Image Section */} 
      <div>
        <Image
          className={`absolute ${imgTop} ${imgLeft}`}
          src={image}
          alt="Car"
          width={imgWidth}
          height={imgHeight}
        />
      </div>
    </div>
  );
};
