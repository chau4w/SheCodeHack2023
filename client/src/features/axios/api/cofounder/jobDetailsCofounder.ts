import { AxiosRequestConfig } from "axios";
import apiConfig from "../../../../utils/apiConfig";
import setupAxiosInterceptorsCofounder from "../../interceptors/axiosInterceptorCofounder";

const api = setupAxiosInterceptorsCofounder();

export const jobDetailsCofounder = async (jobId: string): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: `${apiConfig.jobData}/${jobId}`,
      method: "get",
    };
    const response = await api(config);
    return response?.data.jobData;
  } catch (error) {
    throw new Error("error while getting job data");
  }
};

export const allJobsCofounder = async (): Promise<any> => {
  try {
    const config: AxiosRequestConfig = {
      url: apiConfig.allJobs,
      method: "get",
    };
    const response = await api(config);
    return response?.data;
  } catch (error) {
    throw new Error("error while getting all jobs");
  }
};
