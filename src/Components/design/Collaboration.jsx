import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute top-[65%] translate-x-14 right-0 w-[10.125rem] -mt-1 ml-10 pointer-events-none 2xl:block">
      <img src={curve2} width={170} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-[65%] translate-x-[35%] right-0 w-[32.625rem] -mt-1 mr-10 pointer-events-none 2xl:block">
      <img src={curve1} width={530} height={182} alt="Curve 1"/>
    </div>
  );
};
