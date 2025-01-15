import * as React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import NumberFormat from '../utils/NumberFormat'

interface payProps {
  fPay: string
  valor: number
  count: number
}

export function CardPay(pay: payProps) {
  return (
    <Card className="w-full h-full p-2">
      <CardContent className="flex flex-col text-center p-0 gap-1">
        <CardTitle className="flex flex-nowrap justify-center text-sm max-md:text-xs">
          {pay.fPay}({pay.count})
        </CardTitle>
        <CardDescription className="flex-nowrap justify-center max-md:text-xs font-bold">
          <NumberFormat value={pay.valor} />
        </CardDescription>
      </CardContent>
    </Card>
  )
}
