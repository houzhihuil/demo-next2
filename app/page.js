import React from 'react';
import Link from 'next/link'; 

async function getData() {
  const res = await fetch('https://64e7bf5db0fd9648b7904d83.mockapi.io/fakeData');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

 
export default async function Page() {
  const data = await getData();
    
  return (
    <div>
    
    {data.map((item) => (
              <ul key={item.id}>
                <li>{item.id} {item.firstName} {item.lastName} {item.checkbox ? 'Checked' : 'Unchecked'} 
                <Link href={`/${item.id}`}>Update</Link>
           
                </li> 
              </ul>
            ))}
    </div>
  );
}
