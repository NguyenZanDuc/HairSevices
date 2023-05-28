"use client"
import { HairStyle, hairStyleSchema } from '@/core/Validator/Validator';
import React, { useEffect, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CreateHairStyle from '@/core/useCase/hairStyles/Command/CreateHairStyle';
import { useRouter } from 'next/navigation';
import useImages from '@/hooks/useImages';

type Props = {}

const CreateHairStyleModal = (props: Props) => {
    let [isPending, startTransition] = useTransition();
    const route = useRouter()
    const {image, imageName, handleChangeImage, uploadImage} = useImages();
    const {register,setValue,  formState:{errors},handleSubmit} = useForm<HairStyle>({
        resolver: yupResolver(hairStyleSchema)
    })
    const onSubmit = (data: HairStyle) => {
        startTransition(() => {
            CreateHairStyle(data)
        })
        uploadImage()
        route.push('/admin/hairStyle')

    }
    useEffect(() => {
        if(image){
            setValue('image', imageName)
        }
    }, [image])
    
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center w-full h-full p-4 overflow-y-auto bg-gray-800 bg-opacity-80">
        <div className="w-full max-w-xl px-6 pt-6 pb-8 mx-auto bg-white rounded-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
                <h1 className="text-2xl font-bold mb-4">Add a new hair style</h1>
                <label className="block mb-4">
                <span className="text-gray-700 font-bold">Name:</span>
                <input type="text" {...register("name")} className="form-input mt-1 block w-full rounded-md  border-[2px] p-2 border-gray-500" />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-bold">Time:</span>
                <select {...register("time")} className="form-select mt-1 block w-full rounded-md border-[2px] p-2 border-gray-500">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                </select>
                {errors.time && <span className="text-red-500 text-sm">{errors.time.message}</span>}
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-bold">Price:</span>
                <input type="number" defaultValue={50000} {...register("price")} className="form-input mt-1 block w-full rounded-md  border-[2px] p-2 border-gray-500" />
                {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-bold">Image: {imageName}</span>
                <input type="file"  onChange={handleChangeImage} className="form-input mt-1 block w-full rounded-md  border-[2px] p-2 border-gray-500" />
                {errors.image && <span className="text-red-500 text-sm">{errors.image.message}</span>}
                </label>
                <label className="block mb-4">
                <span className="text-gray-700 font-bold">Description:</span>
                <textarea {...register("description")} className="form-textarea mt-1 block w-full rounded-md border-[2px] p-2 border-gray-500"></textarea>
                {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </form>
        </div>
        </div>
  )
}

export default CreateHairStyleModal