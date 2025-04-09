import Image from "next/image";

interface testimonial{
    name:string,
    testimonial:string
}
export default function TestimonialCard(props:testimonial) {
  return (
    <div className="testimonial-card w-1/4 p-[30px] rounded-sm bg-white  flex flex-col gap-2">
        <Image src={"/quote.svg"} alt="svg" height={30} width={30}/>
      <p className="text-md">
      {props.testimonial}
      </p>
      <h4 className="text-lg"><span>{props.name}</span></h4>
    </div>
  );
}
