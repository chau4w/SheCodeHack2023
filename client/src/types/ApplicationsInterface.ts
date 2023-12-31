import { UserInterface } from "./UserInterface";

export default interface ApplicationDetails {
  _id: string;
  userId: UserInterface;
  cofounderId: string;
  applicationStatus: string;
  createdAt: Date;
  jobId: {
    _id: string;
    title: string;
  };
}
