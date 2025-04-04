import React, { FC } from 'react'
import FormAirplane from '../components/form-airplane';
import type { Metadata } from 'next';

/* interface CreateAirplanePageProps {
  
} */

export const metadata: Metadata = {
    title: 'Dashboard | Create data airplanes'
}

const CreateAirplanePage: FC = ({  }) => {
    return (
      <div>
        <div className='flex flex-row items-center justify-between'>
            <div className="my-5 text-2xl font-bold">Tambah data Airplane</div>
        </div>
        <FormAirplane type='ADD'/>
      </div>
  )
}

export default CreateAirplanePage;