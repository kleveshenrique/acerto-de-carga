// 'use client'

// import { ColumnDef } from '@tanstack/react-table'
// import { ArrowUpDown } from 'lucide-react'
// import { Checkbox } from '@/components/ui/checkbox'

// import { Button } from '@/components/ui/button'
// import React from 'react'

export type Pedido = {
  idPedido: string
  pedido: string
  nf: string
  codigo: string
  cliente: string
  valor: number
  pagamento: string
  vencimento: string
  emissao: string
  status: string
}

// // function handleUpdateColumn(row) {
// //   console.log(row.original)
// // }

// export const columns: ColumnDef<Pedido>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && 'indeterminate')
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: 'pedido',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Pedido
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'nf',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           NF
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'codigo',
//     header: 'Codigo',
//   },
//   {
//     accessorKey: 'cliente',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//           className="text-center px-20"
//         >
//           Cliente
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'valor',
//     header: () => <div className="text-center">Valor</div>,
//     cell: ({ row }) => {
//       const valor = parseFloat(row.getValue('valor'))
//       const formatted = new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//       }).format(valor)

//       return <div className="text-center font-medium">{formatted}</div>
//     },
//   },
//   {
//     accessorKey: 'pagamento',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Pagamento
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'vencimento',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Vencimento
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'emissao',
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
//         >
//           Emissão
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//   },
//   {
//     accessorKey: 'status',
//     header: 'Status',
//   },
// ]
