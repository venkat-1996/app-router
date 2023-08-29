import Hero from '@/components/hero'
import React from 'react'

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export const revalidate = 60;

async function DynamicParams({ id }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await res.json()

    return (
        <Hero data={data} />
    )
}

export default DynamicParams