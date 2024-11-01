'use client'
import { useState } from 'react'
import { Pedido, columns } from './columns'
import { DataTable } from './data-table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function getData(): Pedido[] {
  // Fetch data from your API here.
  return [
    {
      idPedido: '1',
      pedido: '1111',
      nf: '2020',
      codigo: '12354',
      cliente: 'KLEVES HENRIQUE AGUIAR',
      valor: 1250,
      pagamento: 'BOLETO',
      vencimento: '13/08/2024',
      emissao: '13/07/2024',
      status: 'success',
    },
    {
      idPedido: '2',
      pedido: '1254',
      nf: '2255',
      codigo: '123',
      cliente: 'F M FREITAS',
      valor: 2250,
      pagamento: 'PROMISSORIA',
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
    // {
    //   idPedido: '4',
    //   pedido: '72355',
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
    //   idPedido: '5',
    //   pedido: '6985',
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
    //   idPedido: '6',
    //   pedido: '9635',
    //   nf: '2255',
    //   codigo: '123',
    //   cliente: 'F M FREITAS',
    //   valor: 2250,
    //   pagamento: 'PROMISSORIA',
    //   vencimento: '01/08/2024',
    //   emissao: '01/07/2024',
    //   status: 'pending',
    // },
    // {
    //   idPedido: '7',
    //   pedido: '8549',
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
    //   pagamento: 'PROMISSORIA',
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

    // ...
  ]
}

export default function Table() {
  const pedidos = getData()

  const [data, setData] = useState(pedidos)

  const pending = data.filter((item) => item.status === 'pending')
  const success = data.filter((item) => item.status === 'success')

  const [dataPending, setDataPeding] = useState(pending)
  const [dataSuccess, setDataSuccess] = useState(success)

  function updateStatusPedido(row: Pedido) {
    console.log(row)
    const idPedidoOld = row.idPedido
    const statusPedido = row.status === 'pending' ? 'success' : 'pending'

    const dataUpdated = data.filter((item) =>
      item.idPedido === idPedidoOld ? { ...item, status: statusPedido } : item,
    )
    setData(dataUpdated)

    const pending = data.filter((item) => item.status === 'pending')
    const success = data.filter((item) => item.status === 'success')

    setDataPeding(pending)
    setDataSuccess(success)

    const pedido = data.find((item) => item.idPedido === idPedidoOld)
    console.log(data)

    return pedido
  }

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="pendente" className="w-full">
        <TabsList>
          <TabsTrigger value="pendente">Pendentes</TabsTrigger>
          <TabsTrigger value="conferidos">Conferidos</TabsTrigger>
        </TabsList>
        <TabsContent value="pendente">
          <DataTable
            columns={columns}
            data={dataPending}
            updateStatusPedido={updateStatusPedido}
          />
        </TabsContent>
        <TabsContent value="conferidos">
          <DataTable
            columns={columns}
            data={dataSuccess}
            updateStatusPedido={updateStatusPedido}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
