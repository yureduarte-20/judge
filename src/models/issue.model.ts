import {Entity, hasMany, model, property} from '@loopback/repository';
import {Submission} from './submission.model';

@model({
  settings: {
    allowExtendedOperators: true,
  },
})
export class Issue extends Entity {
  @property({
    type: 'String',
    id: true,
    defaultFn: 'uuid',
    postgresql: {
      columnName: 'id',
      dataType: 'uuid',

    },
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'title',
      dataLength: 20,
      dataScale: 0,
      nullable: 'NO',
    },
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  expectedOutput: string;
  /* @property({
    type: ['string'],
    columnName: 'args',
    postgresql: {
      dataType: 'varchar[]',
    },
  }) */
  @property.array(String)
  args?: string[];

  @property({
    required: true,
    type: 'string',
    postgresql: {
      columnName: 'dificulty_level',
      dataType: 'VARCHAR',
      dataLength: 20
    },
  })
  dificultyLevel: string;

  @hasMany(() => Submission, {name: 'submissions'})
  submissions?: Submission[]
  constructor(data?: Partial<Issue>) {
    super(data);
  }
}

export interface IssueRelations {
  // describe navigational properties here
}

export type IssueWithRelations = Issue & IssueRelations;
