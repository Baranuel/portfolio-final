
import "react-vertical-timeline-component/style.min.css";
import { MdDesignServices, MdWork } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

export const Timeline = () => {
  return (
   
<VerticalTimeline lineColor="#f4f4f5">
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    iconStyle={{ color: "white", boxShadow:'none' }}
    iconClassName="bg-gradient-to-b from-zinc-400 to-zinc-700  z-10"
    contentArrowStyle={{ borderRight: "10px solid  #3f3f46" }}
    icon={<MdWork />}
    date="2023 - Present"
    intersectionObserverProps={{
        threshold: 0.75,
        triggerOnce: true
    }}
  >
    <div className="min-h-[150px] sm:min-h-[100px] p-4 sm:p-0 rounded-lg ">
        <h1 className="font-semibold text-[20px] sm:text-[16px] text-black"> Web Developer </h1>
        <span className="sm:text-[12px] text-[15px] font-medium text-[#333]/80">Company: Shapegames</span>
        <p className="text-black">Currently employed as a Web developer at Shape Games. Working on CMS part of the Web app called Control Panel. </p>
    </div>
  </VerticalTimelineElement>

  {/* Second Element  */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ color: "#3f3f46", boxShadow:'none' }}
    iconClassName="bg-gradient-to-t from-zinc-100 to-white  z-10"
    contentArrowStyle={{ borderRight: "10px solid  #3f3f46" }}
    date="2023 - 2024"
    icon={<FaUserGraduate />}
    intersectionObserverProps={{
        threshold: 0.75,
        triggerOnce: true

    }}
  >
    <div className="min-h-[150px] sm:min-h-[100px] p-4 sm:p-0 rounded-lg ">
    <h1 className="font-semibold text-[20px] sm:text-[16px] text-black">{` Bachelor's in Web Development`}</h1>
    <p className="text-black">{`Finished a Bachelor's Degree in Web development at CPH Business in Copenhagen Denmark.`}</p>

    </div>
  </VerticalTimelineElement>

  {/* third Element  */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: "10px solid  #3f3f46" }}
    iconStyle={{ color: "#3f3f46", boxShadow:'none' }}
    iconClassName="bg-gradient-to-t from-zinc-100 to-white  z-10"
    icon={<MdDesignServices />}
    date="2021 January - April"
    intersectionObserverProps={{
        threshold: 0.75,
        triggerOnce: true

    }}
  >
    <div className="min-h-[150px] sm:min-h-[100px] p-4 sm:p-0 rounded-lg ">
        <h1 className="font-semibold text-[20px] sm:text-[16px]"> UX/UI Design - Internship</h1>
        <span className="sm:text-[12px] text-[15px] font-medium text-[#333]/80">Company: Human Risks</span>

        <p className="text-black">During internship I was doing UX/UI Design for a security management and risk prevention company called Human Risks </p>

    </div>
  </VerticalTimelineElement>
  
    {/* fourth Element  */}

    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ color: "#3f3f46", boxShadow:'none' }}
    contentArrowStyle={{ borderRight: "10px solid  #3f3f46" }}
    date="2021 - 2023"
    iconClassName="bg-gradient-to-t from-zinc-100 to-white  z-10"
    icon={<FaUserGraduate />}
    intersectionObserverProps={{
        threshold: 0.75,
        triggerOnce: true

    }}
  >
    <div className="min-h-[150px] sm:min-h-[100px] p-4 sm:p-0 rounded-lg ">
        <h1 className="font-semibold text-[20px] sm:text-[16px]">AP -  Multimedia Design</h1>
        <p className="text-black">Finished Academy Profession degree from Multimedia-Design at UCN, Aalborg Denmark </p>

    </div>
  </VerticalTimelineElement>


</VerticalTimeline>
  );
};
