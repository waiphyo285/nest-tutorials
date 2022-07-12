import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
    @Field(type => ID)
    id: string;

    @Directive('@upper')
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field()
    creationDate: Date;

    @Field(type => [String])
    ingredient: string[]
}