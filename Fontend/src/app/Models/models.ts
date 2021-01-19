export class Seat {
  Id: number;
  occupied: boolean;
  booked: boolean = false;
}

export class Register {
  email: string;
  password: string;
  confirmPassword: string;
  constructor(args: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    this.email = args.email;
    this.password = args.password;
    this.confirmPassword = args.confirmPassword;
  }
}

export class Login {
  email: string;
  password: string;
  role:string;
  constructor(args: { email: string; password: string; role:string }) {
    this.email = args.email;
    this.password = args.password;
    this.role = args.role;
  }
}

export class Movie {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  description: string;
  language: string;
  duration: number;
  rating: number;
  fromTime:Date = new Date();
  toTime:Date = new Date();
}

export class Theatre {
  id: number;
  theaterName: string;
}

export class Ticket {
  ticketId: number;
  imageUrl:string;
  movieTitle:string;
  seatId:string;
  theaterName:string;
}

export class UserCredModel{
  userName:string;
  password:string;
}

export class PassChangeModel{
  userName:string;
  currentPass:string;
  newPass:string;
}