import Image from 'next/image'
import React from 'react'

type Props = {}

const TableRow = (props: Props) => {
  return (
    <tr className="border-b border-blue-50">
        <td className="flex items-center px-6 py-4 font-medium">
            <input className="mr-3" type="checkbox" name="" id=""/>
            <div className="flex px-4 py-3">
            <Image className="object-cover w-8 h-8 mr-4 rounded-md" src="https://images.unsplash.com/photo-1559893088-c0787ebfc084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" width={1050} height={80} alt=""/>
            <div>
                <p className="text-sm font-medium">John Smith</p>
                <p className="text-xs text-gray-500">Freelancer</p>
            </div>
            </div>
        </td>
        <td className="font-medium">
            <p className="text-sm">Example of Project</p>
            <p className="text-xs text-gray-500">New development</p>
        </td>
        <td className="pr-6">
            <p className="mb-1 text-xs font-medium text-indigo-500">65%</p>
            <div className="flex">
            <div className="relative w-48 h-1 rounded-full bg-indigo-50">
                <div className="absolute top-0 left-0 w-2/6 h-full bg-indigo-500 rounded-full"></div>
            </div>
            <a className="ml-auto" href="#">
                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0.333344C7.67037 0.333344 7.34813 0.431092 7.07405 0.614228C6.79997 0.797363 6.58635 1.05766 6.4602 1.36221C6.33406 1.66675 6.30105 2.00186 6.36536 2.32516C6.42967 2.64846 6.5884 2.94543 6.82149 3.17852C7.05458 3.41161 7.35155 3.57034 7.67485 3.63465C7.99815 3.69896 8.33326 3.66596 8.63781 3.53981C8.94235 3.41366 9.20265 3.20004 9.38578 2.92596C9.56892 2.65188 9.66667 2.32965 9.66667 2.00001C9.66667 1.55798 9.49107 1.13406 9.17851 0.821499C8.86595 0.508939 8.44203 0.333344 8 0.333344ZM2.16667 0.333344C1.83703 0.333344 1.5148 0.431092 1.24072 0.614228C0.966635 0.797363 0.753014 1.05766 0.626868 1.36221C0.500722 1.66675 0.467717 2.00186 0.532025 2.32516C0.596334 2.64846 0.755068 2.94543 0.988156 3.17852C1.22124 3.41161 1.51822 3.57034 1.84152 3.63465C2.16482 3.69896 2.49993 3.66596 2.80447 3.53981C3.10902 3.41366 3.36931 3.20004 3.55245 2.92596C3.73559 2.65188 3.83333 2.32965 3.83333 2.00001C3.83333 1.55798 3.65774 1.13406 3.34518 0.821499C3.03262 0.508939 2.6087 0.333344 2.16667 0.333344ZM13.8333 0.333344C13.5037 0.333344 13.1815 0.431092 12.9074 0.614228C12.6333 0.797363 12.4197 1.05766 12.2935 1.36221C12.1674 1.66675 12.1344 2.00186 12.1987 2.32516C12.263 2.64846 12.4217 2.94543 12.6548 3.17852C12.8879 3.41161 13.1849 3.57034 13.5082 3.63465C13.8315 3.69896 14.1666 3.66596 14.4711 3.53981C14.7757 3.41366 15.036 3.20004 15.2191 2.92596C15.4023 2.65188 15.5 2.32965 15.5 2.00001C15.5 1.55798 15.3244 1.13406 15.0118 0.821499C14.6993 0.508939 14.2754 0.333344 13.8333 0.333344Z" fill="#67798E"></path>
                </svg>
            </a>
            </div>
        </td>
        </tr>
  )
}

export default TableRow