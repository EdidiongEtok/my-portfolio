import { EducationHistory } from "./educationHistory";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { WorkHistory } from "./workHistory";



export interface UserModel{
    firstName:string;
    lastName :string;
    email:string;
    phoneNumber:string;
    address:string;
    workHistory: WorkHistory;
    educationHistory: EducationHistory,
    projects: Projects,
    skills: Skills
    
}