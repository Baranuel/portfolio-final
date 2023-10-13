import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Endorsement } from '@prisma/client';
import { axiosInstance } from "../axios/axios-instance";



export const useUpdateEndorsementMutation = () => {
    const queryClient = useQueryClient();

   return useMutation(
        async (item: Endorsement) => {
          const res = await axiosInstance.put(`endorsement`, {
            id: item.id,
          });
          return res.data;
        },
        {
          onMutate: async (item: Endorsement) => {
            const newId = item.id;
            await queryClient.cancelQueries(["endorsement"]);
            const previousData = queryClient.getQueryData(["endorsement"]);
    
            queryClient.setQueryData(["endorsement"], (oldData: any) => {
              return oldData.map((item: any) => {
                if (item.id === newId) {
                  return {
                    ...item,
                    amount: item.amount + 1,
                  };
                }
                return item;
              });
            });
    
            return { previousData };
          },
    
          onError: (err, newId, context: any) => {
            queryClient.setQueryData(["endorsement"], context.previousData);
          },
          // Always refetch after error or success:
          onSettled: () => {

          },
        }
      );

}