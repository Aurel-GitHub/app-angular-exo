export class Technology {
        id: number | null;
        technoName: string;
        technoCategory: string;
        details: string;
        
        constructor(
            id: number | null,
            technoName: string,
            technoCategory: string,
            details: string,
        ){
            this.id = id;
            this.technoName = technoName;
            this.technoCategory = technoCategory;
            this.details = details; 
        }
}