import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  title: string;

  @Column()
  @ApiProperty()
  description: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
