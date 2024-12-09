import Image from "next/image";

interface IButtonProps {
    text?: string;
    bgcolor?: string;
    textColor?: string;
  }
  
  const Button = (props: IButtonProps) => {
    const { text, bgcolor, textColor } = props;
    
    return (
      <button className={`${bgcolor} ${textColor} w-[116px] h-[44px] px-5 rounded-[4px]  transition-all duration-200`}>
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
      <button className={`${bgcolor} ${positionLeft} w-[60px] h-[60px] px-5 rounded-[4px]  transition-all duration-200`}>
        <Image
           src="/icon/Swap.svg"
            alt="swap image"
            width={24}
            height={24}

             />
      </button>
    );
  };
  

  
  export { Button , Button2};