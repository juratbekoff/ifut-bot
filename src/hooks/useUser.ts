import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { userService } from "@/services/api/user";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: [queryKeys.GET_USER_INFO],
    queryFn: () => {
      return userService.getInfo();
    },
  });
};
