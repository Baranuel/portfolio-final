
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios-instance";
import { ProjectWithObjectives } from "../../../prisma/types";


export const useGetProjects = () => {

    return useQuery<ProjectWithObjectives[]>(
        ['projects'],
        async () => {
          try {
            const res = await axiosInstance.get<ProjectWithObjectives[]>('projects');
            return res.data.sort();
            
          } catch (e: any) {
            throw new Error(e);
          }
        }
      );

}