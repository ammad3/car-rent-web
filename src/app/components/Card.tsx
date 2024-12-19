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
      <div className="text-black relative flex flex-col justify-center bg-white w-[327px] h-[240px] sm:w-[304px] sm:h-[388px] rounded-[10px]">
        <div className="flex justify-between">
          <div className="absolute flex flex-col gap-1 top-4 sm:top-6 left-4 sm:left-6">
            <h1 className="text-[#1A202C] font-bold text-xl tracking-[-3%]">
              {heading}
            </h1>
            <p className="text-[#90A3BF] font-bold text-sm">{paragraph}</p>
          </div>
          <div className="flex absolute top-[18px] sm:top-[24px] left-[295px] sm:left-[256px] ">
            <Image
              className="h-4 w-4"
              src="/icon/heart.svg"
              alt="Product Image"
              width={16} // Set the width of the image
              height={16} // Set the height of the image
            />
          </div>
        </div>
        <div className="absolute top-[86px] left-10 sm:top-[136px] sm:left-[36px]">
            <Image
              src={image}
              alt="Product Image"
              width={232}
              height={72}
              className="w-[142px] h-16 sm:w-[232px] sm:h-[72px]"
            />
        </div>
        <div className="absolute sm:top-[270px] top-[66px] sm:left-6 left-[241px]">
          <ul className="flex sm:flex-row flex-col text-[#90A3BF] gap-4 sm:w-64 w-[70px] h-[74px] sm:h-6 ">
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
              <Image
                src="/icon/gas-station.svg"
                alt="Product Image"
                width={24} // Set the width of the image
                height={24} // Set the height of the image
                className="w-[14px] h-[14px] sm:w-6 sm:h-6"
              />
              90L
            </li>
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
            <Image
                  src="/icon/manual.svg"
                  alt="Product Image"
                  width={24} // Set the width of the image
                  height={24} // Set the height of the image
                  className="w-[14px] h-[14px] sm:w-6 sm:h-6"
                />
              Manual
            </li>
            <li className="flex items-center font-medium text-sm leading-[21px] tracking-[-2%]">
              <Image
                src="/icon/profile-2user.svg"
                alt="Product Image"
                width={24} // Set the width of the image
                height={24} // Set the height of the image
                className="w-[14px] h-[14px] sm:w-6 sm:h-6"
              />
      
              2 People
            </li>
          </ul>
        </div>
        <div className="absolute top-[184px] sm:top-[320px] left-[16px] sm:left-6 flex flex-col gap-4">
          <span className="text-[#1A202C] font-bold text-xl leading-[21px] tracking-[-2%] ">
            $99.00/
            <span className="text-[#90A3BF] font-bold text-xl leading-[21px] tracking-[-2%] ">
              day
            </span>
          </span>
          <span className="hidden text-[#90A3BF] font-bold text-xl leading-[21px] tracking-[-2%]">
          $80.00
          </span>
        </div>
          <div className="absolute top-[188px] left-[211px] sm:top-[320px] sm:left-[164px]">
          <Button
          text="Rent Now"
          textColor="text-[#ffffff]"
          bgcolor="bg-[#3563E9]"
          btnWidth="sm:w-[116px] w-[100px]"
          btnHeight="sm:h-[44px] h-[36px]"
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
      className={`text-white relative w-[327px] h-[232px] sm:w-[640px] sm:h-[360px] rounded-[10px] flex flex-col`}
      style={{
        background: `${color} url(${bgImage}) no-repeat center/contain`,
      }}
    >
      {/* Content Section */}
      <div className="absolute flex flex-col sm:gap-[20px] w-60 h-[70px] sm:w-[284px] sm:h-[224px] top-4 left-4 sm:top-6 sm:left-6">
        <div className="w-[284px] h-[160px]">
          <h1 className="font-semibold text-base sm:text-[32px] leading-6 sm:leading-[48px] tracking-[-2%] sm:tracking-[-3%]">
            {heading}
          </h1>
          <p className="font-medium text-xs sm:text-[16px] leading-[19.2px] sm:leading-[24px] sm:tracking-[-2%]">
            {paragraph}
          </p>
        </div>
        <div className="absolute top-[102px] left-4 sm:relative sm:top-0 sm:left-0">
          <Button
            text="Rent Now"
            bgcolor={buttonColor}
            textColor="text-[#ffffff]"
            btnWidth="sm:w-[120px] w-[128px]"
            btnHeight="sm:h-[44px] h-[44px]"
            />
        </div>
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
