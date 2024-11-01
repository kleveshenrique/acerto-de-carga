import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

interface payProps {
  fPay: string
  valor: number
  count: number
}

export function CardPay(pay: payProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center px-7 py-3 gap-3">
        <CardTitle>
          {pay.fPay} ({pay.count})
        </CardTitle>
        <CardDescription>R$ {pay.valor},00</CardDescription>
      </CardContent>
    </Card>
  )
}
