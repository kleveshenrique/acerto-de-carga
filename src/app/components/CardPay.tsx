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
    <Card className="w-full h-full px-2">
      <CardContent className="flex flex-col text-center p-0">
        <CardTitle className="max-sm:text-xs">
          {pay.fPay} ({pay.count})
        </CardTitle>
        <CardDescription className="flex-nowrap max-sm:text-xs">
          R$ {pay.valor},00
        </CardDescription>
      </CardContent>
    </Card>
  )
}
