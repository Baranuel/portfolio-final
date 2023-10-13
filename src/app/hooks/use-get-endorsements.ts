import { useQuery } from "@tanstack/react-query";
import { Endorsement  } from "@prisma/client";
import { axiosInstance } from "../axios/axios-instance";




export const useGetEndorsements = () => {

    return useQuery<Endorsement[], Error>(
        ['endorsement'],
        async () => {
          try {
            const res = await axiosInstance.get<Endorsement[]>('endorsement');
            return res.data.sort();
            
          } catch (e: any) {
            throw new Error(e);
          }
        }
      );

}