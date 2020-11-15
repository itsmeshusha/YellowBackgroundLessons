import React from 'react';
import { UncontrolledRating} from "../components/UncontrolledRating";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
}

export const EmptyStars = () => <UncontrolledRating defaultValue={0}  />
export const Rating1Stars = () => <UncontrolledRating defaultValue={1}  />
export const Rating2Stars = () => <UncontrolledRating defaultValue={2}  />
export const Rating3Stars = () => <UncontrolledRating defaultValue={3}  />
export const Rating4Stars = () => <UncontrolledRating defaultValue={4}  />
export const Rating5Stars = () => <UncontrolledRating defaultValue={5}  />


