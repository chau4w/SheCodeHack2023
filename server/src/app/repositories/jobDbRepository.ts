import { JobRepositoryMongoDB } from "../../frameworks/database/mongoDb/repositories/jobRepositoryMongoDB";
import { JobInterface } from "../../types/jobInterface";

export const jobDbRepository = (
  repository: ReturnType<JobRepositoryMongoDB>
) => {
  const createJob = async (job: JobInterface) => {
    const newJob = await repository.createJob(job);
    return newJob;
  };

  const updateJob = async (jobId: string, update: Partial<JobInterface>) => {
    const updatedJob = await repository.updateJob(jobId, update);
    return updatedJob;
  };

  const deleteJob = async (jobId: string) => {
    await repository.deleteJob(jobId);
  };

  const findJobByCofounder = async (cofounderId: string) => {
    const jobs = await repository.findJobByCofounder(cofounderId);
    return jobs;
  };

  const findAllJobs = async () => {
    const allJobs = await repository.findAllJobs();
    return allJobs;
  };

  const getJobById = async (id: string) => {
    const jobData = await repository.findJobById(id);
    return jobData;
  };

  const titleLocationSalary = async (title: string) => {
    const distinct = await repository.titlePlaceSalary(title);
    return distinct;
  };

  const filterJob = async (role: string, location: string, topic: string) => {
    const jobs = await repository.filterJobs(role, location, topic);
    return jobs;
  };

  return {
    createJob,
    updateJob,
    deleteJob,
    findJobByCofounder,
    findAllJobs,
    getJobById,
    titleLocationSalary,
    filterJob,
  };
};

export type JobDbInterface = typeof jobDbRepository;
