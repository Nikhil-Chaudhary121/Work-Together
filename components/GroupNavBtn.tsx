const GroupNavBtn = ({
  text,
  isActive = false,
}: {
  text: string;
  isActive: boolean;
}) => {
  return isActive ? (
    <div>
      <h1 className="cursor-pointer md:text-lg sm:text-md text-sm font-semibold border-b-[3px] border-[#FE484C] text-[#FE484C] ">
        {text}
      </h1>
    </div>
  ) : (
    <div>
      <h1 className="cursor-pointer font-medium md:text-md sm:text-sm text-xs text-[#8B8F9A]">
        {text}
      </h1>
    </div>
  );
};

export default GroupNavBtn;
