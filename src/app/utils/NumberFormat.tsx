import React from 'react'

interface ValorEmReaisProps {
  value: number
}

const NumberFormat: React.FC<ValorEmReaisProps> = ({ value }) => {
  return `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
}

export default NumberFormat
