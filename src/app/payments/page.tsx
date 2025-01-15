'use client'

import { useEffect, useState } from 'react'
import { Pedido } from './columns'
import { DataTable } from './data-table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'

import { ArrowUpDown } from 'lucide-react'

import { CardPay } from '@/app/components/CardPay'
import NumberFormat from '../utils/NumberFormat'

function getData(): Pedido[] {
  // Fetch data from your API here.
  return [
    {
      idPedido: '1',
      pedido: '1111',
      nf: '2020',
      codigo: '12354',
      cliente: 'KLEVES HENRIQUE AGUIAR',
      valor: 1250.35,
      pagamento: 'BOLETO',
      vencimento: '13/08/2024',
      emissao: '13/07/2024',
      status: 'pending',
    },
    {
      idPedido: '2',
      pedido: '1254',
      nf: '2255',
      codigo: '123',
      cliente: 'F M FREITAS',
      valor: 2250,
      pagamento: 'PIX',
      vencimento: '01/08/2024',
      emissao: '01/07/2024',
      status: 'pending',
    },
    {
      idPedido: '3',
      pedido: '6548',
      nf: '3255',
      codigo: '123',
      cliente: 'DEUSELI PEREIRA',
      valor: 3350,
      pagamento: 'PROMISSORIA',
      vencimento: '01/08/2024',
      emissao: '01/07/2024',
      status: 'pending',
    },
    {
      idPedido: '4',
      pedido: '72355',
      nf: '5555',
      codigo: '1234',
      cliente: 'A S C BRANCO',
      valor: 2250,
      pagamento: 'BOLETO',
      vencimento: '05/08/2024',
      emissao: '01/07/2024',
      status: 'pending',
    },
    {
      idPedido: '5',
      pedido: '6985',
      nf: '2222',
      codigo: '12354',
      cliente: 'KLEVES HENRIQUE AGUIAR',
      valor: 1250,
      pagamento: 'BOLETO',
      vencimento: '13/08/2024',
      emissao: '13/07/2024',
      status: 'pending',
    },
    {
      idPedido: '6',
      pedido: '9635',
      nf: '2255',
      codigo: '123',
      cliente: 'F M FREITAS',
      valor: 2250,
      pagamento: 'PROMISSORIA',
      vencimento: '01/08/2024',
      emissao: '01/07/2024',
      status: 'pending',
    },
    // {
    //   idPedido: '7',
    //   pedido: '8549',
    //   nf: '3255',
    //   codigo: '123',
    //   cliente: 'DEUSELI PEREIRA',
    //   valor: 3350,
    //   pagamento: 'BOLETO',
    //   vencimento: '01/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '8',
    //   pedido: '3025',
    //   nf: '5555',
    //   codigo: '1234',
    //   cliente: 'A S C BRANCO',
    //   valor: 2250,
    //   pagamento: 'BOLETO',
    //   vencimento: '05/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '9',
    //   pedido: '7536',
    //   nf: '2222',
    //   codigo: '12354',
    //   cliente: 'KLEVES HENRIQUE AGUIAR',
    //   valor: 1250,
    //   pagamento: 'BOLETO',
    //   vencimento: '13/08/2024',
    //   emissao: '13/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '10',
    //   pedido: '7978',
    //   nf: '2255',
    //   codigo: '123',
    //   cliente: 'F M FREITAS',
    //   valor: 2250,
    //   pagamento: 'BOLETO',
    //   vencimento: '01/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '11',
    //   pedido: '97685',
    //   nf: '3255',
    //   codigo: '123',
    //   cliente: 'DEUSELI PEREIRA',
    //   valor: 3350,
    //   pagamento: 'PROMISSORIA',
    //   vencimento: '01/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '12',
    //   pedido: '47985',
    //   nf: '5555',
    //   codigo: '1234',
    //   cliente: 'A S C BRANCO',
    //   valor: 2250,
    //   pagamento: 'BOLETO',
    //   vencimento: '05/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
  ]
}

type Pay = {
  pagamento: string
  valor: number
  count: number
}

export default function Table() {
  const [data, setData] = useState<Pedido[]>([])
  const [pending, setPending] = useState<Pedido[]>([])
  const [checked, setChecked] = useState<Pedido[]>([])
  const [arrPay, setArrPay] = useState<Pay[]>([])

  useEffect(() => {
    const isDatalocalStorage = localStorage.getItem('data')
    if (isDatalocalStorage) {
      setData(JSON.parse(isDatalocalStorage))
      // console.log('isDatalocalStorage', isDatalocalStorage)
    } else {
      setData(getData())
    }
  }, [])

  useEffect(() => {
    const dataPending = data.filter((item) => item.status === 'pending')
    const dataChecked = data.filter((item) => item.status === 'checked')
    setPending(dataPending)
    setChecked(dataChecked)

    setArrPay(
      dataPending
        .reduce<Pay[]>((soma, cur) => {
          // guarda o nome atual e verifica se existe repetido
          const pagamento = cur.pagamento

          const repetido = soma.find((elem) => elem.pagamento === pagamento)
          // se for repetido soma, caso contrário adiciona o elemento ao novo array
          if (repetido) {
            repetido.valor += cur.valor
            repetido.count += 1
          } else
            soma.push({
              pagamento: cur.pagamento,
              valor: cur.valor,
              count: 1,
            })
          // retorna o elemento agrupado e somado
          return soma
        }, [])
        .sort((a, b) => (a.pagamento < b.pagamento ? -1 : 1)),
    )
  }, [data])

  const handleToogleStatusPedido = (id: string) => {
    const arrData = data.map((item) =>
      item.idPedido === id
        ? { ...item, status: item.status === 'pending' ? 'checked' : 'pending' }
        : item,
    )
    setData(arrData)
    localStorage.setItem('data', JSON.stringify(arrData))
  }

  const columns: ColumnDef<Pedido>[] = [
    // {
    //   id: 'select',
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && 'indeterminate')
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: 'pedido',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Pedido
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'nf',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            NF
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'codigo',
      header: 'Codigo',
    },
    {
      accessorKey: 'cliente',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="text-center px-20"
          >
            Cliente
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'valor',
      header: () => <div className="text-center">Valor</div>,
      cell: ({ row }) => {
        const valor = parseFloat(row.getValue('valor'))
        return (
          <div className="text-center font-medium">
            <NumberFormat value={valor} />
          </div>
        )
      },
    },
    {
      accessorKey: 'pagamento',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Pagamento
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'vencimento',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Vencimento
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'emissao',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Emissão
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => {
        const { original } = row
        return (
          <Button
            className={`${row.original.status === 'pending' ? 'bg-red-600 hover:bg-red-500 hover:text-green-500' : 'bg-green-600  hover:bg-green-500 hover:text-red-500'}`}
            onClick={() => {
              handleToogleStatusPedido(original.idPedido)
            }}
          >
            {row.original.status === 'pending' ? 'Pendente' : 'Conferido'}
          </Button>
        )
      },
    },
  ]

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto mb-1 justify-end gap-1 px-1 my-1">
        {arrPay.map((item, i) => (
          <div key={i}>
            <CardPay
              fPay={item.pagamento}
              valor={item.valor}
              count={item.count}
            />
          </div>
        ))}
      </div>

      <Tabs defaultValue="pendentes" className="w-full px-1">
        <TabsList>
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="conferidos">Conferidos</TabsTrigger>
        </TabsList>
        <TabsContent value="pendentes">
          <DataTable columns={columns} data={pending} />
        </TabsContent>
        <TabsContent value="conferidos">
          <DataTable columns={columns} data={checked} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
