import Image from "next/image";
import Button from "../Button";


interface planCardProps {
  title: string;
  features?: Array<string>;
  price: string;
  recommended?: boolean;
}

export default function PlanCard(props: planCardProps) {
  return (
    <div
      className={`w-[25%] bg-[#EFEEEC] p-[30px] rounded-sm flex flex-col gap-4 relative translate-y-[105%] plan-card`}
    data-hosting-plan-animate>
      <h3 className="text-[1.4rem] font-[600]">{props.title}</h3>
      <h4 className="">
        <span className="text-3xl">{props.price}</span>
        <sub className="text-sm text-gray-600">/mo</sub>
      </h4>
      <div className="w-full">
        <Button variant="secondary" title="Select Plan" size="sm" className="w-full"/>
      </div>
      <div className="w-full flex flex-col gap-2">
        {props.features?.map((feature, idx) => (
          <h4 key={idx} className="flex items-center gap-2">
            <Image src="/check.svg" alt="check" height={15} width={15} />
            <span className="text-sm">{feature}</span>
          </h4>
        ))}
      </div>
      {props.recommended && (
        <div className="py-2 px-6 bg-[var(--secondary-color)] w-fit rounded-sm absolute right-0 -top-5">
          <h2 className="text-white">Most Popular</h2>
        </div>
      )}
    </div>
  );
}
