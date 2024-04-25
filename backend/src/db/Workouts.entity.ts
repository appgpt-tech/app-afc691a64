//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Workouts')
export class WorkoutsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  workoutId: number;

  @Column('integer', { nullable: true })
  customerId: number;

  @Column('text', { nullable: true })
  type: string;

  @Column('real', { nullable: true })
  duration: number;

  @Column('text', { nullable: true })
  intensity: string;

  @Column('real', { nullable: true })
  caloriesBurned: number;

  @Column('date', { nullable: true })
  date: Date;
}