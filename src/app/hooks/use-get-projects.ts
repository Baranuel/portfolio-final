import {  Project } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios/axios-instance";


export const useGetProjects = () => {

    return useQuery<Project[], Error>(
        ['projects'],
        async () => {
          try {
            const res = await axiosInstance.get<Project[]>('projects');
            return res.data.sort();
            
          } catch (e: any) {
            throw new Error(e);
          }
        }
      );

}