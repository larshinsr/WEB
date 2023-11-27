export class Task {
    constructor(
        public id: number|null|undefined,
        public description: string,
        public userEmail: string,
        public deadline: Date,
        public completed: boolean
      ) {}
}
  