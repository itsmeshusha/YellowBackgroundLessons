import React, {useState} from 'react';
import {Rating, RatingValueType} from '../components/Rating'
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={action('clicked')} />
export const Rating1Stars = () => <Rating value={1} onClick={action('clicked')} />
export const Rating2Stars = () => <Rating value={2} onClick={action('clicked')} />
export const Rating3Stars = () => <Rating value={3} onClick={action('clicked')} />
export const Rating4Stars = () => <Rating value={4} onClick={action('clicked')} />
export const Rating5Stars = () => <Rating value={5} onClick={action('clicked')} />
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={setRating} />
}

