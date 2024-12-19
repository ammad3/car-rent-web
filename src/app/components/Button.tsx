import Image from "next/image";

interface IButtonProps {
  text: string;
  bgcolor?: string;
  textColor?: string;
  btnWidth?: string;
  btnHeight?: string;
}

const Button = (props: IButtonProps) => {
  const { text, bgcolor, textColor, btnWidth, btnHeight } = props;

  return (
    <button
      className={`${bgcolor} ${textColor} ${btnWidth} ${btnHeight} px-5 rounded-[4px] font-semibold text-xs sm:text-[16px] leading-6 tracking-[-2%] text-center transition-all duration-200`}
    >
      {text}
    </button>
  );
};

interface IButton2Props {
  positionLeft: string;
  bgcolor?: string;
  textColor?: string;
}

const Button2 = (props: IButton2Props) => {
  const { positionLeft, bgcolor } = props;

  return (
    <button
      className={`${bgcolor} ${positionLeft} w-[60px] h-[60px] px-5 rounded-[4px]  transition-all duration-200`}
    >
      <Image src="/icon/Swap.svg" alt="swap image" width={24} height={24} />
    </button>
  );
};

const Button3 = (props: IButton2Props) => {
  const { positionLeft, bgcolor } = props;

  return (
    <button
      className={`${bgcolor} ${positionLeft} w-[48px] h-[48px] px-3  rounded-[10px] border border-[#C3D4E966] transition-all duration-200`}
    >
      <Image src="/icon/filter.svg" alt="filter image" width={24} height={24} />
    </button>
  );
};

export { Button, Button2, Button3 };
