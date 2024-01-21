import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  @ApiProperty()
  firstName: string;

  @Column()
  @ApiProperty()
  lastName: string;

  @Column()
  @ApiProperty()
  age: string;

  @Column()
  @ApiProperty()
  dob: string;
}
