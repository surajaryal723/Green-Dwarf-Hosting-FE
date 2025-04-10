import Image from "next/image";

interface props{
    icon:string,
    title:string,
    description:string
}
export default function BenefitCard(props:props) {
  return (
    <div
      className="benefit-card w-1/3 bg-white p-[30px] rounded-sm flex flex-col gap-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <div className="">
        <Image src={props.icon} alt="bolt" height={50} width={50} />
      </div>
      <h2 className="text-2xl">
        {props.title}
      </h2>
      <p>
      {props.description}
      </p>
    </div>
  );
}
