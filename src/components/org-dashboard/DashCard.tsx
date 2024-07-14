import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  Icon: LucideIcon;
  subValue: string;
  value: string;
  percentage?: number;
  desc: string;
  date?: string;
};

const DashCard = ({
  title,
  subValue,
  Icon,
  value,
  percentage,
  desc,
}: Props) => {
  return (
    <div className="w-80 h-32 bg-white rounded-lg shadow border border-main-500/opacity-20 p-3">
      <div className="flex justify-between">
        <p className="text-main-800 text-xl font-semibold">{title}</p>
        <Icon className="text-main-800" />
      </div>
      <p className="text-main-800 text-3xl font-semibold mt-3">
        <span className="text-main-500 text-xl font-semibold">{subValue}</span>
        {value}
      </p>
      <p className="text-main-300 text-base font-semibold ">
        {percentage}%{desc}
      </p>
    </div>
  );
};

export default DashCard;
