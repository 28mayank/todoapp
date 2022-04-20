export class Todos {

  id: number;
  description: string;
  targetDate: Date;
  status: boolean;

  constructor(id: number, description: string, targetDate: Date, status: boolean) {
    this.id = id;
    this.description = description;
    this.targetDate = targetDate;
    this.status = status;
  }
}
