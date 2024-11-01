'use client'

import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'Pedido', headerName: 'Pedido', width: 70 },
  { field: 'NF', headerName: 'NF', width: 80 },
  { field: 'Codigo', headerName: 'Codigo', width: 70 },
  { field: 'Cliente', headerName: 'Cliente', width: 220 },
  {
    field: 'Valor',
    headerName: 'Valor',
    type: 'number',
    width: 100,
    sortable: false,
  },
  { field: 'Pagamento', headerName: 'Pagamento', width: 120 },
  {
    field: 'Vencimento',
    headerName: 'Vencimento',
    width: 120,
  },
  {
    field: 'Emissao',
    headerName: 'Emissão',
    description: 'Data de Emissão do Pedido',
    width: 120,
  },
]

const rows = [
  {
    id: 1,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 2,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 3,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 4,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 5,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 6,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 7,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
  {
    id: 8,
    Pedido: '123',
    NF: '1234567',
    Codigo: '723546',
    Cliente: 'Kleves Henrique Aguair',
    Valor: 10000000,
    Pagamento: 'Boleto',
    Vencimento: '12/08/2024',
    Emissao: '12/07/2024',
  },
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}
