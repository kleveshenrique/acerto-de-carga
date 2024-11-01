'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Pedido } from '../payments/columns'

interface PedidoContextType {
  data: Pedido[]
  dataPending: Pedido[]
  dataSuccess: Pedido[]
  updateStatusPedido: (row: Pedido) => Pedido | undefined
}

export const PedidoContext = createContext({} as PedidoContextType)

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

export function PedidoProvider({ children }: { children: ReactNode }) {
  const pedidos = getData()
  const [data, setData] = useState<Pedido[]>(pedidos)

  const pending = data.filter((item) => item.status === 'pending')
  const success = data.filter((item) => item.status === 'success')

  const [dataPending, setDataPeding] = useState<Pedido[]>(pending)
  const [dataSuccess, setDataSuccess] = useState<Pedido[]>(success)

  function updateStatusPedido(pedido: Pedido) {
    let ped = null
    if (pedido.status === 'pending') {
      ped = { ...pedido, status: 'success' }
    } else {
      ped = { ...pedido, status: 'pending' }
    }

    return ped
  }

  return (
    <PedidoContext.Provider
      value={{ data, dataPending, dataSuccess, updateStatusPedido }}
    >
      {children}
    </PedidoContext.Provider>
  )
}

export const usePedido = () => useContext(PedidoContext)
