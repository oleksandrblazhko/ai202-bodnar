import { Prop, Schema } from "@nestjs/mongoose";

@Schema()
class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  refreshToken: string;
}

@Schema()
class Course {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  keyWords: string[];

  @Prop()
  price: number;
}
