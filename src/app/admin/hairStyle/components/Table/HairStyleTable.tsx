import React from 'react'
import TableRow from './TableRow'

type Props = {}

const HairStyleTable = (props: Props) => {
  return (
    <table className="w-full table-auto">
    <thead className="bg-gray-50">
        <tr className="text-xs text-left text-gray-500">
        <th className="flex items-center py-4 pl-6 font-medium">
            <input className="mr-3" type="checkbox" name="" id=""/>
            <span>Information</span>
        </th>
        <th className="py-4 font-medium">Project Name</th>
        <th className="py-4 font-medium">Progress</th>
        </tr>
    </thead>
    <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
    </tbody>
    </table>
  )
}

export default HairStyleTable