
import { ProjectList } from "./ProjectList";
import { axiosInstance } from "@/app/axios/axios-instance";
import { Prisma, Project } from "@prisma/client";

type ProjectWithObjectives = Prisma.ProjectGetPayload<{
  include: { objectives: true }
}>


const getProjects = async () => {
  const res = await axiosInstance.get<ProjectWithObjectives[]>("projects");
  return res.data;
}
export const revalidate = 0


export const WorkSection = async () => {
  const data = await getProjects()
  return (
    <section id='Work' className="w-full relative min-h-[500px] h-fit py-[100px]  flex flex-col gap-3 items-center justify-start">
      <span className="tracking-[.25rem] whitespace-nowrap self-center text-center  w-full sm:text-decorText text-xs  font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-violet-700 to-red-800">
        BUILDING PROJECTS
      </span>
      <h1 className="text-sectionTitle leading-[3rem]  font-bold text-transparent bg-clip-text bg-gradient-to-b from-primaryGrey/70 from-30% 2xl:from-40% via-primaryBlack/80 via-70% to-primaryBlack/80 to-90%">
        Work
      </h1>
      <p className="text-sectionSubtitle sm:text-[16px] text-primaryGrey/80 text-center">
        The Work I have done besides my school projects
      </p>
      <div className=" relative z-10 w-full  max-w-[1500px] mt-6  px-24 2xl:px-10 xl:px-4 sm:px-0  flex flex-col items-center justify-center ">
        <ProjectList projects={data} />
      </div>
    </section>
  );
};
