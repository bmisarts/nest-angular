import { Exclude, Expose } from 'class-transformer';
import * as moment  from 'moment';


export class User {
  
  @Exclude()
  public id: number; 
  
  @Expose()
  public name: string;
  
  @Expose()
  public email: string;
  
  @Expose()
  public active: boolean;
  
  @Exclude()
  public createdAt: string;
  
  @Expose()
  public updatedAt: string;
  
  @Exclude()
  static instanceCount = 1;
  
  constructor(partial: Partial<User>) {
    this.id = User.instanceCount;
    Object.assign(this, partial);
    this.createdAt = moment().format('yyyy-MM-DD HH:mm');
    this.updatedAt = moment().format('yyyy-MM-DD HH:mm');
    
    User.instanceCount ++;
  }
    
}

